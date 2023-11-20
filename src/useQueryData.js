// useQueryData.js
import { useQuery } from "react-query";
import queryClient from "./queryClient";

export const useCommonQuery = (queryKey) => {
  return useQuery(queryKey, () => queryClient.getQueryData("queryKey"));
};
