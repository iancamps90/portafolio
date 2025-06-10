import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectSlide from "../components/ProjectSlide";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const projects = [
    {
        title: "🛡️ CloudGuardian",
        description:
            "Plataforma de ciberseguridad desplegada en servidor Linux. Bloqueo automático de IPs maliciosas, rutas protegidas, subdominios con reverse proxy (Caddy) y monitorización en tiempo real. Proyecto con infraestructura real y enfoque DevSecOps.",
        image: "/img/cloudguardian-bg.png",
        github: "https://github.com/iancamps90/CloudGuardian",
    },
    {
        title: "🧠 Planify (TFG)",
        description:
            "Agenda digital multifuncional con hábitos, journal, temporizador Pomodoro y gestión financiera personal. FullStack: Frontend en React, Backend en Django y PostgreSQL. Contenedores Docker con redes y volúmenes personalizados.",
        image: "/img/planify-bg.jpg",
        github: "https://github.com/iancamps90/planify",
    },
    {
        title: "🦕 WebApp Parque Prehistoria",
        description:
            "Web app educativa con recorrido interactivo para niños. Mapa + QR en cada parada con actividades Genially, guía animada y puntuación local. Frontend en React con diseño visual y lógica personalizada.",
        image: "/img/webapp-prehistoria.png",
        github: "https://github.com/iancamps90/WebApp-Prehistoria",
    },
    {
        title: "🔍 API Pokémon",
        description:
            "Aplicación SPA que consume la PokéAPI con sistema de búsqueda, filtros y diseño personalizado. Buen uso de estados, asincronía, carga dinámica y organización por componentes.",
        image: "/img/pokemon2.png",
        github: "https://github.com/iancamps90/proyecto-api-pokemon",
    },
];

const variants = {
    enter: (direction) => ({
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
    }),
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1,
    },
    exit: (direction) => ({
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
    }),
};

function ProjectsCarousel() {
    const [[page, direction], setPage] = useState([0, 0]);

    const paginate = (newDirection) => {
        setPage([(page + newDirection + projects.length) % projects.length, newDirection]);
    };

    const project = projects[page];

    return (
        <section className="relative w-full h-screen overflow-hidden">
            <AnimatePresence initial={false} custom={direction}>
                <motion.div
                    key={page}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 },
                    }}
                    className="absolute w-full h-full"
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={(e, { offset }) => {
                        const swipe = Math.abs(offset.x);
                        if (swipe > 50) paginate(offset.x > 0 ? -1 : 1);
                    }}
                >
                    <ProjectSlide project={project} />
                </motion.div>
            </AnimatePresence>

            {/* Botones de navegación */}
            <div className="absolute top-1/2 right-4 z-10">
                <button onClick={() => paginate(1)} className="bg-black/60 p-2 rounded-full text-white hover:bg-white/20">
                    <FaArrowRight size={24} />
                </button>
            </div>
            <div className="absolute top-1/2 left-4 z-10">
                <button onClick={() => paginate(-1)} className="bg-black/60 p-2 rounded-full text-white hover:bg-white/20">
                    <FaArrowLeft size={24} />
                </button>
            </div>
        </section>
    );
}

export default ProjectsCarousel;
