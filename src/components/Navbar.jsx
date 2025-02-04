// src/components/Navbar.jsx
import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";


function Navbar() {

    // funcion menu hamburguesa
    const [menuOpen, setMenuOpen] = useState(false);

    // funciones modo oscuro
    const [darkMode, setDarkMode] = useState(
        localStorage.getItem("darkMode") === "true"
    );

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("darkMode", darkMode);
    }, [darkMode]);


    return (
        <nav className="fixed top-0 left-0 w-full bg-gray-100 dark:bg-gray-900 dark:text-white p-4 shadow-md z-50">
            <div className="container mx-auto flex justify-between items-center">
            <div className="font-bold text-xl">Ian Camps</div>

            {/* Botón Hamburguesa en móviles */}
            <button
                className="md:hidden text-2xl"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                {menuOpen ? <FaTimes /> : <FaBars />}
            </button>

            {/* Menú Responsive */}
                <ul className={`absolute md:static top-16 left-0 w-full bg-gray-100 dark:bg-gray-900 md:flex md:items-center md:space-x-8 p-4 md:p-0 transition-all ${menuOpen ? "block" : "hidden"} md:flex`}>
                <li><a href="#about" className="hover:text-blue-600">Sobre mí</a></li>
                <li><a href="#skills" className="hover:text-blue-600">Habilidades</a></li>
                <li><a href="#projects" className="hover:text-blue-600">Proyectos</a></li>
                <li><a href="#contact" className="hover:text-blue-600">Contacto</a></li>
            </ul>

            {/* Botón para cambiar modo claro/oscuro  */}
            <button
                onClick={() => setDarkMode(!darkMode)}
                className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded"
            >
                {darkMode ? "☀️ Modo Claro" : "🌙 Modo Oscuro"}
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
