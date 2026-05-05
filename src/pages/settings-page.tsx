// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Switch } from "@/components/ui/switch";
// import { Label } from "@/components/ui/label";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";

// function SettingsPage(): React.JSX.Element {
//   return (
//     <div className="container mx-auto max-w-3xl py-10 space-y-8">

//       <h1 className="text-3xl font-bold">Settings</h1>

//       {/* THEME */}
//       <Card>
//         <CardHeader>
//           <CardTitle>Theme</CardTitle>
//         </CardHeader>

//         <CardContent className="flex items-center justify-between">

//           <Label htmlFor="theme-switch">
//             Dark mode
//           </Label>

//           <Switch id="theme-switch" />

//         </CardContent>
//       </Card>

//       {/* PHOTO GRID */}
//       <Card>
//         <CardHeader>
//           <CardTitle>Photo Grid</CardTitle>
//         </CardHeader>

//         <CardContent className="space-y-4">

//           <Label>Photos per row</Label>

//           <Select defaultValue="3">
//             <SelectTrigger className="w-40">
//               <SelectValue />
//             </SelectTrigger>

//             <SelectContent>
//               <SelectItem value="3">3 photos</SelectItem>
//               <SelectItem value="4">4 photos</SelectItem>
//               <SelectItem value="5">5 photos</SelectItem>
//             </SelectContent>
//           </Select>

//         </CardContent>
//       </Card>

//     </div>
//   )
// };

// export default SettingsPage;


import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useAppStore } from "@/store/app-store";

function SettingsPage(): React.JSX.Element {
  const { theme, grid, setTheme, setGrid, userId } = useAppStore();

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
    </div>
  );
}

export default SettingsPage;
