import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4 p-8">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-xl text-gray-400">Página no encontrada</p>
      <Link
        href="/"
        className="rounded-full border border-solid border-transparent bg-primary text-black px-5 py-2 font-medium hover:bg-primary-hover transition-colors"
      >
        Volver al inicio
      </Link>
    </div>
  );
}
