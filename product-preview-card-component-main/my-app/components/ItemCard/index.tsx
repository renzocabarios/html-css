import React from "react";
import style from "./style.module.css";
import Button from "../Button";
import Image from "next/image";
import mobile from "@/public/image-product-mobile.jpg";
import desktop from "@/public/image-product-desktop.jpg";
function ItemCard() {
  return (
    <div className={style.container}>
      <div className="lg:hidden">
        <Image src={mobile} alt="" />
      </div>
      <div className="hidden lg:inline-flex">
        <Image src={desktop} alt="" />
      </div>
      <div className="flex flex-col p-4 justify-evenly gap-5">
        <p className="text-3xl">Perfume</p>
        <p className="text-5xl font-black">Gabrielle Essence Eau De Parfum</p>
        <p className="">
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>

        <div className="flex items-center gap-5">
          <p className="text-4xl font-bold text-green-600">$149.99</p>
          <p className="text-lg line-through ">$169.99</p>
        </div>
        <Button />
      </div>
    </div>
  );
}

export default ItemCard;
