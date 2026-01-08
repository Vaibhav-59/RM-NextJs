"use client";

import { UseFormRegister, FieldErrors } from "react-hook-form";

interface Props {
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
  onSubmit: any;
  buttonText: string;
}

export default function ResourceForm({ register, errors, onSubmit, buttonText }: Props) {
  return (
    <form onSubmit={onSubmit} className="bg-white p-6 rounded-xl shadow-md max-w-lg mx-auto">
      <h2 className="text-xl font-semibold mb-4">{buttonText}</h2>

      <input
        {...register("title", { required: "Title is required", minLength: 3 })}
        placeholder="Title"
        className="w-full border p-2 rounded mb-3"
      />
      {errors.title && <p className="text-red-500">{`${errors.title.message}`}</p>}

      <textarea
        {...register("description", { required: "Description is required", minLength: 10 })}
        placeholder="Description"
        className="w-full border p-2 rounded mb-3"
        rows={4}
      />
      {errors.description && <p className="text-red-500">{`${errors.description.message}`}</p>}

      <select {...register("type", { required: true })} className="w-full border p-2 rounded mb-4">
        <option value="">Select Type</option>
        <option value="Article">Article</option>
        <option value="Video">Video</option>
        <option value="Tutorial">Tutorial</option>
      </select>

      <button className="bg-indigo-600 text-white w-full py-2 rounded hover:bg-indigo-700">
        {buttonText}
      </button>
    </form>
  );
}
