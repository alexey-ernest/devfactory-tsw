// The file for the current environment will overwrite this one during build
// Different environments can be found in config/environment.{dev|prod}.ts
// The build system defaults to the dev environment

let env: {};
declare var WEBPACK_IS_DEVELOPMENT: any;

if (WEBPACK_IS_DEVELOPMENT) {
  env = require('../../config/environment.dev.ts');
} else {
  env = require('../../config/environment.prod.ts');
}

export const environment = env['environment'];
