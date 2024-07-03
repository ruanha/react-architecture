import { useMutation, useQueryClient } from "@tanstack/react-query";

import AuthService from "@/infrastructure/auth";

import { getQueryKey as getFeedQueryKey } from "../queries/get-feed";
import { getQueryKey as getMeQueryKey } from "../queries/get-me";

export function useLogout() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => AuthService.logout(),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: getMeQueryKey() });
      queryClient.invalidateQueries({ queryKey: getFeedQueryKey() });
    },
  });
}
