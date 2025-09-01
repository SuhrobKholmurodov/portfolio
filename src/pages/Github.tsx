import { useGetUserQuery } from "@/api";
import {
  BookMarked,
  Github as GithubIcon,
  MapPin,
  Users,
  ExternalLink,
} from "lucide-react";

export const Github = () => {
  const { data: user, isLoading } = useGetUserQuery();

  if (isLoading || !user) {
    return <div className="text-white p-8">Loading GitHub profile...</div>;
  }

  const stats = [
    {
      label: "Followers",
      value: user.followers,
      icon: <Users className="w-5 h-5 text-cyan-400" />,
      link: `https://github.com/SuhrobKholmurodov?tab=followers`,
    },
    {
      label: "Following",
      value: user.following,
      icon: <Users className="w-5 h-5 text-violet-400" />,
      link: `https://github.com/SuhrobKholmurodov?tab=following`,
    },
    {
      label: "Repositories",
      value: user.public_repos,
      icon: <BookMarked className="w-5 h-5 text-yellow-400" />,
      link: `https://github.com/SuhrobKholmurodov?tab=repositories`,
    },
  ];

  const extras = [
    {
      label: "Location",
      value: user.location,
      icon: <MapPin className="w-5 h-5 text-cyan-400" />,
    },
  ];

  return (
    <div className="flex flex-1 h-full bg-gradient-to-br from-zinc-900 via-black to-zinc-950 text-zinc-100 p-6 sm:p-4 overflow-auto min-h-0">
      <div className="max-w-[1080px] mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-start items-center gap-6 mb-8 bg-gradient-to-r from-cyan-900/30 via-zinc-800/30 to-black/30 border border-zinc-700/50 rounded-3xl p-6 sm:p-4 backdrop-blur-md shadow-lg">
          <img
            src={user.avatar_url}
            alt={user.login}
            className="w-28 h-28 sm:w-20 sm:h-20 rounded-full border-2 border-zinc-700"
          />
          <div className="flex-1 text-center sm:text-left">
            <h1 className="text-3xl sm:text-base font-bold text-cyan-400 mb-1">
              {user.login}
            </h1>
            <h2 className="text-xl sm:text-sm text-zinc-300 mb-2">
              {user.name}
            </h2>
            {user.bio && <p className="text-zinc-400 mb-2">{user.bio}</p>}
            <a
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-blue-400 hover:underline"
            >
              <GithubIcon className="w-4 h-4" />
              View GitHub Profile
            </a>
          </div>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-1 gap-6 mb-8">
          {stats.map((stat) => (
            <a
              key={stat.label}
              href={stat.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-3 p-4 rounded-xl border border-zinc-700/50 backdrop-blur-md hover:scale-105 transition-transform"
              style={{
                background:
                  "linear-gradient(135deg, #0f172a 0%, #111827 50%, #1e293b 100%)",
              }}
            >
              {stat.icon}
              <div className="flex-1 flex gap-5 justify-between items-center">
                <div>
                  <p className="text-zinc-400 text-xs">{stat.label}</p>
                  <p className="text-white font-bold text-lg">{stat.value}</p>
                </div>
                <ExternalLink className="w-4 h-4 text-white opacity-0 group-hover:opacity-100 sm:opacity-100 transition-opacity" />
              </div>
            </a>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 mb-8">
          {extras.map((extra) => (
            <div
              key={extra.label}
              className="flex items-center gap-3 p-4 rounded-xl border border-zinc-700/50 backdrop-blur-md hover:scale-105 transition-transform"
              style={{
                background:
                  "linear-gradient(135deg, #0f172a 0%, #111827 50%, #1e293b 100%)",
              }}
            >
              {extra.icon}
              <p className="text-white font-medium">{extra.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
