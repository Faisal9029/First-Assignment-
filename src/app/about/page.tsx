export default async function About() {
  // 5 seconds delay
  await new Promise((resolve) => {
    setTimeout(resolve, 5000);
  });

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 drop-shadow-lg animate-blink">
        Welcome to My About Page
      </h1>
    </div>
  );
}
