function Home() {
  return (
    <div className="flex flex-col text-white">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-5xl lg:text-6xl font-bold mb-4">My Bento</h1>
        <p className="text-xl text-neutral-400">
          Welcome to my interactive portfolio
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-12">
        <div className="bg-neutral-700/50 rounded-lg p-8 backdrop-blur-sm border border-neutral-600 hover:border-neutral-500 transition-colors">
          <h2 className="text-2xl font-semibold mb-2">Socials</h2>
          <p className="text-neutral-400">Connect with me</p>
        </div>
        <div className="bg-neutral-700/50 rounded-lg p-8 backdrop-blur-sm border border-neutral-600 hover:border-neutral-500 transition-colors">
          <h2 className="text-2xl font-semibold mb-2">Projects</h2>
          <p className="text-neutral-400">My work</p>
        </div>
        <div className="bg-neutral-700/50 rounded-lg p-8 backdrop-blur-sm border border-neutral-600 hover:border-neutral-500 transition-colors">
          <h2 className="text-2xl font-semibold mb-2">Studies</h2>
          <p className="text-neutral-400">My journey</p>
        </div>
        <div className="bg-neutral-700/50 rounded-lg p-8 backdrop-blur-sm border border-neutral-600 hover:border-neutral-500 transition-colors">
          <h2 className="text-2xl font-semibold mb-2">Lab</h2>
          <p className="text-neutral-400">Creative experiments</p>
        </div>
      </div>

      {/* Placeholder content to demonstrate scrolling */}
      <div className="space-y-6 pb-12">
        <div className="bg-neutral-700/30 rounded-lg p-6 border border-neutral-700">
          <h3 className="text-lg font-semibold mb-2">Featured Project</h3>
          <p className="text-neutral-400">Coming soon...</p>
        </div>
        <div className="bg-neutral-700/30 rounded-lg p-6 border border-neutral-700">
          <h3 className="text-lg font-semibold mb-2">Latest Experiment</h3>
          <p className="text-neutral-400">Coming soon...</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
