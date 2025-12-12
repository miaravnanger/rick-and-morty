import { useQuery } from "@tanstack/react-query";
import {
  fetchAllChar,
  fetchCharById,
  fetchCharByIds,
  searchCharsByName,
} from "../api/AxiosRickAndMorty";

const useAllChar = (page = 1) => {
  return useQuery({
    queryKey: ["characters", page],
    queryFn: fetchAllChar(page),
  });
};

const useCharId = (id) => {
  return useQuery({
    queryKey: ["charDetails", id],
    queryFn: () => fetchCharById(id),
    enabled: !!id,
  });
};

const useMainCharacters = (ids) => {
  return useQuery({
    queryKey: ["mainCharacters", ids],
    queryFn: () => fetchCharByIds(ids),
    enabled: Array.isArray(ids) && ids.length > 0,
  });
};

const useSearchCharacters = (name) => {
  return useQuery({
    queryKey: ["searchCharacters", name],
    queryFn: () => searchCharsByName(name),
    enabled: !!name && name.length > 0,
  });
};

export { useAllChar, useCharId, useMainCharacters, useSearchCharacters };
