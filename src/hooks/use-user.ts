import { useSuspenseQuery } from "@tanstack/react-query";
import { getUserById } from "@/api/users";
import type { User } from "@/types/main";

export function useUser(id: string) {
  return useSuspenseQuery<User>({
    queryKey: ["user", id],
    queryFn: () => getUserById(id),
  });
}
