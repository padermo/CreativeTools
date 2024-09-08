"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { Controller, useForm } from "react-hook-form";
import { useAlert } from "@/context/AlertContext";
import axiosConfig from "@/axios/axiosConfig";
import axios from "axios";
import InputReusable from "@/components/Reusable/Input";
import ButtonReusable from "@/components/Reusable/Button";

// types
import type { InputsFormEmail, FormEmailProps } from "./types";

export default function FormEmail({ setViewFormPassword }: FormEmailProps) {
  const [loading, setLoading] = useState<boolean>(false);

  const t = useTranslations("Recovery");

  const { handleAlert } = useAlert();
  const { handleSubmit, control, reset } = useForm<InputsFormEmail>();

  const onSubmit = handleSubmit(async (data) => {
    const { email } = data;
    try {
      setLoading(true);
      const res = await axiosConfig.post("/recovery", { email });
      if ([200, 201].includes(res?.status)) {
        localStorage.setItem("email", res.data.email);
        setViewFormPassword(res.data.validate);
        setLoading(false);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 400) {
          handleAlert({ type: "info", content: t("alerts.email") });
        }
      }
    } finally {
      reset();
    }
  });

  return (
    <form onSubmit={onSubmit} className="w-full flex flex-col gap-4 lg:w-2/5">
      <div className="w-full text-[#222] font-light dark:text-white">
        <label htmlFor="email">{t("form.email.text")}</label>
        <Controller
          name="email"
          control={control}
          defaultValue=""
          rules={{
            required: {
              value: true,
              message: t("handlers.errors.email.required"),
            },
          }}
          render={({ field, fieldState: { error } }) => (
            <>
              <InputReusable
                type="normal"
                id="email"
                value={field.value}
                placeholder={t("form.email.placeholder")}
                onChange={field.onChange}
              />
              {error && (
                <span className="text-red-600 text-xs block">
                  {error.message}
                </span>
              )}
            </>
          )}
        />
      </div>

      <ButtonReusable text={t("buttons.sent")} htmlType="submit" type="primary" loading={loading} onClick={onSubmit} />
    </form>
  );
}
