import { NftCard } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex justify-center items-center bg-slate-900">
      <NftCard />
    </main>
  );
}
