import type { FallbackProps } from "react-error-boundary";

function ErrorFallback({ error }: FallbackProps): React.JSX.Element {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <p className="text-red-500 text-lg">
        {error instanceof Error ? error.message : "Something went wrong"}
      </p>
    </div>
  );
}

export default ErrorFallback;
