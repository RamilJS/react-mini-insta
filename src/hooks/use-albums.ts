import { useQuery } from "@tanstack/react-query";
import { getAlbumsByUserId } from "@/api/albums";

export function useAlbums(userId: string) {
  return useQuery({
    queryKey: ["albums", userId],
    queryFn: () => getAlbumsByUserId(userId),
    enabled: !!userId,
  });
}
