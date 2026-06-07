import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "primary" | "success";
}

export function Badge({
  className,
  variant = "default",
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium",
        variant === "default" && "bg-primary/10 text-primary",
        variant === "primary" && "bg-primary text-white",
        variant === "success" && "bg-success/10 text-success",
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
