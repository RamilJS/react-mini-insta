import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Link, useParams } from "react-router-dom";
import { useUser } from "@/hooks/use-user";
import type { Album } from "@/types/main";
import { useAlbums } from "@/hooks/use-user-albums";

function UserPage(): React.JSX.Element {
  const { id } = useParams<{ id: string }>();
  const { data: user } = useUser(id!);
  const { data: albums } = useAlbums(id!);

  return (
    <div className="container mx-auto max-w-5xl py-10 space-y-10">

      {/* USER INFO */}
      <Card>
        <CardHeader className="flex items-center gap-6">
          <Avatar className="h-20 w-20">
            <AvatarFallback>{user.name.slice(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle className="text-2xl">{user.name}</CardTitle>
            <p className="text-muted-foreground">@{user.username}</p>
            <p className="text-sm text-muted-foreground">{user.email}</p>
          </div>
        </CardHeader>
      </Card>

      {/* ALBUMS */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Albums</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {albums?.map((album: Album) => (
            <Card key={album.id} className="p-4 hover:shadow-lg transition cursor-pointer">
              <CardContent className="p-6 flex flex-col justify-between h-40">
                <p className="font-medium line-clamp-2">{album.title}</p>
                <Link to={`/albums/${album.id}`}>
                  <Button variant="secondary" className="w-full mt-4">Open</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

    </div>
  );
}

export default UserPage;
