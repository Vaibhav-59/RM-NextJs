import { Resource } from "@/types/Resource";

interface Props {
  resource: Resource;
  onDelete: (id: string) => void;
}

export default function ResourceCard({ resource, onDelete }: Props) {
  const badgeColor: Record<Resource["type"], string> = {
    Article: "bg-orange-500",
    Video: "bg-blue-500",
    Tutorial: "bg-cyan-500",
  };

  return (
    <div className="bg-white p-4 shadow rounded-lg">
      <span className={`text-white px-3 py-1 rounded-full ${badgeColor[resource.type] || "bg-gray-500"}`}>
        {resource.type}
      </span>

      <h3 className="font-bold text-lg mt-2">{resource.title}</h3>
      <p className="text-gray-600">{resource.description}</p>

      <div className="flex justify-between mt-4">
        <a href={`/edit/${resource.id}`} className="text-indigo-500">Edit</a>
        <button className="text-red-500" onClick={() => onDelete(resource.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}
