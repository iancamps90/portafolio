// src/components/About.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function About() {
    return (
        <section id="about" className="p-8 bg-white dark:bg-gray-900 text-black dark:text-white">
            {/* Título con animación */}
            <motion.h2
                className="text-3xl font-bold mb-6 text-center"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                Sobre Mí
            </motion.h2>

            {/* Contenedor principal con imagen y texto */}
            <motion.div
                className="flex flex-col md:flex-row items-center gap-8 max-w-4xl mx-auto"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
            >
                {/* Imagen de perfil */}
                <motion.img
                    src="img/ian-camps.jpg"
                    alt="Ian Camps"
                    className="w-48 h-48 object-cover rounded-full shadow-lg border-4 border-blue-600"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                />

                {/* Descripción */}
                <div className="text-center md:text-left">
                    <p className="mb-4 text-lg">
                        Soy <span className="font-semibold text-blue-600 dark:text-blue-400">Ian Camps</span>, desarrollador web Full Stack con experiencia práctica en proyectos reales durante mis prácticas de FP de Desarrollo de Aplicaciones Web. Me apasiona crear soluciones modernas, funcionales y seguras, con enfoque en rendimiento, experiencia de usuario y despliegue profesional.
                    </p>

                    <p className="mb-4 text-lg">
                        He liderado el desarrollo de <strong>CloudGuardian</strong>, una plataforma de ciberseguridad desplegada en un servidor cloud con <strong>Docker, Gunicorn, Caddy, systemd</strong> y dominio propio. El sistema actúa como firewall inteligente, protege rutas sensibles, bloquea IPs maliciosas y realiza proxy seguro hacia subdominios protegidos.
                    </p>

                    <p className="mb-4 text-lg">
                        Como TFG he desarrollado <strong>Planify</strong>, una agenda virtual 360º con gestión de hábitos, finanzas, tareas compartidas, sincronización con Google Calendar y módulos avanzados de productividad. La aplicación está construida como solución contenedorizada con <strong>Docker Compose (frontend, backend y base de datos)</strong> y preparada para entornos productivos.
                    </p>

                    <p className="mb-4 text-lg">
                        Además, he participado en la creación de una <strong>web app educativa para un parque de la prehistoria</strong>, desarrollada con React y CSS puro. La aplicación guía al usuario mediante un recorrido interactivo con paradas, códigos QR y actividades de Genially integradas en tiempo real.
                    </p>

                    <p className="mb-4 text-lg">
                        Domino tecnologías como <strong>React, Vite, Tailwind, Django, PostgreSQL, Web Scraping con Selenium y BeautifulSoup</strong>, así como herramientas de trabajo profesional como <strong>Docker, GitHub Actions, Trello, Figma, Miro</strong> y despliegues en servidores Linux con automatización desde Git.
                    </p>

                    <p className="mb-4 text-lg">
                        Me destaco por mi <strong>liderazgo en proyectos, autonomía, capacidad de organización</strong> y compromiso real con el desarrollo profesional. Cada proyecto es una oportunidad para aprender, optimizar y entregar calidad real.
                    </p>




                    {/* Enlaces a GitHub y LinkedIn */}
                    <div className="flex justify-center md:justify-start gap-4 mt-4">
                        <a
                            href="https://github.com/iancamps90"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-2xl hover:text-gray-700 dark:hover:text-gray-300 transition-all"
                        >
                            <FaGithub />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/ian-camps-gomez-1a60a9126"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-2xl hover:text-blue-700 transition-all"
                        >
                            <FaLinkedin />
                        </a>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}

export default About;

