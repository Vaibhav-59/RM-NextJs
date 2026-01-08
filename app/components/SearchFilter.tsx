"use client";

import React from "react";

type Props = {
  search: string;
  setSearch: (s: string) => void;
  type: string;
  setType: (t: string) => void;
};

export default function SearchFilter({ search, setSearch, type, setType }: Props) {
  return (
    <div className="mb-6 flex flex-col sm:flex-row gap-4 items-center">
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search resources..."
        className="flex-1 px-4 py-2 border rounded-md"
      />
      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="px-4 py-2 border rounded-md"
      >
        <option value="">All</option>
        <option value="article">Article</option>
        <option value="video">Video</option>
        <option value="tutorial">Tutorial</option>
      </select>
    </div>
  );
}