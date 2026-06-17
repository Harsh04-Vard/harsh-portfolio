"use client";
import { motion } from "framer-motion";
export default function Navbar() {
  return (
    <motion.header
  initial={{ y: -100 }}
  animate={{ y: 0 }}
  transition={{ duration: 0.6 }}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="glass rounded-2xl px-8 py-4 flex items-center justify-between">

          <a
            href="#"
            className="text-xl font-bold text-white"
          >
            Harsh Vardhan
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-300">

            <a
              href="#about"
              className="hover:text-blue-400 transition"
            >
              About
            </a>

            <a
              href="#skills"
              className="hover:text-blue-400 transition"
            >
              Skills
            </a>

            <a
              href="#projects"
              className="hover:text-blue-400 transition"
            >
              Projects
            </a>

            <a
              href="#experience"
              className="hover:text-blue-400 transition"
            >
              Experience
            </a>

            <a
              href="#contact"
              className="hover:text-blue-400 transition"
            >
              Contact
            </a>

          </nav>

        </div>
      </div>
    </motion.header>
  );
}