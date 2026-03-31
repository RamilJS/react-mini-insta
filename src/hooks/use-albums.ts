import { useQuery } from "@tanstack/react-query";
import { getAlbumById, getPhotosByAlbumId } from "@/api/photos";
import type { Album, Photo } from "@/types/main";

export function useAlbums(albumId: string) {
  const albumQuery = useQuery<Album>({
    queryKey: ["albums", albumId],
    queryFn: () => getAlbumById(albumId),
    enabled: !!albumId,
  });

  const photosQuery = useQuery<Photo[]>({
    queryKey: ["photos", albumId],
    queryFn: () => getPhotosByAlbumId(albumId),
    enabled: !!albumId,
  });

  return { albumQuery, photosQuery };
}
