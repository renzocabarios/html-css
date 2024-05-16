import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-900">
      <div className="w-[300px] flex flex-col  gap-[1px] bg-white rounded-3xl">
        <div className="flex items-end justify-end px-3 py-6 pb-2 text-right rounded-t-3xl">
          <p className="text-[36px]">1000</p>
        </div>

        <div className="grid grid-cols-4 gap-[2px] text-xl font-medium">
          <div className="h-[70px] bg-gray-100 flex items-center justify-center rounded-lg">
            <p>C</p>
          </div>

          <div className="h-[70px] bg-gray-100 flex items-center justify-center rounded-lg">
            <p>±</p>
          </div>

          <div className="h-[70px] bg-gray-100 flex items-center justify-center rounded-lg">
            <p>%</p>
          </div>

          <div className="h-[70px] text-white bg-slate-500 flex items-center justify-center rounded-l-lg">
            <p>÷</p>
          </div>

          <div className="h-[70px] flex items-center justify-center rounded-lg">
            <p>6</p>
          </div>

          <div className="h-[70px] flex items-center justify-center rounded-lg">
            <p>7</p>
          </div>

          <div className="h-[70px] flex items-center justify-center rounded-lg">
            <p>8</p>
          </div>

          <div className="h-[70px] text-white bg-slate-500 flex items-center justify-center rounded-l-lg">
            <p>x</p>
          </div>

          <div className="h-[70px] flex items-center justify-center rounded-lg">
            <p>4</p>
          </div>

          <div className="h-[70px] flex items-center justify-center rounded-lg">
            <p>5</p>
          </div>

          <div className="h-[70px] flex items-center justify-center rounded-lg">
            <p>6</p>
          </div>

          <div className="h-[70px] text-white bg-slate-500 flex items-center justify-center rounded-l-lg">
            <p>-</p>
          </div>

          <div className="h-[70px] flex items-center justify-center rounded-lg">
            <p>1</p>
          </div>

          <div className="h-[70px] flex items-center justify-center rounded-lg">
            <p>2</p>
          </div>

          <div className="h-[70px] flex items-center justify-center rounded-lg">
            <p>3</p>
          </div>

          <div className="h-[70px] text-white bg-slate-500 flex items-center justify-center rounded-l-lg">
            <p>+</p>
          </div>
        </div>

        <div className="grid grid-cols-4 place-items-stretch  text-xl font-medium">
          <div className="h-[70px]  flex items-center justify-center rounded-l-lg">
            <p>0</p>
          </div>
          <div className="h-[70px]  flex items-center justify-center rounded-l-lg">
            <p>,</p>
          </div>
          <div className="col-span-2 h-[70px] text-white bg-slate-500 flex items-center justify-center rounded-tl-lg rounded-br-3xl">
            <p>=</p>
          </div>
        </div>
      </div>
    </main>
  );
}
