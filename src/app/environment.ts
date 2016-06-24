// The file for the current environment will overwrite this one during build
// Different environments can be found in config/environment.{dev|prod}.ts
// The build system defaults to the dev environment

let env: {};

if (process.env.ENV === 'production') {
  env = require('../../config/environment.prod.ts');
} else {
  env = require('../../config/environment.dev.ts');
}

export const environment = env['environment'];