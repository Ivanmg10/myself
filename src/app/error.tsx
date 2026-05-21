"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  console.error("Error caught by error boundary:", error);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4 p-8">
      <h1 className="text-4xl font-bold">Algo salió mal</h1>
      <p className="text-gray-400">
        Ha ocurrido un error inesperado. Por favor, inténtalo de nuevo.
      </p>
      <button
        onClick={() => reset()}
        className="rounded-full border border-solid border-transparent bg-[#a29bfe] text-black px-5 py-2 font-medium hover:bg-[#6c5ce7] transition-colors"
      >
        Intentar de nuevo
      </button>
    </div>
  );
}
