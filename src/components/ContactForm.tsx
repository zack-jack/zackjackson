import React, { FormEvent, ReactElement, useEffect, useState } from "react";
import cn from "classnames";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { schema } from "../utils/validation/contact";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm(): ReactElement {
  const {
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  const [isFormError, setIsFormError] = useState<boolean>(false);
  const [isFormSuccess, setIsFormSuccess] = useState<boolean>(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | null = null;

    if (isFormSuccess) {
      timer = setTimeout(() => {
        setIsFormSuccess(false);
      }, 5000);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [isFormSuccess]);

  const onSubmit = async (data: FormData, e: FormEvent) => {
    e.preventDefault();
    setIsFormSuccess(false);
    setIsFormError(false);

    const res = await fetch("https://formspree.io/f/xjvlvekw", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const resData = await res.json();

    if (!resData?.ok) {
      setIsFormError(true);
      reset();
      return;
    }

    setIsFormSuccess(true);
    reset();
  };

  return (
    <div>
      <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            placeholder="Argyle"
            {...register("name")}
            className="mt-2 rounded border-gray-900 bg-gray-900 px-4 py-3 text-gray-200 placeholder:text-gray-500 placeholder:text-opacity-70"
          />
          {errors.name?.message && (
            <p className="error">{errors.name?.message}</p>
          )}
        </div>
        <div className="mt-8 flex flex-col">
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            placeholder="argyle@surferboypizza.com"
            {...register("email")}
            className="mt-2 rounded border-gray-900 bg-gray-900 px-4 py-3 text-gray-200 placeholder:text-gray-500 placeholder:text-opacity-70"
          />
          {errors.email?.message && (
            <p className="error">{errors.email?.message}</p>
          )}
        </div>
        <div className="mt-8 flex flex-col">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            placeholder="Fruit on your pizza is gnarly, you say? Well, I say try before you deny."
            {...register("message")}
            className="mt-2 h-40 resize-none rounded border-gray-900 bg-gray-900 px-4 py-3 text-gray-200 placeholder:text-gray-500 placeholder:text-opacity-70"
          ></textarea>
          {errors.message?.message && (
            <p className="error">{errors.message?.message}</p>
          )}
        </div>
        <div className="mt-8">
          {isFormError && (
            <p className="error">
              Sorry. There was an error submitting your message.
            </p>
          )}
          {isFormSuccess && (
            <p>
              Success! Your message has been sent.{" "}
              <span className="ml-1">&#128640;</span>
            </p>
          )}
          <button
            disabled={isSubmitting}
            type="submit"
            className={cn("btn", { "mt-8": isFormError || isFormSuccess })}
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
