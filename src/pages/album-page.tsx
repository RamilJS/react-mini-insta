import { Card, CardContent } from "@/components/ui/card";
import { Link, useParams } from "react-router-dom";
import { useAlbums } from "@/hooks/use-albums";
import type { Photo } from "@/types/main";
import { useAppStore } from "@/store/app-store";

function AlbumPage(): React.JSX.Element {
  const { id } = useParams<{ id: string }>();
  const { albumQuery, photosQuery } = useAlbums(id!);
  const grid = useAppStore((state) => state.grid);

  // ==== Loading / Error ====
  if (albumQuery.isLoading || photosQuery.isLoading) return <p>Loading...</p>;
  if (albumQuery.isError) return <p>Album not found</p>;
  if (photosQuery.isError) return <p>Photos not found</p>;

  return (
    <div className="container mx-auto max-w-6xl py-10 space-y-8">
      {/* Заголовок */}
      <h1 className="text-3xl font-bold">Album #{id}</h1>

      {/* ALBUM TITLE */}
      <h2 className="text-xl text-muted-foreground">{albumQuery.data?.title}</h2>

      {/* Сетка фотографий */}
      <div className={`grid grid-cols-2 md:grid-cols-${grid} gap-6`}>
        {photosQuery.data?.map((photo: Photo) => (
          <Link key={photo.id} to={`/photos/${photo.id}`}>
            <Card className="overflow-hidden hover:shadow-lg transition cursor-pointer">
              <CardContent className="p-0">
                <img
                  src={`https://picsum.photos/seed/${photo.id}/600/400`}
                  alt={photo.title}
                  className="w-full h-48 object-cover"
                />
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default AlbumPage;
