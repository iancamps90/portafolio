// src/components/Hero.jsx
import React from "react";

function Hero() {
    return (
        <section
            id="hero"
            className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-gray-800 dark:via-gray-900 dark:to-black text-white px-6 text-center"
        >
            
            {/* Imagen Responsiva */}
            <img
                src="img/ian-camps.jpg"
                alt="Ian Camps"
                className="w-28 h-28 md:w-40 md:h-40 rounded-full shadow-lg border-4 border-blue-600 mb-4"
            />

            {/* Presentación */}
            <h1 className="text-3xl md:text-5xl font-bold">
                ¡Hola, soy <span className="text-blue-600 dark:text-blue-400">Ian Camps</span>!
            </h1>
            <p className="text-lg md:text-xl text-center max-w-2xl mt-2">
                Desarrollador Web Full Stack en formación, con pasión por crear aplicaciones funcionales y atractivas.
            </p>

            {/* Botones Responsivos */}
            <div className="mt-6 flex flex-col md:flex-row gap-4">
                <a
                    href="#projects"
                    className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition-all"
                >
                    🚀 Ver Proyectos
                </a>
                <a
                    href="#contact"
                    className="bg-gray-600 text-white px-5 py-2 rounded-lg hover:bg-gray-700 transition-all"
                >
                    ✉️ Contacto
                </a>

                <a
                    href={`${import.meta.env.BASE_URL}IAN_CAMPS_2025.pdf`}
                    download="IAN_CAMPS_2025.pdf"
                    className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition-all"
                >
                    📄 Descargar CV
                </a>
            </div>
        </section>
    );
}

export default Hero;

