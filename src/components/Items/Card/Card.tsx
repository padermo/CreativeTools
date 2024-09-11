import Score from "./Options/Score";
import StatusFree from "./Options/StatusFree";
import Report from "./Options/Report";
import Favorite from "./Options/Favorite";
import Share from "./Options/Share";
import { useTranslations } from "next-intl";

// type
import type { CardProps } from "../items.types";

export default function Card({
  _id,
  name,
  url,
  score,
  liked,
  isFree,
}: CardProps) {
  const t = useTranslations("Tools");
  return (
    <div className="w-56 h-56 rounded-sm shadow-md flex flex-col items-center justify-between bg-[#1b1b1b] p-4 hover:outline hover:outline-neutral-800">
      <div className="w-full flex justify-end items-center">
        <Report _id={_id} name={name} />
      </div>
      <div className="w-full h-4/5 flex flex-col gap-4 items-center justify-center">
        <h3
          onClick={() => window.open(url)}
          className="font-semibold text-lg cursor-pointer text-center hover:underline"
        >
          {name.toUpperCase()}
        </h3>
      </div>
      <div className="w-full flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Share title={name} url={url} />
          <Favorite _id={_id} />
          <Score score={score} liked={liked} _id={_id} />
        </div>
        <StatusFree
          isFree={isFree}
          free={t("accessType").split(",")[0]}
          pay={t("accessType").split(",")[1]}
        />
      </div>
    </div>
  );
}
