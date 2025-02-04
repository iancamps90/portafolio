// src/components/Navbar.jsx
import React from "react";

function Navbar() {
    return (
        <nav className="flex justify-between items-center bg-gray-100 p-4">
            <div className="font-bold text-xl">Ian Camps</div>
            <ul className="flex gap-4">
                <li>
                    <a href="#about" className="hover:text-blue-600">Sobre mí</a>
                </li>
                <li>
                    <a href="#skills" className="hover:text-blue-600">Habilidades</a>
                </li>
                <li>
                    <a href="#projects" className="hover:text-blue-600">Proyectos</a>
                </li>
                <li>
                    <a href="#contact" className="hover:text-blue-600">Contacto</a>
                </li>
            </ul>
            {/* Botón para cambiar modo claro/oscuro (lo implementaremos luego) */}
        </nav>
    );
}

export default Navbar;
