"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section className="pt-24 min-h-[85vh] flex items-center relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/20 blur-[150px] rounded-full" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/10 blur-[150px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          <div className="text-blue-400 tracking-[4px] uppercase mb-5 text-sm md:text-base font-medium h-8">

            <TypeAnimation
              sequence={[
                "Software Developer",
                2000,
                "ECE Undergraduate",
                2000,
                "AI Enthusiast",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              cursor={true}
            />

          </div>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Harsh
            <br />
            <span className="text-blue-500">
              Vardhan
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-300 max-w-xl leading-relaxed">
            Electronics & Communication Engineering undergraduate at
            NIT Kurukshetra passionate about Software Engineering,
            Data Structures & Algorithms and AI-powered applications.
          </p>

          <p className="mt-4 text-gray-400 max-w-xl">
            Solved 700+ DSA problems, secured AIR 8186 in GATE 2026,
            and built scalable software products using modern technologies.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-8">

            <a
              href="/resume.pdf"
              target="_blank"
              className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-xl font-medium transition"
            >
              Resume
            </a>

            <a
              href="https://github.com/Harsh04-Vard"
              target="_blank"
              className="border border-white/10 hover:border-blue-500 hover:bg-white/5 px-6 py-3 rounded-xl transition"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/harshvardhanbharti"
              target="_blank"
              className="border border-white/10 hover:border-blue-500 hover:bg-white/5 px-6 py-3 rounded-xl transition"
            >
              LinkedIn
            </a>

            <a
              href="https://leetcode.com/u/BhartiHarsh_2024/"
              target="_blank"
              className="border border-white/10 hover:border-blue-500 hover:bg-white/5 px-6 py-3 rounded-xl transition"
            >
              LeetCode
            </a>

          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">

            <div className="glass p-4 rounded-xl text-center">
              <h3 className="text-2xl font-bold text-blue-400">
                700+
              </h3>
              <p className="text-xs text-gray-400 mt-1">
                DSA Problems
              </p>
            </div>

            <div className="glass p-4 rounded-xl text-center">
              <h3 className="text-2xl font-bold text-blue-400">
                8.5+
              </h3>
              <p className="text-xs text-gray-400 mt-1">
                CGPA
              </p>
            </div>

            <div className="glass p-4 rounded-xl text-center">
              <h3 className="text-xl font-bold text-blue-400">
                AIR 8186
              </h3>
              <p className="text-xs text-gray-400 mt-1">
                GATE 2026
              </p>
            </div>

            <div className="glass p-4 rounded-xl text-center">
              <h3 className="text-2xl font-bold text-blue-400">
                3+
              </h3>
              <p className="text-xs text-gray-400 mt-1">
                Projects
              </p>
            </div>

          </div>

        </motion.div>

        {/* RIGHT */}
        <div className="flex justify-center">

          <motion.div
            className="relative"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >

            <div className="absolute inset-0 bg-blue-500 blur-[100px] opacity-40 rounded-full" />

            <Image
              src="/harsh.png"
              alt="Harsh Vardhan"
              width={450}
              height={450}
              priority
              className="relative rounded-full border-4 border-blue-500 shadow-[0_0_60px_rgba(59,130,246,0.5)] hover:scale-105 transition duration-500"
            />

          </motion.div>

        </div>

      </div>
    </section>
  );
}

