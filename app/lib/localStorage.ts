import { Resource } from "@/types/Resource";

const STORAGE_KEY = "resources";

export const getResources = (): Resource[] => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

export const getResourceById = (id: string): Resource | undefined => {
  return getResources().find((r) => r.id === id);
};

export const saveResource = (resource: Resource) => {
  const all = getResources();
  all.push(resource);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
};

export const updateResource = (id: string, updated: Partial<Resource>) => {
  let all = getResources();
  all = all.map((r) => (r.id === id ? { ...r, ...updated } : r));
  localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
};

export const deleteResource = (id: string) => {
  const all = getResources().filter((r) => r.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
};
