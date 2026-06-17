import FadeIn from "./FadeIn";
export default function Education() {
  const education = [
    {
      year: "2023 - 2027",
      title: "National Institute of Technology Kurukshetra",
      subtitle: "B.Tech in Electronics & Communication Engineering",
      details: "CGPA: 8.5+",
      achievements: [
        "Core Team Member, Microbus Society",
        "PM YASASVI Scholarship Recipient",
        "Software Development & AI Projects",
      ],
    },

    {
      year: "2020 - 2022",
      title: "SADN Convent School",
      subtitle: "CBSE Class XII (Science - PCM)",
      details: "94% • District Topper",
      achievements: [],
    },

    {
      year: "2015 - 2020",
      title: "Gurukul Kurukshetra",
      subtitle: "CBSE Class X",
      details: "97%",
      achievements: [],
    },
  ];

  return (
    <section
      id="education"
      className="max-w-7xl mx-auto px-6 py-28"
    >
      <p className="text-blue-400 uppercase tracking-[5px]">
        Education
      </p>

      <h2 className="text-5xl font-bold mt-4 mb-20">
        Academic Journey
      </h2>

      <div className="relative">

        {/* Timeline Line */}
        <div className="absolute left-4 top-0 h-full w-[2px] bg-blue-500/30" />

        <div className="space-y-16">

          {education.map((item, index) => (
            <div
              key={index}
              className="relative pl-16"
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 top-2 w-8 h-8 rounded-full bg-blue-500 shadow-[0_0_25px_rgba(59,130,246,0.7)]" />
              <FadeIn>
              <div className="glass rounded-3xl p-8 border border-white/10 hover:border-blue-500 transition-all duration-300">

                <span className="text-blue-400 font-medium">
                  {item.year}
                </span>

                <h3 className="text-2xl font-bold mt-2">
                  {item.title}
                </h3>

                <p className="text-gray-300 mt-2">
                  {item.subtitle}
                </p>

                <p className="text-blue-400 mt-3 font-medium">
                  {item.details}
                </p>

                {item.achievements.length > 0 && (
                  <div className="flex flex-wrap gap-3 mt-6">

                    {item.achievements.map((achievement) => (
                      <span
                        key={achievement}
                        className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm"
                      >
                        {achievement}
                      </span>
                    ))}

                  </div>
                )}

              </div>
              </FadeIn>
            </div>
            
          ))}

        </div>
        
      </div>
    </section>
  );
}