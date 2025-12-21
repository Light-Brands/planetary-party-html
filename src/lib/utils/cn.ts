import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines class names using clsx and tailwind-merge for optimal Tailwind CSS class handling.
 * This prevents conflicting Tailwind classes and allows conditional class application.
 *
 * @example
 * cn("px-4 py-2", isActive && "bg-blue-500", className)
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

