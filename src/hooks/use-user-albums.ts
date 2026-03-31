// hooks/use-user-albums.ts
import { useQuery } from "@tanstack/react-query";
import { getAlbumsByUserId } from "@/api/albums";
import type { Album } from "@/types/main";

export function useUserAlbums(userId: string) {
  return useQuery<Album[]>({
    queryKey: ["user-albums", userId],
    queryFn: () => getAlbumsByUserId(userId),
    enabled: !!userId,
  });
}
