// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

import { Environment } from './environment-config';

export const environment: Environment = {
  production: false,
  identityProvider: {
    baseUrl: new URL('https://cognito-idp.<aws_region>.amazonaws.com/<user_pool_id>'),
    appClient: {
      clientId: 'app_client_id'
    }
  }
};
