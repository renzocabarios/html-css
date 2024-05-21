import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="relative w-[1440px] grid grid-cols-2 h-full">
        <Image src={"/images/bg.png"} alt="" fill></Image>
        <div className="flex flex-col justify-end p-16 z-10 text-white">
          <div className="flex flex-col gap-4">
            <p>Playlist</p>
            <p>The perfect mix for a special day</p>
            <Image
              src={"/images/logo.png"}
              alt=""
              width={248}
              height={211}
            ></Image>

            <div className="flex items-center gap-4">
              <p>2022</p>
              <p>.</p>
              <p>20 songs</p>
              <p>.</p>
              <p>120 minutes, 45 seconds</p>
            </div>
            <div className="flex items-center gap-4">
              <p>{">"}</p>
              <p>Play all</p>
              <p>20 songs</p>
              <p>HEART</p>
              <p>...</p>
            </div>
          </div>
        </div>
        <div className="text-white flex flex-col bg-slate-800 p-4 justify-between min-h-screen z-10">
          <div className="flex flex-col gap-4">
            <Header />
            <div className="p-4 gap-4 flex flex-col rounded-lg bg-slate-900">
              <div className="flex items-center justify-between py-3 px-8">
                <div className="flex items-center gap-2">
                  <p>#</p>
                  <p>NAME</p>
                </div>

                <p>TIME</p>
              </div>

              <div className="h-[1px] w-full bg-white"></div>

              <SongList />
              <SongList />
              <SongList />
              <SongList />
              <SongList />
              <div className="p-4 bg-slate-700">
                <div className="py-3 px-8">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2">
                      <p>IMAGE</p>

                      <div className="flex flex-col gap-2 justify-center">
                        <p>Hold On Till May</p>
                        <p>Pierce the veil</p>
                      </div>
                    </div>

                    <div className="w-full bg-white h-1"></div>
                    <div className="flex items-center justify-between">
                      <p>1:55</p>
                      <p>4:58</p>
                    </div>

                    <div className="flex items-center justify-between">
                      <p>REPLAY</p>

                      <div className="flex items-center gap-8">
                        <p>BACK</p> <p>PLAY</p> <p>FORWARD</p>
                      </div>

                      <p>DOWNLOAD</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

import React from "react";

function Header() {
  return (
    <div className="p-4 gap-2 flex flex-col">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 py-4">
          <p>{"<"}</p>
          <p>Back</p>
        </div>

        <div className="flex items-center gap-4 p-4">
          <p>Image</p>
          <p>Recolts</p>
        </div>
      </div>

      <div className="py-4">
        <p>
          Collide with the Sky" is the third studio album by the American rock
          band Pierce the Veil. It was released on July 17, 2012, through
          Fearless Records. This album marked a significant point in the band's
          career, featuring a blend of post-hardcore, punk rock, and emo
          elements.
        </p>
      </div>
    </div>
  );
}

function SongList() {
  return (
    <div className="flex items-center justify-between py-3 px-8 ">
      <div className="flex  gap-2">
        <p>1</p>

        <div className="flex flex-col gap-2">
          <p>Hold On Till May</p>
          <p>Pierce the veil</p>
        </div>
      </div>

      <p>2:50</p>
    </div>
  );
}

