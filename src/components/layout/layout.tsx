import { Link, Outlet } from "react-router-dom";
import { Button } from "@/components/ui/button";

function Layout() {
  return (
    <div className="min-h-screen flex flex-col">

      {/* HEADER */}
      <header className="border-b bg-background">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link
            to="/"
            className="text-xl font-bold hover:opacity-80 transition"
          >
            Mini Insta
          </Link>

          <Link to="/settings">
            <Button variant="outline">
              Settings
            </Button>
          </Link>
        </div>

      </header>

      {/* PAGE CONTENT */}
      <main className="flex-1">
        <Outlet />
      </main>

    </div>
  )
};

export default Layout;
