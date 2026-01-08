"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { saveResource } from "@/lib/localStorage";
import { Resource } from "@/types/Resource";
import ResourceForm from "@/components/ResourceForm";
import toast from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";
import Navbar from "@/components/Navbar";

export default function AddResource() {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    const newResource: Resource = {
      id: uuidv4(),
      title: data.title,
      description: data.description,
      type: data.type,
      createdAt: new Date().toISOString()
    };

    saveResource(newResource);
    toast.success("Resource Created!");
    router.push("/");
  };

  return (
    <>
    <Navbar />
    <ResourceForm
      register={register}
      errors={errors}
      onSubmit={handleSubmit(onSubmit)}
      buttonText="Create Resource"
    />
    </>
  );
}
