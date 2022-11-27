const keycloakConfig = {
  url: 'http://localhost:8180',
  realm: 'computerstore',
  clientId: 'acceso'
};

export const environment = {
  keycloakConfig: keycloakConfig,
  production: true,
  apiUrl: 'http://localhost:8080',
  baseUrl: "http://localhost:8080"
};
