// src/pages/NotFoundPage.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function NotFoundPage(): React.JSX.Element {
  return (
    <div className="flex items-center justify-center min-h-screen bg-muted p-4">
      <Card className="max-w-md w-full text-center shadow-lg">
        <CardHeader>
          <CardTitle className="text-4xl font-bold text-destructive">
            404
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            Oops! The page you are looking for does not exist.
          </p>
          <Link to="/">
            <Button variant="default" className="w-full">
              Go Back Home
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotFoundPage;
