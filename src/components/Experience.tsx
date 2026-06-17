export default function Experience() {
  const experiences = [
    {
      company: "TechSaksham Internship",
      role: "AI & Computer Vision Intern",
      duration: "Microsoft + SAP + AICTE",
      description:
        "Worked on AI fundamentals, Machine Learning, Computer Vision, MediaPipe and OpenCV. Built Human Pose Estimation and AI-powered fitness applications.",
    },
    {
      company: "Raak Sapphire",
      role: "IoT Intern",
      duration: "Arduino • ESP32 • IoT",
      description:
        "Developed IoT projects using Arduino and ESP32 including smart parking systems, solar tracking systems, and embedded applications.",
    },
    {
      company: "Microbus Society",
      role: "Core Team Member",
      duration: "NIT Kurukshetra",
      description:
        "Contributed to technical projects, event management, teamwork, leadership and mentoring activities within the society.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="mb-14">
        <p className="text-blue-400 uppercase tracking-[4px]">
          Experience
        </p>

        <h2 className="text-5xl font-bold mt-3">
          Journey So Far
        </h2>
      </div>

      <div className="space-y-8">
        {experiences.map((exp) => (
          <div
            key={exp.company}
            className="glass rounded-3xl p-8 border-l-4 border-blue-500"
          >
            <h3 className="text-2xl font-bold">
              {exp.role}
            </h3>

            <p className="text-blue-400 mt-2">
              {exp.company}
            </p>

            <p className="text-gray-500 mt-1">
              {exp.duration}
            </p>

            <p className="text-gray-300 mt-4 leading-relaxed">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}