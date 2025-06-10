import { motion } from "framer-motion";

function AboutTimeline() {
    const timeline = [
        {
            title: "💡 Inicios en desarrollo web",
            text: "Comencé mi formación en Desarrollo de Aplicaciones Web (DAW), centrado en tecnologías como HTML, CSS, JS y PHP.",
        },
        {
            title: "🚀 Prácticas profesionales",
            text: "Durante mis prácticas lideré proyectos reales como CloudGuardian (ciberseguridad), Planify (TFG) y una web educativa para un parque interactivo.",
        },
        {
            title: "⚙️ Back & DevOps",
            text: "He trabajado con Django, Docker, servidores en la nube, despliegues con Gunicorn y Caddy, y GitHub Actions.",
        },
        {
            title: "🎨 Frontend & Diseño",
            text: "Apasionado por React, Vite, Tailwind y el diseño UI. Domino herramientas como Figma, Trello y Miro para prototipado y gestión.",
        },
    ];

    return (
        <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 to-indigo-950 px-6 py-16 text-center">
            <motion.h2
                className="text-3xl md:text-5xl font-bold mb-10"
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                Mi recorrido
            </motion.h2>

            <div className="flex flex-col gap-8 max-w-3xl">
                {timeline.map((item, index) => (
                    <motion.div
                        key={index}
                        className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border-l-4 border-blue-600 text-left"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                    >
                        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                        <p className="text-md">{item.text}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

export default AboutTimeline;
