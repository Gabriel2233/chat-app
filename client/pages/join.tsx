import { useRouter } from "next/router";

export default function JoinOrCreate() {
  const { back } = useRouter();

  return (
    <div className="w-screen h-screen flex justify-center bg-gray-200">
      <section className="w-1/3 p-4 rounded-lg shadow-lg bg-white flex items-center justify-center flex-col m-auto">
        <span onClick={() => back()} className="w-full flex items-start">
          x
        </span>
        <h1 className="my-5 text-2xl font-bold">Join a chat</h1>

        <input
          placeholder="Your username"
          className="w-full my-2 border p-2 py-3 rounded-md"
        />
        <input
          placeholder="Room name"
          className="w-full my-2 border p-2 py-3 rounded-md"
        />
        <p className="text-xs font-bold text-gray-600 my-3">
          *Typing a room name that doesn't exist will create a new one
        </p>

        <button className="px-6 p-2 bg-red-500 text-white font-semibold text-lg rounded-lg mx-1 mt-3 mb-2">
          Confirm
        </button>
      </section>
    </div>
  );
}
