import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
    {
        title: "🛡️ CloudGuardian",
        description:
            "Aplicación avanzada de ciberseguridad desplegada en la nube con protección contra ataques, bloqueo de IPs y reverse proxy seguro. Proyecto líder en prácticas con enfoque DevSecOps.",
        image: "/images/cloudguardian.png", // guarda una buena imagen ahí
        github: "https://github.com/iancamps90/CloudGuardian",
        demo: "", // si subes algún día, se añade
    },
    {
        title: "🧠 Planify (TFG)",
        description:
            "Agenda virtual multifuncional: hábitos, Pomodoro, diario, finanzas personales y planificación diaria. FullStack con Docker (frontend + backend + DB). Proyecto final de grado.",
        image: "/images/planify.png",
        github: "https://github.com/iancamps90/planify",
        demo: "", // o lo pones si despliegas
    },
    {
        title: "🦕 WebApp Parque Prehistoria",
        description:
            "Recorrido interactivo para niños con mapa, avatar y paradas con códigos QR que lanzan juegos educativos. Componente React puro con Tailwind, Genially y experiencia visual muy cuidada.",
        image: "/images/webapp-prehistoria.png",
        github: "https://github.com/iancamps90/WebApp-Prehistoria",
        demo: "", // puedes poner GH Pages luego
    },
];

function ProjectsShowcase() {
    return (
        <section className="w-full">
            {projects.map((project, index) => (
                <motion.div
                    key={index}
                    className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gray-950 text-white px-8"
                    style={{
                        backgroundImage: `url(${project.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="bg-black bg-opacity-70 p-8 rounded-xl max-w-2xl text-center md:text-left">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">{project.title}</h2>
                        <p className="text-lg mb-6">{project.description}</p>
                        <div className="flex justify-center md:justify-start gap-4">
                            {project.github && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition"
                                >
                                    <FaGithub /> GitHub
                                </a>
                            )}
                            {project.demo && (
                                <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                                >
                                    <FaExternalLinkAlt /> Demo
                                </a>
                            )}
                        </div>
                    </div>
                </motion.div>
            ))}
        </section>
    );
}

export default ProjectsShowcase;
