import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getPhotoById, getCommentsByPhotoId } from "@/api/photos";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

type Comment = {
  postId: number
  id: number
  name: string
  email: string
  body: string
};

function PhotoPage(): React.JSX.Element {
  const { id } = useParams();

  const {
    data: photo,
    isLoading: isPhotoLoading,
    isError: isPhotoError,
  } = useQuery({
    queryKey: ["photo", id],
    queryFn: () => getPhotoById(id!),
    enabled: !!id,
  });

  const {
    data: comments,
    isLoading: isCommentsLoading,
    isError: isCommentsError,
  } = useQuery<Comment[]>({
    queryKey: ["comments", id],
    queryFn: () => getCommentsByPhotoId(id!),
    enabled: !!id,
  });

  console.log(photo);

  // loading state
  if (isPhotoLoading) {
    return <div className="p-10 text-center">Loading photo...</div>
  }

  // error state
  if (isPhotoError || !photo) {
    return <div className="p-10 text-center text-red-500">Error loading photo</div>
  }

  return (
    <div className="container mx-auto max-w-4xl py-10 space-y-10">

      {/* PHOTO */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Photo</CardTitle>
        </CardHeader>

        <CardContent className="space-y-6">

          <img
            src={`https://picsum.photos/seed/${photo.id}/600/400`}
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

          {isCommentsLoading && (
            <p>Loading comments...</p>
          )}

          {isCommentsError && (
            <p className="text-red-500">Error loading comments</p>
          )}

          {comments?.map((comment: Comment) => (
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