function SettingsIcon({ className }: any) {
  return (
    <svg
      width="17"
      height="16"
      viewBox="0 0 17 16"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Setting_alt_line">
        <path
          id="Star 2"
          d="M2.55444 9.2963C2.20196 8.66267 2.02573 8.34585 2.02573 7.99996C2.02573 7.65407 2.20196 7.33725 2.55444 6.70362L3.45394 5.08663L4.40455 3.49914C4.77705 2.87707 4.9633 2.56604 5.26285 2.39309C5.56241 2.22015 5.92489 2.21436 6.64987 2.2028L8.49998 2.17329L10.3501 2.2028C11.0751 2.21436 11.4376 2.22014 11.7371 2.39309C12.0367 2.56604 12.2229 2.87707 12.5954 3.49914L13.546 5.08663L14.4455 6.70362C14.798 7.33725 14.9742 7.65406 14.9742 7.99996C14.9742 8.34585 14.798 8.66267 14.4455 9.29629L13.546 10.9133L12.5954 12.5008C12.2229 13.1228 12.0367 13.4339 11.7371 13.6068C11.4376 13.7798 11.0751 13.7856 10.3501 13.7971L8.49998 13.8266L6.64987 13.7971C5.92489 13.7856 5.56241 13.7798 5.26285 13.6068C4.9633 13.4339 4.77705 13.1228 4.40455 12.5008L3.45394 10.9133L2.55444 9.2963Z"
          stroke="#FEFEFE"
          stroke-width="1.33333"
        />
        <circle
          id="Ellipse 5"
          cx="8.5"
          cy="7.99994"
          r="2"
          stroke="#FEFEFE"
          stroke-width="1.33333"
        />
      </g>
    </svg>
  );
}
function GithubIcon({ className }: any) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="github">
        <path
          id="githab"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8ZM4 8.08377C4 5.88193 5.78592 4.096 7.98776 4.096C10.1896 4.096 11.9755 5.88193 12 8.08377C12 9.84524 10.8746 11.3376 9.28439 11.8758C9.08868 11.9003 9.01529 11.778 9.01529 11.6801V10.5792C9.01529 10.2122 8.89297 9.96756 8.74619 9.84524C9.62692 9.74738 10.5566 9.42933 10.5566 7.88805C10.5566 7.44768 10.3853 7.08071 10.1407 6.8116C10.1426 6.80391 10.1453 6.79426 10.1485 6.78274C10.1859 6.64764 10.2946 6.25556 10.0917 5.75961C10.0917 5.75961 9.74924 5.66175 8.99081 6.17551C8.67279 6.10212 8.33026 6.05319 7.98776 6.05319C7.64526 6.05319 7.30276 6.07765 6.98471 6.17551C6.22629 5.66175 5.88379 5.75961 5.88379 5.75961C5.66757 6.28816 5.80524 6.69874 5.83344 6.78284L5.83487 6.78713C5.56573 7.08071 5.41895 7.42322 5.41895 7.86358C5.41895 9.40487 6.34863 9.74738 7.22937 9.84524C7.1315 9.9431 7.00919 10.1143 6.98471 10.3835C6.76453 10.4813 6.20184 10.6526 5.83487 10.041C5.83487 10.041 5.61469 9.64952 5.22324 9.62505C5.22324 9.62505 4.83182 9.62505 5.19879 9.8697C5.19879 9.8697 5.4679 9.99203 5.63913 10.4569C5.63913 10.4569 5.88379 11.2397 6.98471 10.9951V11.6801C6.98471 11.778 6.91132 11.9003 6.71561 11.8758C5.14984 11.3376 4 9.84524 4 8.08377Z"
          fill="black"
        />
      </g>
    </svg>
  );
}
function LinkedInIcon({ className }: any) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="linkedin">
        <path
          id="linkedin_2"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8ZM4.1 6.65V12H5.8V6.65H4.1ZM4 4.95C4 5.5 4.4 5.9 4.95 5.9C5.5 5.9 5.9 5.5 5.9 4.95C5.9 4.4 5.5 4 4.95 4C4.45 4 4 4.4 4 4.95ZM10.3 12H11.9V8.7C11.9 7.05 10.9 6.5 9.95 6.5C9.1 6.5 8.5 7.05 8.35 7.4V6.65H6.75V12H8.45V9.15C8.45 8.4 8.95 8 9.45 8C9.95 8 10.3 8.25 10.3 9.1V12Z"
          fill="black"
        />
      </g>
    </svg>
  );
}
function ExternalLinkIcon({ className }: any) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="icon/external-link">
        <path
          id="Vector"
          d="M12 8.66667V12.6667C12 13.0203 11.8595 13.3594 11.6095 13.6095C11.3594 13.8595 11.0203 14 10.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V5.33333C2 4.97971 2.14048 4.64057 2.39052 4.39052C2.64057 4.14048 2.97971 4 3.33333 4H7.33333"
          stroke="black"
          stroke-width="1.33333"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Vector_2"
          d="M10 2H14V6"
          stroke="black"
          stroke-width="1.33333"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Vector_3"
          d="M6.66669 9.33333L14 2"
          stroke="black"
          stroke-width="1.33333"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </svg>
  );
}

function EditIcon({ className }: any) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="icon/edit-3">
        <path
          id="Vector"
          d="M8 13.3333H14"
          stroke="#FEFEFE"
          stroke-width="1.33333"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Vector_2"
          d="M11 2.33331C11.2652 2.06809 11.6249 1.9191 12 1.9191C12.1857 1.9191 12.3696 1.95568 12.5412 2.02675C12.7128 2.09782 12.8687 2.20199 13 2.33331C13.1313 2.46463 13.2355 2.62053 13.3066 2.79212C13.3776 2.9637 13.4142 3.14759 13.4142 3.33331C13.4142 3.51903 13.3776 3.70293 13.3066 3.87451C13.2355 4.04609 13.1313 4.20199 13 4.33331L4.66667 12.6666L2 13.3333L2.66667 10.6666L11 2.33331Z"
          stroke="#FEFEFE"
          stroke-width="1.33333"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </svg>
  );
}

function MapIcon({ className }: any) {
  return (
    <svg
      width="17"
      height="16"
      viewBox="0 0 17 16"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="icon/map-pin">
        <rect width="16" height="16" transform="translate(0.5)" fill="white" />
        <path
          id="Vector"
          d="M13.8334 6.66665C13.8334 10.6666 8.50002 14.6666 8.50002 14.6666C8.50002 14.6666 3.16669 10.6666 3.16669 6.66665C3.16669 5.25216 3.72859 3.8956 4.72878 2.89541C5.72898 1.89522 7.08553 1.33331 8.50002 1.33331C9.91451 1.33331 11.2711 1.89522 12.2713 2.89541C13.2715 3.8956 13.8334 5.25216 13.8334 6.66665Z"
          fill="#8A99B0"
        />
        <path
          id="Vector_2"
          d="M8.50003 8.66666C9.6046 8.66666 10.5 7.77123 10.5 6.66666C10.5 5.56209 9.6046 4.66666 8.50003 4.66666C7.39546 4.66666 6.50003 5.56209 6.50003 6.66666C6.50003 7.77123 7.39546 8.66666 8.50003 8.66666Z"
          fill="#FEFEFE"
        />
      </g>
    </svg>
  );
}
