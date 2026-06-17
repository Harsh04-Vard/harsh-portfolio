export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Left */}
          <div>
            <h3 className="text-2xl font-bold">
              Harsh <span className="text-blue-500">Vardhan</span>
            </h3>

            <p className="text-gray-400 mt-2">
              Software Engineer • Problem Solver • AI Enthusiast
            </p>
          </div>

          {/* Right */}
          <div className="flex items-center gap-6">

            <a
              href="https://github.com/Harsh04-Vard"
              target="_blank"
              className="text-gray-400 hover:text-blue-400 transition"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/harshvardhanbharti"
              target="_blank"
              className="text-gray-400 hover:text-blue-400 transition"
            >
              LinkedIn
            </a>

            <a
              href="https://leetcode.com/u/BhartiHarsh_2024/"
              target="_blank"
              className="text-gray-400 hover:text-blue-400 transition"
            >
              LeetCode
            </a>

          </div>

        </div>

        {/* Bottom */}
        <div className="mt-10 pt-8 border-t border-white/10 text-center">

          <p className="text-gray-500 text-sm">
            © 2026 Harsh Vardhan. Built with Next.js, TypeScript & Tailwind CSS.
          </p>

        </div>

      </div>
    </footer>
  );
}