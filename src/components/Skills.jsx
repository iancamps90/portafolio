// src/components/Skills.jsx
import React from "react";
import { FaReact, FaPython, FaPhp, FaDatabase, FaGitAlt, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiDjango, SiPostgresql, SiBootstrap, SiLaravel, SiJavascript, SiCss3, SiHtml5, SiExpress, SiDocker, SiFigma, SiTrello, SiMiro  } from "react-icons/si";

function Skills() {
    return (
        <section id="skills" className="p-8 bg-gray-50 dark:bg-gray-800 dark:text-white">
            <h2 className="text-3xl font-bold mb-6 text-center">Habilidades</h2>

            <div className="grid md:grid-cols-2 gap-8">
                
                {/* FRONTEND */}
                <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-3">Frontend</h3>
                    <ul className="flex flex-wrap gap-4">
                        <li className="flex items-center gap-2 text-lg"><SiJavascript className="text-yellow-500" /> JavaScript</li>
                        <li className="flex items-center gap-2 text-lg"><FaReact className="text-blue-500" /> React.js</li>
                        <li className="flex items-center gap-2 text-lg"><SiTailwindcss className="text-teal-500" /> Tailwind</li>
                        <li className="flex items-center gap-2 text-lg"><SiBootstrap className="text-purple-600" /> Bootstrap</li>
                        <li className="flex items-center gap-2 text-lg"><SiCss3 className="text-blue-600" /> CSS</li>
                        <li className="flex items-center gap-2 text-lg"><SiHtml5 className="text-orange-500" /> HTML</li>
                    </ul>
                </div>

                {/* BACKEND */}
                <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-3">Backend</h3>
                    <ul className="flex flex-wrap gap-4">
                        <li className="flex items-center gap-2 text-lg"><FaPython className="text-blue-400" /> Python</li>
                        <li className="flex items-center gap-2 text-lg"><SiDjango className="text-green-500" /> Django</li>
                        <li className="flex items-center gap-2 text-lg"><FaPhp className="text-blue-700" /> PHP</li>
                        <li className="flex items-center gap-2 text-lg"><SiLaravel className="text-red-600" /> Laravel</li>
                        <li className="flex items-center gap-2 text-lg"><FaNodeJs className="text-green-500" /> Node.js</li>
                        <li className="flex items-center gap-2 text-lg"><SiExpress className="text-gray-500" /> Express.js</li>
                        <li className="flex items-center gap-2 text-lg"> Web Scraping</li>
                    </ul>
                </div>

                {/* BASES DE DATOS */}
                <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-3">Bases de Datos</h3>
                    <ul className="flex flex-wrap gap-4">
                        <li className="flex items-center gap-2 text-lg"><FaDatabase className="text-gray-700" /> MySQL</li>
                        <li className="flex items-center gap-2 text-lg"><SiPostgresql className="text-blue-500" /> PostgreSQL</li>
                    </ul>
                </div>

                {/* HERRAMIENTAS */}
                <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-3">Herramientas</h3>
                    <ul className="flex flex-wrap gap-4">
                        <li className="flex items-center gap-2 text-lg"><FaGitAlt className="text-orange-500" /> Git / GitHub</li>
                        <li className="flex items-center gap-2 text-lg"><SiDocker className="text-blue-500" /> Docker</li>
                        <li className="flex items-center gap-2 text-lg"><SiFigma className="text-pink-500" /> Figma</li>
                        <li className="flex items-center gap-2 text-lg"><SiMiro className="text-yellow-600" /> Miro</li>
                        <li className="flex items-center gap-2 text-lg"><SiTrello className="text-blue-400" /> Trello</li>
                        <li className="flex items-center gap-2 text-lg">APIs REST</li>
                    </ul>
                </div>

                {/* HABILIDADES BLANDAS */}
                <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-3">Habilidades Blandas</h3>
                    <ul className="flex flex-wrap gap-4">
                        <li className="text-lg">✅ Liderazgo de proyectos</li>
                        <li className="text-lg">✅ Trabajo en equipo</li>
                        <li className="text-lg">✅ Comunicación proactiva</li>
                        <li className="text-lg">✅ Organización y gestión del tiempo</li>
                        <li className="text-lg">✅ Resolución de problemas</li>
                    </ul>
                </div>


            </div>
        </section>
    );
}

export default Skills;

