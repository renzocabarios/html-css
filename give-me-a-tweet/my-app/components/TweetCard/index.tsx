import React from "react";
import style from "./style.module.css";
import { FaComment, FaHeart, FaRetweet, FaTwitter } from "react-icons/fa";

function TweetCard() {
  return (
    <div className={style.container}>
      <div className="flex items-center justify-between">
        <div className="flex gap-2 items-center">
          <div className="bg-gray-500 h-10 w-10 rounded-full"></div>
          <div className="flex flex-col">
            <p className="font-bold">Renzo Cabarios</p>
            <p className="text-gray-400">@renzocabarios</p>
          </div>
        </div>
        <FaTwitter size={35} color="#3b83f6" />
      </div>

      <p className="text-gray-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam possimus
        consectetur beatae nam praesentium qui animi dolor accusamus impedit
        eligendi aperiam maiores labore, assumenda est voluptates minus ratione,
        ipsum cum!
      </p>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <FaHeart size={23} color="#ef4444" />
            <p className="text-red-500">1000</p>
          </div>
          <div className="flex items-center gap-2">
            <FaComment size={23} color="#22c55e" />
            <p className="text-green-500">1000</p>
          </div>
          <div className="flex items-center gap-2 ">
            <FaRetweet size={23} color="#3b83f6" />
            <p className="text-blue-500">1000</p>
          </div>
        </div>

        <p className="text-gray-400">7:22 AM · Aug 22, 2023</p>
      </div>
    </div>
  );
}

export default TweetCard;
