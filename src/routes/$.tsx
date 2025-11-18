import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Home, ArrowLeft, Search } from "lucide-react";

export const Route = createFileRoute("/$")({
  component: NotFoundPage,
});

function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] px-4 py-16">
      <div className="max-w-md w-full space-y-8 text-center">
        {/* 404 Number */}
        <div className="space-y-4">
          <h1 className="text-9xl font-bold text-primary/20 select-none">
            404
          </h1>
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">
              Page Not Found
            </h2>
            <p className="text-muted-foreground text-lg">
              The page you're looking for doesn't exist or has been moved.
            </p>
          </div>
        </div>

        {/* Card with helpful links */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-center gap-2">
              <Search className="h-5 w-5" />
              What would you like to do?
            </CardTitle>
            <CardDescription>
              Here are some helpful links to get you back on track
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                onClick={() => navigate({ to: "/" })}
                className="flex-1"
                size="lg"
              >
                <Home className="mr-2 h-4 w-4" />
                Go Home
              </Button>
              <Button
                onClick={() => window.history.back()}
                variant="outline"
                className="flex-1"
                size="lg"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Go Back
              </Button>
            </div>
            
            <div className="pt-4 border-t">
              <p className="text-sm text-muted-foreground mb-3">
                Popular pages:
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <Button
                  asChild
                  variant="ghost"
                  size="sm"
                >
                  <Link to="/docker/compose-builder">
                    Compose Builder
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  size="sm"
                >
                  <Link to="/config-builder">
                    Config Builder
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  size="sm"
                >
                  <Link to="/scheduler-builder">
                    Scheduler Builder
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

