import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

export function Card({ className, hover = false, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-[24px] border border-border bg-surface p-6 shadow-sm dark:shadow-none",
        hover &&
          "transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
