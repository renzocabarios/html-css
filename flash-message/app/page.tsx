import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="w-[1440px] flex">
        <div className="border border-black rounded-xl py-[72px] px-[128px] flex flex-col items-center gap-16 text-center">
          <Image
            src={"/images/check-circle.png"}
            alt=""
            height={160}
            width={160}
          ></Image>
          <p>Success</p>
          <p>Click continue to move to next step</p>

          <button className="px-16 py-4 bg-green-500 text-white">
            CONTINUE
          </button>
        </div>
        <div className="border border-black rounded-xl py-[72px] px-[128px] flex flex-col gap-16 items-center text-center">
          <Image
            src={"/images/x-circle.png"}
            alt=""
            height={160}
            width={160}
          ></Image>
          <p>Error</p>
          <p>Something went wrong try again</p>

          <button className="px-16 py-4 bg-red-500 text-white">
            TRY AGAIN
          </button>
        </div>
      </div>
    </main>
  );
}
