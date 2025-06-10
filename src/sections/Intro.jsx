import { motion } from "framer-motion";

const Intro = () => {
    return (
        <section className="w-full h-screen bg-cover bg-center relative bg-no-repeat" >
            <video autoPlay loop muted className="absolute z-[-1] w-full h-full object-cover">
                <source src="/video/intro.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center text-center px-4">
                <motion.h1
                    className="text-5xl md:text-7xl font-extrabold text-white tracking-tight"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Ian Camps
                </motion.h1>

                <motion.p
                    className="mt-6 text-xl md:text-2xl text-gray-300 max-w-2xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                >
                    Web Developer  · Full Stack · 
                </motion.p>

                <a
                    href="/IAN_CAMPS_2025.pdf"
                    download
                    className="mt-4 px-5 py-2 bg-white text-black rounded hover:bg-gray-300 transition"
                >
                    Descargar CV
                </a>


                <motion.a
                    href="#about"
                    className="mt-10 inline-block px-6 py-3 bg-white text-black font-semibold rounded-lg shadow-md hover:bg-gray-300 transition"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2, duration: 1 }}
                >
                    Explorar Historia →
                </motion.a>
            </div>
        </section>
    );
};

export default Intro;
