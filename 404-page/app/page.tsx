import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-800  text-white">
      <Image src={"/images/bg.png"} alt="" fill></Image>
      <div className="flex flex-col items-center p-4 gap-8 z-10 w-[547px] h-fit">
        <p className="text-9xl font-semibold">404</p>
        <p className="text-7xl font-semibold">Oops!</p>
        <p className="text-2xl font-medium">
          We’re sorry but it looks like your accessing a page that doesn’t exist
          anymore{" "}
        </p>
        <button className="p-4 text-xl bg-slate-800 text-white font-semibold rounded-lg">
          Back to Home
        </button>
      </div>
    </main>
  );
}
