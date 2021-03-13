import Link from "next/link";

export default function Home() {
  return (
    <div className="w-screen h-full">
      <header className="flex items-center justify-between border border-gray-200 p-4">
        <span className="text-center font-extrabold text-red-500">
          Chat App
        </span>

        <div>
          <Link href="/join">
            <button className="p-2 bg-gray-100 text-gray-800 font-semibold text-sm rounded-lg px-3 mx-1">
              Start Chatting
            </button>
          </Link>
        </div>
      </header>

      <div className="w-4/5 grid grid-cols-2 m-auto my-10">
        <div className="m-auto p-5 ">
          <h1 className="my-6 font-bold text-5xl">
            A Simple chat app. <br />
            That's all you need
          </h1>
          <Link href="/join">
            <button className="px-6 p-2 bg-red-500 text-white font-semibold text-lg rounded-lg mx-1">
              Start now
            </button>
          </Link>
        </div>
        <img src="./chat.png" alt="man chatting" className="m-auto w-full" />
      </div>
    </div>
  );
}
