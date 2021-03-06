/**
 * Demo for testing out Bolt config updates that fall back to
 * using https://github.com/davidtheclark/cosmiconfig if a .boltrc
 * config file isn't already specified or initialized.
 *
 * This means that a .boltrc config in a parent folder would
 * automatically get used if a more local one can't be found --
 *
 * For example, we can now use Webpack's vanilla CLI as-is!
 *
 * ```bash
 *   cd packages/build-tools
 *   npx webpack-cli --config="create-webpack-config.js" --progress
 * ```
 */
const path = require('path');
const globby = require('globby');
const baseBoltDir = path.join(__dirname, './apps/bolt-site');
const siteConfig = require(path.join(baseBoltDir, '.boltrc'));

// Paths that are relative to `baseBoltDir` must now be relative to this directory (i.e. `__dirname`)
const adjustRelativePath = thePath =>
  path.relative(__dirname, path.resolve(baseBoltDir, thePath));

module.exports = {
  wwwDir: adjustRelativePath(siteConfig.wwwDir),
  buildDir: adjustRelativePath(siteConfig.buildDir),
  components: {
    global: globby
      .sync(path.join(__dirname, './packages/components/*/package.json'))
      .map(pkgPath => require(pkgPath))
      .map(pkg => pkg.name),
  },
  alterTwigEnv: siteConfig.alterTwigEnv,
};
