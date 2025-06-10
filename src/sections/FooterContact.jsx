import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const FooterContact = () => {
    return (
        // Usamos la sección de Contacto como base, pero la hacemos el footer
        <footer
            id="contact" // Mantenemos el ID para la navegación
            className="min-h-screen flex flex-col justify-center items-center text-white text-center px-6 bg-gradient-to-t from-black via-indigo-950 to-gray-900" // ¡Añadimos el degradado!
        >
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex flex-col items-center" // Para centrar todo el contenido
            >
                {/* Título potente de Contacto */}
                <h2 className="text-5xl md:text-6xl font-bold mb-4">Conecta Conmigo</h2>
                <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10">
                    ¿Te ha molado el viaje? 🚀 Hablemos.
                </p>

                {/* Botones grandes y claros de Contacto */}
                <div className="flex flex-col md:flex-row gap-6 justify-center mb-16">
                    <a href="mailto:iancamps90@gmail.com" className="...">
                        <FaEnvelope /> iancamps90@gmail.com
                    </a>
                    <a href="https://www.linkedin.com/in/iancamps90" className="...">
                        <FaLinkedin /> LinkedIn
                    </a>
                    <a href="https://github.com/iancamps90" className="...">
                        <FaGithub /> GitHub
                    </a>
                </div>

                {/* Info del footer, más sutil */}
                <div className="border-t border-gray-700 pt-8 w-full max-w-4xl mx-auto">
                    <p className="text-md text-gray-400 mb-4">
                        Desarrollado con React, Tailwind y Framer Motion.
                    </p>
                    <p className="text-sm text-gray-600">
                        © {new Date().getFullYear()} Ian Camps · Inspired by Rockstar Games
                    </p>
                </div>
            </motion.div>
        </footer>
    );
};

export default FooterContact;