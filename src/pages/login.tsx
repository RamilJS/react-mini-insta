import { useState, useEffect } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useAppStore } from "@/store/app-store";
import { getUserById } from "@/api/users";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

function LoginPage(): React.JSX.Element {
  const [userId, setUserId] = useState("");
  const [submittedId, setSubmittedId] = useState("");
  const navigate = useNavigate();
  const setUserIdStore = useAppStore((state) => state.setUserId);
  const userIdFromStore = useAppStore((state) => state.userId);

  const { data, isError, isFetching } = useQuery({
    queryKey: ["login-user", submittedId],
    queryFn: () => getUserById(submittedId),
    enabled: !!submittedId,
    retry: false,
  });

  useEffect(() => {
    if (data) {
      setUserIdStore(submittedId);
      navigate(`/users/${submittedId}`);
    }
  }, [data, submittedId, navigate, setUserIdStore]);

  if (userIdFromStore) {
    return <Navigate to={`/users/${userIdFromStore}`} replace />;
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Login</CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">

          <div className="space-y-2">
            <Label>User ID</Label>
            <Input
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  setSubmittedId(userId);
                }
              }}
              placeholder="Enter user id (1-10)"
            />
          </div>

          <Button
            className="w-full"
            onClick={() => setSubmittedId(userId)}
            disabled={isFetching}
          >
            {isFetching ? "Loading..." : "Login"}
          </Button>

          {isError && (
            <p className="text-red-500 text-sm">
              User not found
            </p>
          )}

        </CardContent>
      </Card>
    </div>
  )
};

export default LoginPage;
