import pino from "pino";

const isProduction = process.env.NODE_ENV === "production";
const isTest = process.env.NODE_ENV === "test";

/**
 * Structured logger using pino.
 * - Silent during tests
 * - Pretty formatting in development
 * - JSON output in production
 */
export const logger = pino({
  level: isTest ? "silent" : isProduction ? "info" : "debug",
  transport: isProduction
    ? undefined
    : {
        target: "pino-pretty",
        options: {
          colorize: true,
          translateTime: "HH:MM:ss",
          ignore: "pid,hostname",
        },
      },
});

/**
 * Create a child logger with persistent context
 */
export function createChildLogger(bindings: Record<string, unknown>) {
  return logger.child(bindings);
}

