<?php

namespace Drupal\bolt_connect;

use \BasaltInc\TwigTools;
use \Webmozart\PathUtil\Path;

class BoltConnectTwigNamespaces extends \Twig_Loader_Filesystem {
  public $twigLoaderConfig = [];

  public function __construct() {
    $config = \Drupal::config('bolt_connect.settings');
    $log = \Drupal::logger('bolt_connect');

    if (!$config->get('twig_namespaces_file_path') || !$config->get('boltrc_file_path')) {
      $msg = 'Bolt Twig Namespaces has not been configured yet.';
      $log->info($msg);
      drupal_set_message($msg, 'warning');
      return;
    }

    $filePath = Path::join(DRUPAL_ROOT, $config->get('twig_namespaces_file_path'));

    if (!file_exists($filePath)) {
      $msg = 'Bolt Twig Namespace file does not exist; perhaps you need to compile Bolt? Looking for it at: ' . $filePath;
      $log->error($msg);
      drupal_set_message($msg, 'error');
      return;
    }

    try {
      $namespacePathRoot = Path::join(DRUPAL_ROOT, dirname($config->get('boltrc_file_path')));
      $fileData = TwigTools\Utils::getData($filePath);

      $this->twigLoaderConfig = TwigTools\Namespaces::buildLoaderConfig($fileData, $namespacePathRoot);

      foreach ($this->twigLoaderConfig as $key => $value) {
        foreach ($value['paths'] as $path) {
          if (file_exists($path)) {
            $this->addPath($path, $key);
          } else {
            $message = 'Twig Namespace path does not exist: ' . $path;
            $log->warning($message);
            drupal_set_message($message, 'error');
          }
        }
      }

    } catch (Exception $exception) {
      $errorMsg = 'Error adding Twig Namespaces from: ' . $filePath;
      $log->error($errorMsg);
      drupal_set_message($errorMsg, 'error');
    }
  }

}
