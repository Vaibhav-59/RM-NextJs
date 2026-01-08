"use client";

import { useEffect, useState } from "react";
import { getResources, deleteResource } from "@/lib/localStorage";
import Navbar from "@/components/Navbar";
import ResourceCard from "@/components/ResourceCard";
import SearchFilter from "@/components/SearchFilter";
import toast from "react-hot-toast";

export default function Home() {
  const [resources, setResources] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [type, setType] = useState("");

  useEffect(() => {
    setResources(getResources());
  }, []);

  const filtered = resources.filter((r) => {
    const matchSearch = r.title.toLowerCase().includes(search.toLowerCase());
    const matchType = !type || r.type === type;
    return matchSearch && matchType;
  });

  const handleDelete = (id: string) => {
    deleteResource(id);
    setResources(getResources());
    toast.success("Deleted!");
  };

  return (
    <>
      <Navbar />
      <div className="p-6 max-w-5xl mx-auto">
        <SearchFilter search={search} setSearch={setSearch} type={type} setType={setType} />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((r) => (
            <ResourceCard key={r.id} resource={r} onDelete={handleDelete} />
          ))}
        </div>
      </div>
    </>
  );
}
