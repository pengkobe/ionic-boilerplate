import { ENV } from '@app/env';

console.log('ENV:', ENV.mode);
console.log('ENV serverUrl:', ENV.serverUrl);
export const baseUrl = ENV.serverUrl;
export const qiniuDomain = '';
