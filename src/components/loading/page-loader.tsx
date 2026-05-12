import { Skeleton } from "@/components/ui/skeleton";

function PageLoader(): React.JSX.Element {
  return (
    <div className="container mx-auto py-10 space-y-6">
      <Skeleton className="h-10 w-64" />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, i) => (
          <Skeleton key={i} className="h-48 w-full rounded-xl" />
        ))}
      </div>
    </div>
  );
}

export default PageLoader;
