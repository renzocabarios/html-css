import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen">
      <div className="flex flex-col p-4 gap-4 min-h-screen bg-slate-800 text-white w-[450px]">
        <div className="p-4 flex items-center justify-between">
          <p className="text-2xl font-semibold">Messages</p>
          <div className="flex items-center gap-2">
            <p>ICON</p>
            <p>ICON</p>
          </div>
        </div>
        <div className="p-4 gap-4 flex flex-col ">
          <div className="p-4 flex items-center gap-4 bg-slate-900">
            <p>ICON</p>
            <p className="">Search Messages</p>
          </div>
          <div className="flex items-center">
            <p className="text-sm font-medium py-4 px-4 rounded-3xl bg-slate-600">
              Inbox
            </p>
            <p className="text-sm font-medium">Threads</p>
          </div>
        </div>
        <UserMessage />
        <UserMessage />
        <UserMessage />
      </div>

      <div className="flex flex-col w-[958px] bg-slate-800 text-white">
        <div className="p-4 flex justify-between items-center w-full">
          <div className="flex items-center gap-4">
            <p>IMAGE</p>
            <div className="flex flex-col gap-1">
              <p>John Doe</p>
              <div className="flex items-center gap-1">
                <div className="rounded-full h-2 w-2 bg-green-500"></div>
                <p>Active Now</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <p>ICON</p>
            <p>ICON</p>
            <p>ICON</p>
          </div>
        </div>

        <div className="px-8 py-4"></div>
      </div>
    </main>
  );
}

function UserMessage() {
  return (
    <div className="p-4 flex justify-between">
      <div className="flex items-center gap-4">
        <p>IMAGE</p>
        <div className="flex flex-col gap-1">
          <p className="font-medium">John Doe</p>
          <p className="text-xs">Hello Friend!</p>
        </div>
      </div>

      <p className="text-xs font-medium">11:59 PM</p>
    </div>
  );
}
