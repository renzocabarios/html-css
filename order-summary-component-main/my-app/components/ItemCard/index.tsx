import React from "react";
import Button from "../Button";
import Image from "next/image";
import image from "@/public/images/illustration-hero.svg";
function ItemCard() {
  return (
    <div className="max-w-96 min-w-80 bg-white rounded-lg">
      <Image src={image} alt=""></Image>
      <div className="p-8 flex flex-col items-center gap-5 ">
        <p className="font-bold text-lg">Order Summary</p>
        <p className="font-light text-center text-sm text-gray-500">
          You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like!
        </p>

        <div className="flex items-center justify-between bg-gray-100 w-full p-2 rounded-lg">
          <div className="flex items-center gap-5">
            <img src="./images/icon-music.svg" alt="" />
            <div className="flex flex-col">
              <p className="font-bold text-sm">Annual Plan</p>
              <p className="text-gray-500 text-sm">$59.99/year</p>
            </div>
          </div>

          <p className="text-sm text-blue-700">Change</p>
        </div>
        <Button>
          <p className="font-bold"> Proceed to Payment</p>
        </Button>
        <p className="text-gray-500">Cancel Order</p>
      </div>
    </div>
  );
}

export default ItemCard;
