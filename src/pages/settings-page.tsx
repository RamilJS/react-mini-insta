import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useAppStore } from "@/store/app-store";
import { useNavigate } from "react-router-dom";

function SettingsPage(): React.JSX.Element {
  const { theme, grid, setTheme, setGrid, userId, logout } = useAppStore();
  const navigate = useNavigate();

  return (
    <div className="container mx-auto max-w-3xl py-10 space-y-8">
      <h1 className="text-3xl font-bold">Settings</h1>

      <Card>
        <CardHeader>
          <CardTitle>Current User</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{userId || "Not logged in"}</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Theme</CardTitle>
        </CardHeader>
        <CardContent className="flex gap-4">
          <Button
            variant={theme === "light" ? "default" : "outline"}
            onClick={() => setTheme("light")}
          >
            Light
          </Button>

          <Button
            variant={theme === "dark" ? "default" : "outline"}
            onClick={() => setTheme("dark")}
          >
            Dark
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Photo Grid</CardTitle>
        </CardHeader>
        <CardContent className="flex gap-4">
          {[3, 4, 5].map((cols) => (
            <Button
              key={cols}
              variant={grid === cols ? "default" : "outline"}
              onClick={() => setGrid(cols as 3 | 4 | 5)}
            >
              {cols} Columns
            </Button>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Account</CardTitle>
        </CardHeader>
        <CardContent>
          <Button
            variant="destructive"
            onClick={() => {
              logout();
              navigate("/login");
            }}
          >
            Logout
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default SettingsPage;
