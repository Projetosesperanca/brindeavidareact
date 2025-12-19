import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  container?: boolean;
}

export function Section({ className, container = true, children, ...props }: SectionProps) {
  return (
    <section className={cn("py-8 md:py-12", className)} {...props}>
      {container ? (
        <div className="container mx-auto px-4">
          {children}
        </div>
      ) : (
        children
      )}
    </section>
  );
}
