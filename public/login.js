
import Head from 'next/head';

export default function Login() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Head>
        <title>Login Page Learn Next</title>
      </Head>

      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-3xl font-semibold mb-4">Instagram Login</h1>
        <form className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="username" className="block font-medium">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              className="border border-gray-300 px-3 py-2 w-full rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="password" className="block font-medium">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="border border-gray-300 px-3 py-2 w-full rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
