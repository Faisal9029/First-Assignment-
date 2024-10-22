'use client';

export default function ErrorPage() {
  return (
    <div className="flex items-center justify-center h-screen bg-red-100">
      <h1 className="text-5xl font-bold text-red-600">
        Something went wrong!
      </h1>
      <p className="mt-4 text-lg text-gray-700">
        Please try again later or contact support.
      </p>
    </div>
  );
}
