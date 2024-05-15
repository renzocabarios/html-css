import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen justify-center">
      <div className="w-[1440px] flex flex-col">
        <div className="px-[180px] h-[87px] py-4 flex items-center justify-end">
          <div className="flex items-center gap-4 text-xl font-medium">
            <p>Twitter</p>
            <p>Connect</p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-[130px] px-[200px] py-[50px]">
          <div className="flex flex-col gap-8 w-[900px] h-[338px]">
            <div className="flex flex-col text-[72px] font-semibold">
              <p>Hey</p>
              <p>{"I’m Aron"}</p>
            </div>

            <div className="flex items-center justify-end">
              <div className="w-[138px]"></div>
              <p className="text-[32px] font-bold">
                — a UI/UX designer and web developer elevating early-stage
                brands through intuitive design and robust solutions.
              </p>
            </div>
          </div>

          <Image
            src={"/aron.png"}
            alt=""
            width={1000}
            height={600}
            className="rounded-xl"
          />

          <p className="text-[36px] font-medium">
            In just a year and a half, I've crafted intuitive user interfaces
            and engaging web experiences that have garnered praise from users
            and stakeholders alike.
          </p>

          <p className="text-[36px] font-black">
            From streamlining complex workflows to enhancing accessibility, my
            designs have consistently elevated user satisfaction metrics by
            double digits, driving tangible business growth.
          </p>

          <p className="text-[36px] font-bold">
            With a focus on innovation and user-centricity, I've successfully
            delivered projects on time and within budget, establishing a
            reputation for excellence in UI/UX design and web development
            despite my relatively short tenure in the field.
          </p>

          <p className="text-[72px] font-bold w-[1000px]">
            Here’s what you can expect from me...
          </p>

          <div className="grid grid-cols-2 gap-2 text-white text-[36px] font-bold">
            <div className="bg-slate-900 rounded-xl p-[50px] h-[490px]">
              <p>
                Fostering growth through exceptional design and team-building
                expertise.
              </p>
            </div>
            <div className="bg-slate-900 rounded-xl p-[50px] ">
              <p>
                Engage, innovate, align—partnering with your team to deliver
                expert design and web solutions fueled by passion.
              </p>
            </div>
            <div className="col-span-2 bg-slate-800 rounded-xl p-[50px]">
              <p className="text-[30px] font-medium">
                With seasoned expertise, boundless energy, and fresh insights,
                I'll invigorate projects in UI/UX design and web development.
              </p>
            </div>
          </div>

          <p className="text-[30px] font-medium">
            Looking forward to the opportunity of collaborating on future
            projects together. Ready to connect and bring our visions to life?
            Let's make it happen.
          </p>

          <div className="flex items-center justify-start w-full">
            <button className="flex items-center gap-4 text-[30px] font-medium text-white bg-slate-900 py-3 px-6 rounded-xl">
              <Mail />
              <p>Get in touch</p>
            </button>
          </div>
        </div>
        <div className="px-[180px] py-4 flex items-center justify-between text-xl font-medium">
          <div className="flex items-center gap-2 ">
            <Copyright /> <p>Aaron Deinla — Web Wizard</p>
          </div>

          <div className="flex items-center gap-2">
            <p>LinkedIn</p>
            <p>Twitter</p>
            <p>Github</p>
            <p>Behance</p>
          </div>
        </div>
      </div>
    </main>
  );
}

import React from "react";

function Mail() {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 4.5H4C2.89543 4.5 2 5.39543 2 6.5V18.5C2 19.6046 2.89543 20.5 4 20.5H20C21.1046 20.5 22 19.6046 22 18.5V6.5C22 5.39543 21.1046 4.5 20 4.5Z"
        stroke="#E6E9EE"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M22 7.5L13.03 13.2C12.7213 13.3934 12.3643 13.496 12 13.496C11.6357 13.496 11.2787 13.3934 10.97 13.2L2 7.5"
        stroke="#E6E9EE"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
function Copyright() {
  return (
    <svg
      width="24"
      height="23"
      viewBox="0 0 24 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 21.0834C17.5228 21.0834 22 16.7928 22 11.5001C22 6.20735 17.5228 1.91675 12 1.91675C6.47715 1.91675 2 6.20735 2 11.5001C2 16.7928 6.47715 21.0834 12 21.0834Z"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15 8.96433C14.4626 8.38042 13.7523 7.96719 12.9638 7.77963C12.1753 7.59207 11.3458 7.63907 10.5859 7.91438C9.8259 8.18969 9.17143 8.68025 8.70954 9.32079C8.24765 9.96133 8.00024 10.7215 8.00024 11.5001C8.00024 12.2787 8.24765 13.0388 8.70954 13.6794C9.17143 14.3199 9.8259 14.8105 10.5859 15.0858C11.3458 15.3611 12.1753 15.4081 12.9638 15.2205C13.7523 15.033 14.4626 14.6197 15 14.0358"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
