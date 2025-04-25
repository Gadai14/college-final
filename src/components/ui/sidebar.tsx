"use client"

import * as React from "react"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

const sidebarVariants = cva(
  "fixed inset-y-0 left-0 z-50 flex w-full flex-col border-r bg-background transition-all sm:w-64 lg:w-72",
  {
    variants: {
      variant: {
        default: "border-r bg-background",
        transparent: "border-none bg-transparent",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
)

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "transparent"
  open?: boolean
}

const Sidebar = React.forwardRef<HTMLDivElement, SidebarProps>(
  ({ className, variant, open = false, ...props }) => {
    return (
      <div
        
        className={cn(
          sidebarVariants({ variant }),
          open ? "translate-x-0" : "-translate-x-full sm:translate-x-0",
          className,
        )}
        {...props}
      />
    )
  },
)
Sidebar.displayName = "Sidebar"

const SidebarHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex h-14 items-center border-b px-4", className)} {...props} />
  ),
)
SidebarHeader.displayName = "SidebarHeader"

const SidebarContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("flex-1 overflow-auto p-4", className)} {...props} />,
)
SidebarContent.displayName = "SidebarContent"

const SidebarFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex items-center border-t p-4", className)} {...props} />
  ),
)
SidebarFooter.displayName = "SidebarFooter"

const SidebarGroup = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("pb-4", className)} {...props} />,
)
SidebarGroup.displayName = "SidebarGroup"

const SidebarMenu = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("-mx-2 space-y-1", className)} {...props} />,
)
SidebarMenu.displayName = "SidebarMenu"

const SidebarMenuItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("", className)} {...props} />,
)
SidebarMenuItem.displayName = "SidebarMenuItem"

const sidebarMenuButtonVariants = cva(
  "flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        default: "hover:bg-accent hover:text-accent-foreground",
        ghost: "hover:bg-transparent hover:text-accent-foreground hover:underline",
      },
      size: {
        default: "h-9 px-2 py-1.5 text-sm",
        sm: "h-8 px-2 py-1 text-xs",
        lg: "h-10 px-3 py-2",
      },
      isActive: {
        true: "bg-accent text-accent-foreground",
        false: "text-muted-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      isActive: false,
    },
  },
)

interface SidebarMenuButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "ghost"
  size?: "default" | "sm" | "lg"
  isActive?: boolean
  asChild?: boolean
}

const SidebarMenuButton = React.forwardRef<HTMLButtonElement, SidebarMenuButtonProps>(
  ({ className, variant, size, isActive, asChild = false, ...props }) => {
    // Choose the component to render, either 'button' or 'Fragment'
    const Comp = asChild ? React.Fragment : "button";

    // Extract childProps safely if asChild is true
    const childProps = asChild && React.isValidElement(props.children)
      ? (props.children as React.ReactElement).props
      : {};

    // Ensure childProps is an object, and filter props only if valid
    const safeChildProps = typeof childProps === 'object' ? childProps : {};

    // If asChild is true, we shouldn't apply ref to React.Fragment
    if (asChild) {
      return (
        <Comp
          className={cn(sidebarMenuButtonVariants({ variant, size, isActive, className }))}
          {...props} // Spread the props
          {...safeChildProps} // Spread the childProps safely
        >
          {props.children}
        </Comp>
      );
    }

    // If asChild is false, use 'button' and apply ref correctly
    return (
      <Comp
      
        className={cn(sidebarMenuButtonVariants({ variant, size, isActive, className }))}
        {...props} // Spread the props
        {...safeChildProps} // Spread the childProps safely
      >
        {props.children}
      </Comp>
    );
  }
);

SidebarMenuButton.displayName = "SidebarMenuButton"

const SidebarMenuSub = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("pl-4 pt-1", className)} {...props} />,
)
SidebarMenuSub.displayName = "SidebarMenuSub"

const SidebarMenuSubItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("", className)} {...props} />,
)
SidebarMenuSubItem.displayName = "SidebarMenuSubItem"

const sidebarMenuSubButtonVariants = cva(
  "flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        default: "hover:bg-accent hover:text-accent-foreground",
        ghost: "hover:bg-transparent hover:text-accent-foreground hover:underline",
      },
      size: {
        default: "h-9 px-2 py-1.5 text-sm",
        sm: "h-8 px-2 py-1 text-xs",
        lg: "h-10 px-3 py-2",
      },
      isActive: {
        true: "bg-accent/50 font-medium text-foreground",
        false: "text-muted-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      isActive: false,
    },
  },
)

interface SidebarMenuSubButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "ghost"
  size?: "default" | "sm" | "lg"
  isActive?: boolean
  asChild?: boolean
}

const SidebarMenuSubButton = React.forwardRef<HTMLButtonElement, SidebarMenuSubButtonProps>(
  ({ className, variant, size, isActive, asChild = false, ...props }) => {
    // Choose the component to render
    const Comp = asChild ? React.Fragment : "button";
    
    // Only extract childProps if it's a valid React element and ensure it's an object
    const childProps = asChild && React.isValidElement(props.children)
      ? (props.children as React.ReactElement).props
      : {};

    // Ensure that childProps is an object
    const safeChildProps = typeof childProps === 'object' ? childProps : {};

    // If asChild is true, we shouldn't pass the ref to React.Fragment.
    if (asChild) {
      return (
        <Comp
          className={cn(sidebarMenuSubButtonVariants({ variant, size, isActive, className }))}
          {...props} // Spread props only if they're valid objects
          {...safeChildProps} // Ensure childProps is an object
        >
          {props.children}
        </Comp>
      );
    }

    // If asChild is false, we can safely apply the ref to the button element
    return (
      <Comp
   
        className={cn(sidebarMenuSubButtonVariants({ variant, size, isActive, className }))}
        {...props} // Spread props only if they're valid objects
        {...safeChildProps} // Ensure childProps is an object
      >
        {props.children}
      </Comp>
    );
  }
);

SidebarMenuSubButton.displayName = "SidebarMenuSubButton"

const SidebarRail = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("absolute bottom-0 right-0 top-0 w-px bg-border opacity-50", className)} {...props} />
  ),
)
SidebarRail.displayName = "SidebarRail"

const SidebarTrigger = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        "inline-flex h-9 w-9 items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 sm:hidden",
        className,
      )}
      {...props}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4"
      >
        <line x1="4" x2="20" y1="12" y2="12" />
        <line x1="4" x2="20" y1="6" y2="6" />
        <line x1="4" x2="20" y1="18" y2="18" />
      </svg>
      <span className="sr-only">Toggle Menu</span>
    </button>
  ),
)
SidebarTrigger.displayName = "SidebarTrigger"

const SidebarInset = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex min-h-screen flex-col sm:pl-64 lg:pl-72", className)} {...props} />
  ),
)
SidebarInset.displayName = "SidebarInset"

const SidebarProvider = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("relative flex min-h-screen", className)} {...props} />
  ),
)
SidebarProvider.displayName = "SidebarProvider"

export {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
  SidebarRail,
  SidebarTrigger,
  SidebarInset,
  SidebarProvider,
}
