"use client";
import { useState, useEffect } from "react";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { useItems } from "@/context/ItemsContext";
import { useAuth } from "@/context/AuthContext";
import { useAlert } from "@/context/AlertContext";
import { useTranslations } from "next-intl";
import axiosConfig from "@/axios/axiosConfig";

// types
import type { FavoriteProps } from "../../items.types";

export default function Favorite({ _id }: FavoriteProps) {
  const t = useTranslations("Tools");
  const { favoriteItems, token, userId, mutateFavorite } = useItems();
  const { status } = useAuth();
  const { handleAlert } = useAlert();
  const [existsUser, setExistsUser] = useState<boolean>(false);

  const handleFavorite = async () => {
    if (status === "authenticated") {
      await axiosConfig.post(
        "/favorite",
        { itemId: _id, userId },
        { headers: { Authorization: `Bearer ${token}` } },
      );
      mutateFavorite();
    } else {
      handleAlert({ type: "info", content: t("alerts.favorites") });
    }
  };

  useEffect(() => {
    if (
      favoriteItems?.map((item) => item._id).includes(_id) &&
      status === "authenticated"
    ) {
      setExistsUser(true);
    } else {
      setExistsUser(false);
    }
  }, [favoriteItems, status, _id]);

  return (
    <>
      {existsUser ? (
        <button onClick={handleFavorite} className="text-red-500">
          <HeartFilled />
        </button>
      ) : (
        <button
          onClick={handleFavorite}
          className="text-[#888] transition-colors duration-300 ease-in-out hover:text-white"
        >
          <HeartOutlined />
        </button>
      )}
    </>
  );
}
