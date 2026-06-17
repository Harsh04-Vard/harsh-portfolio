export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-7xl mx-auto px-6 py-28"
    >
      <div className="text-center mb-16">

        <p className="text-blue-400 uppercase tracking-[5px]">
          Contact
        </p>

        <h2 className="text-5xl font-bold mt-4">
          Let's Work Together
        </h2>

        <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
          Open to Software Engineering internships,
          collaborations and exciting opportunities.
        </p>

      </div>

      <div className="grid md:grid-cols-2 gap-8">

        {/* LEFT */}

        <div className="glass rounded-3xl p-8">

          <h3 className="text-2xl font-semibold mb-8">
            Get In Touch
          </h3>

          <div className="space-y-6">

            <a
              href="mailto:harshvardhanbharti2020@gmail.com"
              className="block hover:text-blue-400 transition"
            >
              📧 harshvardhanbharti2020@gmail.com
            </a>

            <a
              href="https://github.com/Harsh04-Vard"
              target="_blank"
              className="block hover:text-blue-400 transition"
            >
              💻 github.com/Harsh04-Vard
            </a>

            <a
              href="https://www.linkedin.com/in/harshvardhanbharti"
              target="_blank"
              className="block hover:text-blue-400 transition"
            >
              🔗 linkedin.com/in/harshvardhanbharti
            </a>

            <a
              href="https://leetcode.com/u/BhartiHarsh_2024/"
              target="_blank"
              className="block hover:text-blue-400 transition"
            >
              🧩 leetcode.com/u/BhartiHarsh_2024
            </a>

          </div>

        </div>

        {/* RIGHT */}

        <div className="glass rounded-3xl p-8">

          <h3 className="text-2xl font-semibold mb-6">
            Quick Message
          </h3>

          <form className="space-y-4">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 rounded-xl bg-black/20 border border-white/10 outline-none"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 rounded-xl bg-black/20 border border-white/10 outline-none"
            />

            <textarea
              rows={5}
              placeholder="Your Message"
              className="w-full p-4 rounded-xl bg-black/20 border border-white/10 outline-none"
            />

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 py-4 rounded-xl transition"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}