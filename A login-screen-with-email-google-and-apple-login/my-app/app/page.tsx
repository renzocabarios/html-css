export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="rounded shadow-lg p-5 flex flex-col items-center gap-4 max-w-96">
        <p className="text-3xl font-semibold ">Login</p>
        <p className="text-gray-500 text-center">
          By logging in, you accept our
          <span className="text-blue-400"> terms</span> and
          <span className="text-blue-400"> privacy policy</span> .
        </p>

        <div className="flex flex-col w-full gap-2">
          <p>Email</p>
          <input type="text" className="rounded border-2 p-2" />
        </div>

        <p className="text-gray-500">OR</p>
        <button className="text-white bg-blue-400 rounded p-3 w-full">
          Login with Google
        </button>
        <button className="text-white bg-black rounded p-3 w-full">
          Login with Apple
        </button>
      </div>
    </main>
  );
}
