"use client";

import { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { getResourceById, updateResource } from "@/lib/localStorage";
import ResourceForm from "@/components/ResourceForm";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Navbar from "@/components/Navbar";

export default function EditPage() {
  const { id } = useParams();
  const router = useRouter();
  const { register, setValue, handleSubmit, formState: { errors } } = useForm();

  useEffect(() => {
    const resource = getResourceById(id as string);
    if (resource) {
      setValue("title", resource.title);
      setValue("description", resource.description);
      setValue("type", resource.type);
    }
  }, [id]);

  const onSubmit = (data: any) => {
    updateResource(id as string, data);
    toast.success("Resource Updated!");
    router.push("/");
  };

  return (
    <>
    <Navbar />
    <ResourceForm
      register={register}
      errors={errors}
      onSubmit={handleSubmit(onSubmit)}
      buttonText="Update Resource"
    />
    </>
  );
}
