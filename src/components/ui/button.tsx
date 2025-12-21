"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, type ButtonHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground hover:bg-forest-800 focus-visible:ring-primary",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-bioluminescent-cyan focus-visible:ring-secondary",
        ghost:
          "bg-transparent hover:bg-earth-100 focus-visible:ring-earth-400",
        outline:
          "border border-earth-300 bg-transparent hover:bg-earth-50 focus-visible:ring-earth-400",
        accent:
          "bg-accent text-accent-foreground hover:bg-bioluminescent-gold/90 focus-visible:ring-accent",
        destructive:
          "bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-500",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-6 text-base",
        lg: "h-13 px-8 text-lg",
        icon: "h-10 w-10",
      },
      glow: {
        none: "",
        teal: "shadow-[0_0_15px_theme(colors.bioluminescent.teal)] hover:shadow-[0_0_25px_theme(colors.bioluminescent.teal)]",
        gold: "shadow-[0_0_15px_theme(colors.bioluminescent.gold)] hover:shadow-[0_0_25px_theme(colors.bioluminescent.gold)]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      glow: "none",
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, glow, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, glow, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };

