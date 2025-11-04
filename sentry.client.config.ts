// This file configures the initialization of Sentry on the client.
// The config you add here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

// Only enable Sentry in production to reduce bundle size in dev
const isProduction = process.env.NODE_ENV === "production";

Sentry.init({
  dsn: "https://7b883d075caa19b41fd9b00ae313a1c6@o4506813739368448.ingest.us.sentry.io/4507222371729408",

  // Reduce tracing overhead: 0.1 in production, disabled in dev
  tracesSampleRate: isProduction ? 0.1 : 0,

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,

  // Reduce replay overhead
  replaysOnErrorSampleRate: isProduction ? 0.5 : 0,

  // This sets the sample rate to be 5% in production, disabled in dev
  replaysSessionSampleRate: isProduction ? 0.05 : 0,

  // You can remove this option if you're not planning to use the Sentry Session Replay feature:
  integrations: [
    Sentry.replayIntegration({
      // Additional Replay configuration goes in here, for example:
      maskAllText: true,
      blockAllMedia: true,
      // Reduce replay buffer size
      maxReplayDuration: 15 * 60 * 1000, // 15 minutes max
    }),
  ],
  // Enable automatic instrumentation but reduce overhead
  autoSessionTracking: isProduction,
});
