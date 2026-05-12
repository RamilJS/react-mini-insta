import { useSuspenseQuery } from "@tanstack/react-query";
import { getAlbumsByUserId } from "@/api/albums";
import type { Album } from "@/types/main";

export function useAlbums(userId: string) {
  return useSuspenseQuery<Album[]>({
    queryKey: ["albums", userId],
    queryFn: () => getAlbumsByUserId(userId),
  });
}
