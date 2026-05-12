import { useSuspenseQuery } from "@tanstack/react-query";
import { getAlbumById, getPhotosByAlbumId } from "@/api/photos";
import type { Album, Photo } from "@/types/main";

export function useAlbums(albumId: string) {
  const albumQuery = useSuspenseQuery<Album>({
    queryKey: ["albums", albumId],
    queryFn: () => getAlbumById(albumId),
  });

  const photosQuery = useSuspenseQuery<Photo[]>({
    queryKey: ["photos", albumId],
    queryFn: () => getPhotosByAlbumId(albumId),
  });

  return { albumQuery, photosQuery };
}
