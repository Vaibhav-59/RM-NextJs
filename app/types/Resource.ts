export interface Resource {
  id: string;
  title: string;
  description: string;
  type: "Article" | "Video" | "Tutorial";
  createdAt: string;
}
