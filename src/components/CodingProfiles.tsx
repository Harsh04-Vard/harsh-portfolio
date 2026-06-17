"use client";

const profiles = [
  {
    name: "LeetCode",
    username: "@BhartiHarsh_2024",
    stat: "700+ Problems Solved",
    desc: "Data Structures & Algorithms",
    link: "https://leetcode.com/u/BhartiHarsh_2024/",
  },
  {
    name: "GitHub",
    username: "@Harsh04-Vard",
    stat: "10+ Repositories",
    desc: "Projects & Open Source",
    link: "https://github.com/Harsh04-Vard",
  },
  {
    name: "LinkedIn",
    username: "@harshvardhanbharti",
    stat: "Professional Network",
    desc: "Connect & Collaborate",
    link: "https://www.linkedin.com/in/harshvardhanbharti",
  },
];

export default function CodingProfiles() {
  return (
    <section
      id="profiles"
      className="max-w-7xl mx-auto px-6 py-24"
    >
      <div className="mb-16">
        <p className="text-blue-400 uppercase tracking-[5px]">
          Profiles
        </p>

        <h2 className="text-5xl font-bold mt-4">
          Coding Presence
        </h2>

        <p className="text-gray-400 mt-4 max-w-2xl">
          Platforms where I practice problem solving,
          build software projects and connect with the
          developer community.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {profiles.map((profile) => (
          <a
            key={profile.name}
            href={profile.link}
            target="_blank"
            rel="noopener noreferrer"
            className="
              block
              rounded-3xl
              border
              border-white/10
              bg-white/[0.03]
              p-8
              hover:border-blue-500
              hover:-translate-y-2
              transition-all
              duration-300
            "
          >
            <h3 className="text-3xl font-bold">
              {profile.name}
            </h3>

            <p className="text-blue-400 mt-3">
              {profile.username}
            </p>

            <h4 className="text-2xl font-bold mt-8">
              {profile.stat}
            </h4>

            <p className="text-gray-400 mt-3">
              {profile.desc}
            </p>

            <div className="mt-8 text-blue-400 font-medium">
              View Profile →
            </div>
          </a>
        ))}

      </div>
    </section>
  );
}