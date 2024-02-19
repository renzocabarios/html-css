import React from "react";
import Image from "next/image";
import nftImage from "@/public/image-equilibrium.jpg";
import eth from "@/public/icon-ethereum.svg";
import clock from "@/public/icon-clock.svg";
import avatar from "@/public/image-avatar.png";

function NftCard() {
  return (
    <div className="bg-slate-800 flex flex-col gap-3 max-w-96 w-fit p-7 rounded-lg">
      <Image src={nftImage} alt="" height={400} />

      <p className="text-2xl font-bold text-white">Equilibrium #3429</p>
      <p className=" text-slate-500">
        Our Equilibrium collection promotes balance and calm.
      </p>

      <div className="flex items-center justify-between py-3">
        <div className="flex items-center gap-2">
          <Image src={eth} alt="" />
          <p className="font-bold text-cyan-300">0.041 ETH</p>
        </div>
        <div className="flex items-center gap-2">
          <Image src={clock} alt="" />
          <p className="font-bold text-slate-500">3 days left</p>
        </div>
      </div>

      <hr className="bg-slate-500" />

      <div className="flex items-center gap-2">
        <Image src={avatar} alt="" height={40} />

        <img className="avatar" src="./images/image-avatar.png" alt="" />
        <p className="text-slate-500">
          Creation of <span className="text-white">Jules Wyvern</span>
        </p>
      </div>
    </div>
  );
}

export default NftCard;
