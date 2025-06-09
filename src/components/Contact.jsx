// src/components/Contact.jsx
import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
    // Definir los estados correctamente
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [successMessage, setSuccessMessage] = useState(""); // AÑADIDO
    const [errorMessage, setErrorMessage] = useState(""); // AÑADIDO

    useEffect(() => {
        emailjs.init("l-W8xiK-ARvbLCp54"); // Agrega tu clave pública de EmailJS aquí
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.message) {
            setErrorMessage("❌ Todos los campos son obligatorios.");
            toast.error("❌ Todos los campos son obligatorios.");
            return;
        }

        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message
        };

        emailjs.send(
            "service_werf5oo",  // Reemplaza con tu Service ID
            "template_l9ynfpt", // Reemplaza con tu Template ID
            templateParams,
            "l-W8xiK-ARvbLCp54" // Reemplaza con tu Public Key
        )
            .then((response) => {
                console.log("Éxito:", response);
                setSuccessMessage("✅ ¡Mensaje enviado con éxito!");
                setErrorMessage(""); // Resetea error en caso de que haya habido uno
                toast.success("✅ ¡Mensaje enviado con éxito!");
                setFormData({ name: "", email: "", message: "" });
            })
            .catch((error) => {
                console.error("Error al enviar el mensaje:", error);
                setErrorMessage("❌ Hubo un error al enviar el mensaje.");
                toast.error("❌ Hubo un error al enviar el mensaje.");
            });
    };

    return (
        <section id="contact" className="p-8 bg-gray-50 dark:bg-gray-800 dark:text-white">
            <h2 className="text-3xl font-bold mb-4 text-center">Contacto</h2>
            <p className="mb-4 text-center">
                ¿Tienes una idea o un proyecto? ¡Hablemos! Envíame un mensaje y te responderé lo antes posible.
            </p>

            {/* Formulario */}
            <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
                <label className="block mb-2 font-semibold">Nombre</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Tu nombre"
                />

                <label className="block mb-2 font-semibold">Email</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="tuemail@example.com"
                />

                <label className="block mb-2 font-semibold">Mensaje</label>
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Escribe tu mensaje"
                    rows="4"
                ></textarea>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                >
                    ✉️ Enviar Mensaje
                </button>

                {/* Mensajes de éxito/error */}
                {successMessage && <p className="text-green-500 mt-3">{successMessage}</p>}
                {errorMessage && <p className="text-red-500 mt-3">{errorMessage}</p>}
            </form>

            

            {/* ToastContainer para mostrar notificaciones */}
            <ToastContainer position="bottom-right" autoClose={3000} />
        </section>
    );
}

export default Contact;

