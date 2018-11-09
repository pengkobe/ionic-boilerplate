import { IonicErrorHandler } from 'ionic-angular';
import * as Sentry from 'sentry-cordova';

Sentry.init({ dsn: 'https://8583117beafb40a8be2906252ee80fcc@sentry.io/240912' });

export class SentryIonicErrorHandler extends IonicErrorHandler {
  handleError(error) {
    super.handleError(error);
    try {
      Sentry.captureException(error.originalError || error);
    } catch (e) {
      console.error(e);
    }
  }
}