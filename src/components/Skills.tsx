import FadeIn from "./FadeIn";

export default function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        "Java",
        "C++",
        "Python",
        "JavaScript",
        "SQL",
        "MATLAB",
      ],
    },
    {
      title: "Frontend",
      skills: [
        "React",
        "Next.js",
        "Tailwind CSS",
        "HTML",
        "CSS",
      ],
    },
    {
      title: "AI / ML",
      skills: [
        "OpenCV",
        "MediaPipe",
        "Machine Learning",
        "NumPy",
      ],
    },
    {
      title: "Core CS",
      skills: [
        "DSA",
        "OOP",
        "DBMS",
        "Operating Systems",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="max-w-7xl mx-auto px-6 py-24"
    >
      <FadeIn>
        <div className="mb-14">
          <p className="text-blue-400 uppercase tracking-[4px]">
            Technical Skills
          </p>

          <h2 className="text-5xl font-bold mt-3">
            My Tech Stack
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl">
            Technologies and tools I use to build
            software products and solve real-world
            problems.
          </p>
        </div>
      </FadeIn>

      <div className="grid md:grid-cols-2 gap-8">

        {skillCategories.map((category) => (
          <FadeIn key={category.title}>
            <div className="glass rounded-3xl p-8 hover:border-blue-500 transition-all duration-300 hover:-translate-y-2">

              <h3 className="text-2xl font-semibold mb-6 text-blue-400">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">

                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full bg-white/10 border border-white/10 hover:bg-blue-500/20 hover:border-blue-500 transition"
                  >
                    {skill}
                  </span>
                ))}

              </div>

            </div>
          </FadeIn>
        ))}

      </div>
    </section>
  );
}
