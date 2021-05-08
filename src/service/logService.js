import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';

function init (){
    Sentry.init({
        dsn: "https://dc668381806c42a9b37fcad024dc1a0e@o630828.ingest.sentry.io/5755268",
        integrations: [new Integrations.BrowserTracing()],
      
        // Set tracesSampleRate to 1.0 to capture 100%
        // of transactions for performance monitoring.
        // We recommend adjusting this value in production
        tracesSampleRate: 1.0,
      });      
}

function log(error){
    Sentry.captureException(error);
}

export default{
    init,
    log
}