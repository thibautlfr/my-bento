export default function ProfileSidebar() {
  {/* Top section - Profile info */}
  return (
    <div className="flex flex-col gap-8 h-full text-white">
      {/* Avatar */}
      <div className="w-24 h-24 rounded-full bg-neutral-600 border-2 border-neutral-500 overflow-hidden">
        <img
          src="https://avatars.githubusercontent.com/u/123965656?v=4"
          alt="Profile"
          className="w-full h-full object-cover"
          onError={e => {
            e.currentTarget.style.display = 'none';
          }}
        />
      </div>

      {/* Name and title */}
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">Thibaut Lefrançois</h1>
        <p className="text-xl text-neutral-400">
          Creative Developer - The art of shaping digital
        </p>
      </div>

      {/* Bio */}
      <p className="text-neutral-300 leading-relaxed">
        Developer passionate about creating interactive and creative web
        experiences. Continuous exploration of the frontiers of web development.
      </p>
    </div>
  );
}
