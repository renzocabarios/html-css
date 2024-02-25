import Image from "next/image";
import { FEATURES } from "./data";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center p-40">
      <div className="grid grid-cols-3 gap-10 text-center ">
        <div className="col-span-3 flex flex-col gap-4">
          <p className="text-5xl font-black">Discover Our Unique Features</p>
          <p className="font-semibold">
            Our features are designed to enhance your productivity and
            streamline your workflow.
          </p>
        </div>
        {FEATURES.map((e: any) => (
          <Feature key={e.title} title={e.title} description={e.description} />
        ))}
      </div>
    </main>
  );
}

function Feature({ title, description }: any) {
  return (
    <div className="flex flex-col gap-4">
      <object data="./assets/arrow.svg" type=""></object>
      <p className="font-semibold">{title}</p>
      <p className="">{description}</p>
    </div>
  );
}
