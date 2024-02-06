import Image from "next/image";
import data from "@/data/data.json";
import { Button, ScoreCard } from "@/components";
import style from "./style.module.css";

export default function Home() {
  return (
    <main className={style.container}>
      <div className={style.result_container}>
        <p className="text-lg text-indigo-300">Your Result</p>
        <div className={style.result}>
          <p className="text-2xl text-indigo-50">76</p>
          <p className="text-indigo-300">of 100</p>
        </div>
        <div className={style.result_description}>
          <p className="text-xl text-indigo-50">Great</p>
          <p className="text-indigo-300">
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>
      </div>
      <div className={style.summary_container}>
        <p className="text-xl">Summary</p>
        {data.map((e: any) => {
          return <ScoreCard title={e.title} score={e.score} />;
        })}
        <Button>Continue</Button>
      </div>
    </main>
  );
}
