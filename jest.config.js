// https://facebook.github.io/jest/docs/en/configuration.html
module.exports = {
  testPathIgnorePatterns: [
    'sandbox',
    'apps/pattern-lab',
    'brightcove-player.test.js',
    'example-integrations/drupal-lab',
    'packages/uikit-workshop',
    'packages/build-tools/plugins/sass-export-data/tests',
    'packages/components/bolt-button/__tests__/button-wc.test.js',
    'packages/patternlab-node',
  ],
  testEnvironment: 'node',
  globalSetup: './jest-global-setup.js',
  // Notify not working correctly; we want to only get a notification when tests fail, and then get ONE success notificaiton after it passes
  // notify: true,
  // notifyMode: 'failure-success',
};
