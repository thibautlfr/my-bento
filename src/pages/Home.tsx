function Home() {
  return (
    <div className="flex flex-col h-full w-full text-white">
      <h1 className="text-6xl font-bold mb-8">My Bento</h1>
      <p className="text-xl text-neutral-400">
        Welcome to my interactive portfolio
      </p>
      <div className="mt-12 grid grid-cols-2 gap-4 max-w-4xl">
        <div className="bg-neutral-700/50 rounded-lg p-8 backdrop-blur-sm border border-neutral-600">
          <h2 className="text-2xl font-semibold mb-2">Socials</h2>
          <p className="text-neutral-400">Connect with me</p>
        </div>
        <div className="bg-neutral-700/50 rounded-lg p-8 backdrop-blur-sm border border-neutral-600">
          <h2 className="text-2xl font-semibold mb-2">Projects</h2>
          <p className="text-neutral-400">My work</p>
        </div>
        <div className="bg-neutral-700/50 rounded-lg p-8 backdrop-blur-sm border border-neutral-600">
          <h2 className="text-2xl font-semibold mb-2">Studies</h2>
          <p className="text-neutral-400">My journey</p>
        </div>
        <div className="bg-neutral-700/50 rounded-lg p-8 backdrop-blur-sm border border-neutral-600">
          <h2 className="text-2xl font-semibold mb-2">Lab</h2>
          <p className="text-neutral-400">Creative experiments</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
