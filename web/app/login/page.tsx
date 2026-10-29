
import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 px-6">
      <div className="w-full max-w-md rounded-2xl bg-white p-10 shadow-lg">

        <div className="mb-8 text-center">
          <h1 className="text-5xl font-black text-blue-950">
            VCA
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Virtual Campus Academy
          </p>
        </div>

        <h2 className="text-center text-2xl font-bold text-slate-900">
          Student Portal
        </h2>

        <p className="mt-3 text-center text-slate-500">
          Welcome to your virtual learning experience.
        </p>

        <div className="mt-8 rounded-xl bg-blue-50 p-4">
          <p className="text-sm font-semibold text-blue-950">
            Demo Student Account
          </p>
          <p className="mt-2 text-sm text-slate-600">
            This is a prototype. No password is required.
          </p>
        </div>

        <Link
          href="/dashboard"
          className="mt-8 block rounded-lg bg-blue-900 px-6 py-4 text-center font-semibold text-white hover:bg-blue-800"
        >
          Enter Student Dashboard
        </Link>

        <Link
          href="/"
          className="mt-5 block text-center text-sm text-blue-800 hover:underline"
        >
          Back to Homepage
        </Link>

      </div>
    </main>
  );
}
