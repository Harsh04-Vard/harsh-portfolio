export default function Achievements() {
  const stats = [
    {
      value: "700+",
      label: "DSA Problems Solved",
    },
    {
      value: "8.5+",
      label: "CGPA",
    },
    {
      value: "AIR 8186",
      label: "GATE 2026",
    },
    {
      value: "3+",
      label: "Major Projects",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="mb-14">
        <p className="text-blue-400 uppercase tracking-[4px]">
          Achievements
        </p>

        <h2 className="text-5xl font-bold mt-3">
          Numbers That Matter
        </h2>
      </div>

      <div className="grid md:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="glass rounded-3xl p-8 text-center hover:scale-105 transition duration-300"
          >
            <h3 className="text-4xl font-bold text-blue-400">
              {stat.value}
            </h3>

            <p className="text-gray-400 mt-3">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}