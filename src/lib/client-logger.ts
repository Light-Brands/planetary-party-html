/* eslint-disable no-console */
/**
 * Client-side logger for browser environments.
 * Provides structured logging without pino dependencies.
 */

type LogLevel = "debug" | "info" | "warn" | "error";

interface LogContext {
  [key: string]: unknown;
}

const isDevelopment = process.env.NODE_ENV !== "production";

function formatMessage(level: LogLevel, context: LogContext, message: string) {
  const timestamp = new Date().toISOString();
  return { timestamp, level, message, ...context };
}

function shouldLog(level: LogLevel): boolean {
  if (!isDevelopment && (level === "debug" || level === "info")) {
    return false;
  }
  return true;
}

export const logger = {
  debug(context: LogContext, message: string) {
    if (shouldLog("debug")) {
      console.debug(formatMessage("debug", context, message));
    }
  },

  info(context: LogContext, message: string) {
    if (shouldLog("info")) {
      console.info(formatMessage("info", context, message));
    }
  },

  warn(context: LogContext, message: string) {
    if (shouldLog("warn")) {
      console.warn(formatMessage("warn", context, message));
    }
  },

  error(context: LogContext, message: string) {
    if (shouldLog("error")) {
      console.error(formatMessage("error", context, message));
    }
  },
};

