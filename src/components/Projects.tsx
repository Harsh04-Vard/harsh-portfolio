"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    title: "AI Interview Marketplace",
    featured: true,
    description:
      "AI-powered mock interview platform with authentication, AI-generated interviews, real-time interaction, and email notifications.",
    tech: ["Next.js", "Supabase", "Clerk", "Groq API", "Tailwind CSS"],
    github: "https://github.com/Harsh04-Vard/ai-interview-marketplace",
    demo: "https://ai-interview-marketplace.vercel.app/",
    image: "/projects/interview.png",
  },

  {
    title: "Price Alert Tracker",
    featured: false,
    description:
      "Automated product price tracking platform that monitors price changes and notifies users whenever prices drop below target values.",
    tech: ["Next.js", "Supabase", "Firecrawl", "Cron Jobs"],
    github: "https://github.com/Harsh04-Vard/pricealert",
    demo: "https://getpricealert-pi.vercel.app/",
    image: "/projects/pricealert.png",
  },

  {
    title: "Movie Recommender System",
    featured: false,
    description:
      "Content-based recommendation engine using Machine Learning, cosine similarity and TMDB API integration.",
    tech: ["Python", "Streamlit", "Machine Learning", "TMDB API"],
    github:
      "https://github.com/Harsh04-Vard/movie-recommender-system",
    demo:
      "https://movie-recommender-system-4-ao2b.onrender.com/",
    image: "/projects/movie.png",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto px-6 py-28"
    >
      <div className="mb-20">
        <p className="text-blue-400 uppercase tracking-[5px]">
          Portfolio
        </p>

        <h2 className="text-5xl md:text-6xl font-bold mt-3">
          Featured Projects
        </h2>

        <p className="text-gray-400 mt-5 text-lg">
          Software products and applications I have built.
        </p>
      </div>

      <div className="space-y-24 md:space-y-36">

        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{
              opacity: 0,
              y: 80,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
              index % 2 !== 0
                ? "lg:[&>*:first-child]:order-2"
                : ""
            }`}
          >
            <ProjectImage project={project} />
            <ProjectContent project={project} />
          </motion.div>
        ))}

      </div>
    </section>
  );
}

function ProjectImage({
  project,
}: {
  project: {
    image: string;
    title: string;
  };
}) {
  return (
    <motion.div
      className="group"
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        duration: 0.3,
      }}
    >
      <div className="overflow-hidden rounded-3xl border border-white/10 shadow-xl">

        <Image
          src={project.image}
          alt={project.title}
          width={1200}
          height={700}
          className="
            w-full
            h-[220px]
            sm:h-[280px]
            lg:h-[340px]
            object-cover
            transition-all
            duration-700
            group-hover:scale-110
          "
        />

      </div>
    </motion.div>
  );
}

function ProjectContent({
  project,
}: {
  project: {
    title: string;
    description: string;
    tech: string[];
    github: string;
    demo: string;
    featured?: boolean;
  };
}) {
  return (
    <div>

      {project.featured && (
        <div className="inline-block mb-5 px-4 py-2 rounded-full bg-blue-500/20 text-blue-400 text-sm border border-blue-500/20">
          ⭐ Featured Project
        </div>
      )}

      <h3 className="text-3xl md:text-5xl font-bold">
        {project.title}
      </h3>

      <p className="text-gray-400 mt-4 md:mt-6 text-base md:text-lg leading-relaxed">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-3 mt-8">

        {project.tech.map((tech) => (
          <span
            key={tech}
            className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm"
          >
            {tech}
          </span>
        ))}

      </div>

      <div className="flex flex-wrap gap-3 mt-8">

        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-3 rounded-xl border border-white/10 hover:border-blue-500 hover:bg-white/5 transition"
        >
          GitHub
        </a>

        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 transition"
        >
          Live Demo
        </a>

      </div>

    </div>
  );
}
