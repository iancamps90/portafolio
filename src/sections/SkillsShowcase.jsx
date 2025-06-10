import { motion } from "framer-motion";
import { FaReact, FaPython, FaDocker, FaNodeJs, FaGitAlt, FaHtml5, FaCss3Alt, FaJsSquare } from "react-icons/fa";
import { SiDjango, SiTailwindcss, SiTypescript, SiPostgresql, SiGithubactions } from "react-icons/si";

const skills = [
    { name: "React", icon: <FaReact className="text-sky-400" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
    { name: "Django", icon: <SiDjango className="text-green-700" /> },
    { name: "Python", icon: <FaPython className="text-yellow-400" /> },
    { name: "Docker", icon: <FaDocker className="text-blue-500" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-800" /> },
    { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
    { name: "GitHub Actions", icon: <SiGithubactions className="text-gray-600" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
    { name: "HTML5", icon: <FaHtml5 className="text-orange-600" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-600" /> },
    { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
    { name: "React", icon: <FaReact className="text-sky-400" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
];

function SkillsShowcase() {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center bg-white dark:bg-gray-950 px-6 py-20 text-center">
            <motion.h2
                className="text-3xl md:text-5xl font-bold mb-12"
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
            >
                Tecnologías que domino
            </motion.h2>

            <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 max-w-5xl"
                initial="hidden"
                whileInView="visible"
                variants={{
                    visible: { transition: { staggerChildren: 0.15 } },
                }}
            >
                {skills.map((skill, idx) => (
                    <motion.div
                        key={idx}
                        className="flex flex-col items-center bg-gray-100 dark:bg-gray-800 p-4 rounded-xl shadow-md hover:scale-105 transition-transform"
                        variants={{
                            hidden: { opacity: 0, scale: 0.8 },
                            visible: { opacity: 1, scale: 1 },
                        }}
                    >
                        <div className="text-4xl mb-2">{skill.icon}</div>
                        <p className="font-semibold">{skill.name}</p>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}

export default SkillsShowcase;
