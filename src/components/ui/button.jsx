import * as React from "react"
import { cva } from "class-variance-authority";
import { cn } from "cn"
import { Slot } from "radix-ui"

const buttonVariants = cva(
  "group/button state-layer inline-flex shrink-0 items-center justify-center gap-2 rounded-full text-label-lg whitespace-nowrap outline-none select-none transition-colors duration-200 disabled:pointer-events-none disabled:opacity-40 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-on-primary [--state-color:var(--md-on-primary)]",
        tonal:
          "bg-secondary-container text-on-secondary-container [--state-color:var(--md-on-secondary-container)]",
        secondary:
          "bg-secondary-container text-on-secondary-container [--state-color:var(--md-on-secondary-container)]",
        outline:
          "border border-outline bg-transparent text-primary [--state-color:var(--md-primary)]",
        ghost:
          "bg-transparent text-primary [--state-color:var(--md-primary)]",
        elevated:
          "bg-surface-container-low text-primary [--state-color:var(--md-primary)]",
        destructive:
          "bg-error text-on-error [--state-color:var(--md-on-error)]",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-6 has-data-[icon=inline-start]:pl-4 has-data-[icon=inline-end]:pr-4",
        sm: "h-8 gap-1.5 px-4 text-label-md has-data-[icon=inline-start]:pl-3 has-data-[icon=inline-end]:pr-3",
        lg: "h-12 px-7 has-data-[icon=inline-start]:pl-5 has-data-[icon=inline-end]:pr-5",
        icon: "size-10 px-0",
        "icon-sm": "size-8 px-0",
        "icon-lg": "size-12 px-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
