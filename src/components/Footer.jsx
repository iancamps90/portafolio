// src/components/Footer.jsx
import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
    return (
        <footer className="bg-gray-100 dark:bg-gray-900 text-black dark:text-white py-6 mt-8">
            <div className="container mx-auto flex flex-col items-center space-y-4 text-center">

                {/* Navegación rápida */}
                <nav className="flex flex-wrap justify-center gap-4 text-lg">
                    <a href="#about" className="hover:text-blue-500">Sobre mí</a>
                    <a href="#skills" className="hover:text-blue-500">Habilidades</a>
                    <a href="#projects" className="hover:text-blue-500">Proyectos</a>
                    <a href="#contact" className="hover:text-blue-500">Contacto</a>
                </nav>

                {/* Redes sociales */}
                <div className="flex space-x-4">
                    <a href="https://github.com/iancamps90" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-gray-700">
                        <FaGithub />
                    </a>
                    <a href="https://linkedin.com/in/ian-camps" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-700">
                        <FaLinkedin />
                    </a>
                    <a href="mailto:iancamps90@gmail.com" className="text-2xl hover:text-red-500">
                        <FaEnvelope />
                    </a>
                </div>

                {/* Copyright */}
                <p className="text-sm text-gray-600 dark:text-gray-400">
                    © {new Date().getFullYear()} Ian Camps. Todos los derechos reservados.
                </p>
            </div>
        </footer>
    );
}

export default Footer;

