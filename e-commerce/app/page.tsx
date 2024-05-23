import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="w-full flex justify-center items-center bg-white">
        <div className="w-[1440px] flex items-center justify-between">
          <p>Crypto Shoes</p>
          <div className="flex items-center p-4 gap-4">
            <p>Collection</p>
            <p>About</p>
            <p>Contacts</p>
          </div>

          <div className="flex items-center p-4 gap-4">
            <p>Icon</p>
            <p>Icon</p>
          </div>
        </div>
      </div>

      <div className="w-[1440px] grid grid-cols-2 py-4 px-32 gap-4">
        <div className="px-4 py-16 flex items-center flex-col gap-4">
          <Image
            src={"/images/shoes.png"}
            height={544}
            width={475}
            alt=""
            className="rounded-3xl"
          ></Image>

          <div className="py-4 flex justify-between gap-4">
            <Image
              src={"/images/shoes.png"}
              height={90}
              width={90}
              alt=""
              className="rounded-3xl"
            ></Image>
            <Image
              src={"/images/shoes.png"}
              alt=""
              height={90}
              width={90}
              className="rounded-3xl"
            ></Image>{" "}
            <Image
              src={"/images/shoes.png"}
              alt=""
              height={90}
              width={90}
              className="rounded-3xl"
            ></Image>{" "}
            <Image
              src={"/images/shoes.png"}
              alt=""
              height={90}
              width={90}
              className="rounded-3xl"
            ></Image>{" "}
            <Image
              src={"/images/shoes.png"}
              alt=""
              height={90}
              width={90}
              className="rounded-3xl"
            ></Image>
          </div>
        </div>

        <div className="px-4 py-8 flex flex-col gap-4">
          <div className="p-4 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <p className="text-2xl font-semibold">
                Air Jordan 1 Low Crypto Craft
              </p>
              <p className="font-medium">Men's Shoes</p>
            </div>

            <p className="font-medium">₱6,895</p>
          </div>

          <div className="p-4 flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <p className="font-semibold">Select Size</p>
              <p className="text-gray-400 font-semibold">Size Guide</p>
            </div>

            <div className="grid grid-cols-3 gap-2">
              <div className="flex items-center justify-center p-4 rounded-lg border border-black">
                <p>US 7</p>
              </div>
              <div className="flex items-center justify-center p-4 rounded-lg border border-black">
                <p>US 7</p>
              </div>{" "}
              <div className="flex items-center justify-center p-4 rounded-lg border border-black">
                <p>US 7</p>
              </div>{" "}
              <div className="flex items-center justify-center p-4 rounded-lg border border-black">
                <p>US 7</p>
              </div>{" "}
              <div className="flex items-center justify-center p-4 rounded-lg border border-black">
                <p>US 7</p>
              </div>{" "}
              <div className="flex items-center justify-center p-4 rounded-lg border border-black">
                <p>US 7</p>
              </div>{" "}
              <div className="flex items-center justify-center p-4 rounded-lg border border-black">
                <p>US 7</p>
              </div>{" "}
              <div className="flex items-center justify-center p-4 rounded-lg border border-black">
                <p>US 7</p>
              </div>{" "}
              <div className="flex items-center justify-center p-4 rounded-lg border border-black">
                <p>US 7</p>
              </div>{" "}
              <div className="flex items-center justify-center p-4 rounded-lg border border-black">
                <p>US 7</p>
              </div>{" "}
              <div className="flex items-center justify-center p-4 rounded-lg border border-black">
                <p>US 7</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 w-full">
            <button className="w-full p-4 text-white bg-black rounded-3xl">
              Add to Bag
            </button>
            <button className="w-full p-4 flex items-center justify-center gap-2 border border-black rounded-3xl">
              Favourite
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
