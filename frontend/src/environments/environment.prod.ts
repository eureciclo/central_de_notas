import { global_variables } from './global_variables';

export const environment = Object.assign(global_variables, {
  production: true,

  apiEndpoint: 'http://localhost:8500/api',
  endpoint: 'http://localhost:8500',
  clientId: '957ef5b3-b92a-47e0-931a-b1dcc6bb4f1d',
  clientSecret: 'APyQfmDWZh7kk9oFTU3cjONh3rycGn7vXWVJMBVd',
  scope: ''
});
