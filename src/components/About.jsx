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
                        Soy un <span className="font-semibold text-blue-600 dark:text-blue-400">desarrollador web Full Stack en formación</span>,
                        apasionado por la creación de aplicaciones funcionales, innovadoras y visualmente atractivas.
                        Actualmente estoy cursando un FP de Desarrollo de Aplicaciones Web y
                        complementando mi aprendizaje con proyectos prácticos.
                    </p>

                    <p className="mb-4 text-lg">
                        Me motiva resolver desafíos tecnológicos a través de soluciones escalables
                        y optimizadas para mejorar la experiencia de los usuarios.
                        Mi experiencia previa como vigilante me ha dotado de habilidades clave
                        como la <span className="font-semibold">organización, resolución de problemas</span>
                        y <span className="font-semibold">atención al detalle</span>.
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

