import React from "react";
import Image from "next/image";
import qr from "@/public/image-qr-code.png";
import style from "./style.module.css";
function QrCode() {
  return (
    <div className={style.container}>
      <div className={style.image}>
        <Image src={qr} alt="" fill />
      </div>
      <div className="flex flex-col gap-10 px-7">
        <p className="text-3xl font-extrabold">
          Improve your front-end skills by building projects
        </p>
        <p className="text-xl">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
}

export default QrCode;
