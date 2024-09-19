"use client";
import { useState, useEffect } from "react";
import { LikeOutlined, LikeFilled } from "@ant-design/icons";
import { useItems } from "@/context/ItemsContext";
import { useAuth } from "@/context/AuthContext";
import { useAlert } from "@/context/AlertContext";
import { useTranslations } from "next-intl";
import axiosConfig from "@/axios/axiosConfig";

// types
import type { ScoreProps } from "../../items.types";

export default function Liked({ score, liked, _id }: ScoreProps) {
  const t = useTranslations("Tools");
  const [existsUser, setExistsUser] = useState<boolean>(false);
  const { userId, token, mutateItems } = useItems();
  const { status } = useAuth();
  const { handleAlert } = useAlert();

  const handleScore = async () => {
    if (status === "authenticated") {
      await axiosConfig.put(
        "/item",
        { itemId: _id, userId },
        { headers: { Authorization: `Bearer ${token}` } },
      );
      mutateItems();
    } else {
      handleAlert({ type: "info", content: t("alerts.liked") });
    }
  };

  useEffect(() => {
    if (liked.includes(userId) && status === "authenticated") {
      setExistsUser(true);
    } else {
      setExistsUser(false);
    }
  }, [userId, liked, status]);

  return (
    <>
      {existsUser ? (
        <div className="flex items-center gap-1">
          <button onClick={handleScore} className="text-cyan-500">
            <LikeFilled />
          </button>
          <span className="font-light text-white">{score}</span>
        </div>
      ) : (
        <div className="flex items-center gap-1">
          <button
            onClick={handleScore}
            className="text-[#888] transition-colors duration-300 ease-in-out hover:text-white"
          >
            <LikeOutlined />
          </button>
          <span className="font-light text-white">{score > 0 && score}</span>
        </div>
      )}
    </>
  );
}
