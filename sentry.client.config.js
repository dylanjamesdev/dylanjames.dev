import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "http://3cd68f3f597c4799ab00c2c03a2485ff@209.216.85.138:9000/8s",
  tracesSampleRate: 1.0,
});
