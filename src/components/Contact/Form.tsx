"use client";

import * as z from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";
import { toast } from "react-toastify";
import { formatPhoneNumber } from "@/utils/formatPhoneNumber";
import { Spin } from "../Global/Icons/Spin";

export function Form() {
  const formSchema = z.object({
    name: z.string().min(2, "Nome inválido"),
    email: z.string().email("E-mail inválido"),
    phone: z.string().min(14, "Telefone inválido"),
  });

  type FormData = z.infer<typeof formSchema>;

  const [isSubmitting, setIsSubmitting] = useState(false);
  const defaultValues = {
    name: "",
    email: "",
    phone: "",
  };

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      setIsSubmitting(true);
      await axios.post("/api/send", data);

      reset(defaultValues);
      toast.success("Cadastro realizado com sucesso!");
    } catch (err) {
      console.log(err);

      toast.error("Ocorreu um erro ao efetuar o cadastro!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      className="flex w-full max-w-[564px] flex-col gap-6 rounded-3xl border border-app-gray-800 bg-app-gray-900 px-8 py-10 md:px-14 md:py-16"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <input
          {...register("name")}
          type="text"
          placeholder="Nome"
          className="border-app-zinc-700 placeholder:text-app-gray-600 h-12 w-full rounded-md border border-app-gray-700 bg-app-gray-800 px-6 text-app-gray-100 placeholder:text-xl"
        />
        {errors.name && (
          <small className="text-app-gray-200">{errors.name.message}</small>
        )}
      </div>

      <div>
        <input
          {...register("email")}
          type="email"
          placeholder="Seu melhor e-mail"
          className="border-app-zinc-700 placeholder:text-app-gray-600 h-12 w-full rounded-md border border-app-gray-700 bg-app-gray-800 px-6 text-app-gray-100 placeholder:text-xl"
        />
        {errors.email && (
          <small className="text-app-gray-200">{errors.email.message}</small>
        )}
      </div>

      <div>
        <Controller
          name="phone"
          control={control}
          render={({ field: { onChange, ...field } }) => (
            <input
              {...field}
              onChange={(e) => onChange(formatPhoneNumber(e.target.value))}
              type="text"
              placeholder="Celular"
              maxLength={15}
              inputMode="numeric"
              className="border-app-zinc-700 placeholder:text-app-gray-600 h-12 w-full rounded-md border border-app-gray-700 bg-app-gray-800 px-6 text-app-gray-100 placeholder:text-xl"
            />
          )}
        />
        {errors.phone && (
          <small className="text-app-gray-200">{errors.phone.message}</small>
        )}
      </div>

      <button
        disabled={isSubmitting}
        type="submit"
        className="grid h-12 place-items-center rounded-md border border-app-gray-100 bg-app-green-300 text-lg font-semibold uppercase text-app-black disabled:cursor-not-allowed disabled:opacity-80"
      >
        {isSubmitting ? (
          <Spin className="animate-spin" />
        ) : (
          "Quero me inscrever"
        )}
      </button>
    </form>
  );
}
