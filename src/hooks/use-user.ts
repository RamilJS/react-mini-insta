import { useQuery } from "@tanstack/react-query";
import { getUserById } from "@/api/users";

export function useUser(userId: string) {
  return useQuery({
    queryKey: ["user", userId],
    queryFn: () => getUserById(userId),
    enabled: !!userId,
  });
}
