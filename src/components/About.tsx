import FadeIn from "./FadeIn";

export default function About() {
  return (
    <FadeIn>
      <section
        id="about"
        className="max-w-7xl mx-auto px-6 py-24"
      >
        <h2 className="text-4xl font-bold mb-8">
          About Me
        </h2>

        <div className="glass rounded-3xl p-8">

          <p className="text-gray-300 leading-relaxed text-lg">
            I'm Harsh Vardhan, an Electronics & Communication Engineering undergraduate at NIT Kurukshetra with a strong interest in Software Engineering, Data Structures & Algorithms, and AI-driven applications.

            <br />
            <br />

            I have solved 700+ DSA problems, secured AIR 8186 in GATE 2026, and built full-stack and AI-powered projects including interview simulators, recommendation engines, and automated tracking systems.

            <br />
            <br />

            Currently preparing for Software Development Engineer roles and actively seeking internship and placement opportunities.
          </p>

          <p className="text-gray-400 mt-6">
            I have solved 700+ DSA problems, qualified
            GATE 2026, and built projects ranging from
            AI-powered interview platforms to price
            tracking systems and recommendation engines.
          </p>

        </div>
      </section>
    </FadeIn>
  );
}