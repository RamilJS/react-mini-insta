import { Card, CardContent } from "@/components/ui/card";
import { Link, useParams } from "react-router-dom";

function AlbumPage(): React.JSX.Element {
  const { id } = useParams();

  // мок данных
  const album = {
    title: "Vacation photos",
  };

  // временные мок-данные
  const photos = [
    { id: 1, title: "Photo 1", url: "https://picsum.photos/300?1" },
    { id: 2, title: "Photo 2", url: "https://picsum.photos/300?2" },
    { id: 3, title: "Photo 3", url: "https://picsum.photos/300?3" },
    { id: 4, title: "Photo 4", url: "https://picsum.photos/300?4" },
    { id: 5, title: "Photo 5", url: "https://picsum.photos/300?5" },
    { id: 6, title: "Photo 6", url: "https://picsum.photos/300?6" },
  ]

  return (
    <div className="container mx-auto max-w-6xl py-10 space-y-8">

      {/* Заголовок */}
      <h1 className="text-3xl font-bold">
        Album #{id}
      </h1>

      {/* ALBUM TITLE */}
      <h2 className="text-xl text-muted-foreground">
        {album.title}
      </h2>

      {/* Сетка фотографий */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {photos.map((photo) => (
          <Link key={photo.id} to={`/photos/${photo.id}`}>
            <Card className="overflow-hidden hover:shadow-lg transition cursor-pointer">
              <CardContent className="p-0">

                <img
                  src={photo.url}
                  alt={photo.title}
                  className="w-full h-48 object-cover"
                />

              </CardContent>
            </Card>
          </Link>
        ))}

      </div>

    </div>
  )
}

export default AlbumPage;
