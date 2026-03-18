import { useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

function PhotoPage(): React.JSX.Element {
  const { id } = useParams()

  // мок фото
  const photo = {
    id,
    title: "Beautiful landscape",
    url: "https://picsum.photos/900/500",
  }

  // мок комментариев
  const comments = [
    {
      id: 1,
      name: "John Doe",
      email: "john@mail.com",
      body: "Amazing photo!",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@mail.com",
      body: "I love this view.",
    },
    {
      id: 3,
      name: "Alex Brown",
      email: "alex@mail.com",
      body: "Where was this taken?",
    },
  ]

  return (
    <div className="container mx-auto max-w-4xl py-10 space-y-10">

      {/* PHOTO */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Photo</CardTitle>
        </CardHeader>

        <CardContent className="space-y-6">

          <img
            src={photo.url}
            alt={photo.title}
            className="w-full rounded-lg object-cover"
          />

          <p className="text-lg font-medium">
            {photo.title}
          </p>

        </CardContent>
      </Card>

      {/* COMMENTS */}
      <Card>
        <CardHeader>
          <CardTitle>Comments</CardTitle>
        </CardHeader>

        <CardContent className="space-y-6">

          {comments.map((comment) => (
            <div key={comment.id} className="space-y-3">

              <div className="flex items-center gap-3">

                <Avatar>
                  <AvatarFallback>
                    {comment.name.slice(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>

                <div>
                  <p className="font-medium">{comment.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {comment.email}
                  </p>
                </div>

              </div>

              <p className="text-sm">
                {comment.body}
              </p>

              <Separator />

            </div>
          ))}

        </CardContent>
      </Card>

    </div>
  )
}

export default PhotoPage;
