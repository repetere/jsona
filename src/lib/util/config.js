import { config } from '../defaults/config';

export async function configureViewx(options = {}) {
  const configuration = Object.assign({}, config);
  configuration.settings = { ...configuration.settings, ...options.settings };
  return configuration;
}