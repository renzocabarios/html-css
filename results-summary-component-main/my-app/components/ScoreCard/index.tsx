import React from "react";
import style from "./style.module.css";
import Image from "next/image";
import reaction from "@/public/images/icon-reaction.svg";
import visual from "@/public/images/icon-visual.svg";
import verbal from "@/public/images/icon-verbal.svg";
import memory from "@/public/images/icon-memory.svg";

interface IScoreCard {
  title: string;
  score: number;
}

interface IStyle {
  icon: any;
  text: string;
  background: string;
}

function getStyle(title: string): IStyle {
  if (title === "Reaction") {
    return { icon: reaction, background: "bg-red-100", text: "text-red-400" };
  }

  if (title === "Memory") {
    return {
      icon: memory,
      background: "bg-yellow-100",
      text: "text-yellow-400",
    };
  }

  if (title === "Verbal") {
    return { icon: verbal, background: "bg-green-100", text: "text-green-400" };
  }

  if (title === "Visual") {
    return {
      icon: visual,
      background: "bg-purple-100",
      text: "text-purple-400",
    };
  }

  return { icon: visual, background: "bg-purple-100", text: "text-purple-400" };
}

function ScoreCard({ title, score }: IScoreCard) {
  const { background, text, icon } = getStyle(title);
  return (
    <div className={`${style.container} ${background}`}>
      <div className={style.title_container}>
        <Image src={icon} alt="" width={30} height={30} />
        <p className={`text-lg ${text}`}>{title}</p>
      </div>
      <div className="flex items-center gap-1">
        <p className="font-bold">{score}</p> /
        <p className="text-purple-400">100</p>
      </div>
    </div>
  );
}

export default ScoreCard;
