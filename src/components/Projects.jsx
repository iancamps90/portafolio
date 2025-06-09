// src/components/Projects.jsx
import React, { useState } from "react";


// Lista de proyectos
const projectsData = [
    {
        title: "CloudGuardian – Plataforma de Ciberseguridad",
        description: "Aplicación Full Stack desplegable con backend en Django que actúa como firewall inteligente. Detecta y bloquea IPs maliciosas, protege rutas sensibles, gestiona subdominios mediante proxy reverso con Caddy y se despliega en servidores cloud con Docker, systemd y dominio propio.",
        image: "img/cloudguardian.png", // ➕ Súbela a public/img/
        technologies: ["Django", "Python", "Docker", "Gunicorn", "Caddy", "PostgreSQL"],
        demoLink: "#", // No tiene demo pública aún
        codeLink: "https://github.com/iancamps90/CloudGuardian"
    },      
    {
        title: "Planify – Agenda Digital Multimódulo (TFG)",
        description: "Aplicación Full Stack contenedorizada que gestiona hábitos, tareas compartidas, finanzas personales, diario, objetivos y sincronización con Google Calendar. Desarrollada con arquitectura modular y despliegue en Docker (frontend, backend y BBDD).",
        image: "img/planify.png", // ➕ Súbela a public/img/
        technologies: ["React", "Vite", "Tailwind", "Django", "Docker", "PostgreSQL"],
        demoLink: "#", // Añádelo si decides subirla más adelante
        codeLink: "https://github.com/iancamps90/Planify"
    },      
    {
        title: "Web App Interactiva – Parque Prehistoria",
        description: "Aplicación frontend creada para una experiencia educativa en museos/parques. Guiada por avatares, integra códigos QR, juegos y curiosidades usando Genially en tiempo real. Desarrollada con React y CSS puro.",
        image: "img/prehistoria.png", // ➕ Súbela a public/img/
        technologies: ["React", "CSS", "JavaScript"],
        demoLink: "https://iancamps90.github.io/WebApp-Prehistoria", // Puedes subirla a GitHub Pages si no lo has hecho ya
        codeLink: "https://github.com/iancamps90/WebApp-Prehistoria"
    },
    {
        title: "Proyecto API Pokemon", // FALTA RESPONSIVE
        description: "Aplicación web desarrollada con React/vite, JavaScript, CSS, HTML.", 
        image: "img/pokemon2.png", 
        technologies: ["React, HTML", "CSS", "JavaScript"], 
        demoLink: "https://iancamps90.github.io/proyecto-api-pokemon/   ", 
        codeLink: "https://github.com/iancamps90/proyecto-api-pokemon" 
    },
    {
        title: "My Training App", 
        description: "Aplicación web con React/vite, JavaScript, CSS, HTML.", 
        image: "img/training1.png", 
        technologies: ["React, HTML", "CSS", "JavaScript"], // cambiar
        demoLink: "https://iancamps90.github.io/my-training-app/", 
        codeLink: "https://github.com/iancamps90/my-training-app" 
    },
    {
        title: "Blog", 
        description: "Aplicación Blog con Django, Python y Bootstrap.", // FALTA SUBIR HEREKU
        image: "img/blog.png", 
        technologies: ["Django", "Python", "Bootstrap"], 
        demoLink: "#", // cambiar
        codeLink: "https://github.com/iancamps90/curso-django" 
    },
    {
        title: "Planificador de dietas",
        description: "Aplicación planificador de dietas con React/vite, JavaScript, CSS, HTML.", 
        image: "img/dieta.png", 
        technologies: ["React, HTML", "CSS", "JavaScript"],
        demoLink: "https://iancamps90.github.io/planificador-dietas/", 
        codeLink: "https://github.com/iancamps90/planificador-dietas"
    },
    {
        title: "Ecommerce & To-Do List",
        description: "Aplicación E-commerce y lista de tareas con React/vite, JavaScript, CSS, HTML.",
        image: "img/tareas.png",
        technologies: ["React, HTML", "CSS", "JavaScript"],
        demoLink: "https://iancamps90.github.io/To-Do/",
        codeLink: "https://github.com/iancamps90/To-Do"
    },
    {
        title: "Portfolio certificaciones", 
        description: "Mi portafolio profesional con React y Vite.", // cambiar
        image: "img/certificados.png", // Asegúrate de que las imágenes estén en `public/img/`
        technologies: ["HTML", "CSS."], // cambiar
        demoLink: "https://iancamps90.github.io/portafolio-certificados/", 
        codeLink: "https://github.com/iancamps90/portafolio-certificados" 
    }
    // Puedes añadir más proyectos aquí
];

function Projects() {

    // Estado para filtrar proyectos
    const [filter, setFilter] = useState("Todos");

    // Filtrar proyectos antes del `.map()`
    const filteredProjects = projectsData.filter((project) =>
        filter === "Todos" || project.technologies.includes(filter)
    );

    return (
        <section id="projects" className="p-8 bg-gray-50 dark:bg-gray-800 dark:text-white">
            <h2 className="text-3xl font-bold mb-8 text-center">Proyectos</h2>

            {/* Botones de filtro Responsive */}
            <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-6">
                {["Todos", "React", "Django", "Tailwind", "JavaScript", "PostgreSQL"].map((tech) => (
                    <button
                        key={tech}
                        className={`px-3 py-1 rounded text-sm md:text-base transition-all ${filter === tech ? "bg-blue-600 text-white" : "bg-gray-300"}`}
                        onClick={() => setFilter(tech)}
                    >
                        {tech}
                    </button>
                ))}
            </div>

            {/* Grid de proyectos */}
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {filteredProjects.map((project, index) => (
                    <div
                        key={index}
                        className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
                    >
                        {/* Imagen del proyecto */}
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-40 object-cover"
                        />

                        {/* Contenido del proyecto */}
                        <div className="p-4">
                            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                            <p className="mb-2">{project.description}</p>
                            <p className="text-sm mb-4">
                                <strong>Tecnologías:</strong> {project.technologies.join(", ")}
                            </p>

                            {/* Botones */}
                            <div className="flex gap-2">
                                <a
                                    href={project.demoLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition-colors"
                                >
                                    🔗 Demo
                                </a>
                                <a
                                    href={project.codeLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-gray-600 text-white px-3 py-1 rounded hover:bg-gray-700 transition-colors"
                                >
                                    💻 Código
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;

