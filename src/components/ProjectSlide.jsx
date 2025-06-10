const ProjectSlide = ({ project }) => {
    return (
        <div
            className="w-full h-full flex items-center justify-center text-white p-8"
            style={{
                backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 60%), url(${project.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="max-w-2xl text-center">
                <h2 className="text-4xl md:text-6xl font-extrabold mb-4" style={{ fontFamily: 'Pricedown, sans-serif' }}>
                    {project.title}
                </h2>
                <p className="text-lg md:text-xl mb-8">{project.description}</p>
                <div className="flex justify-center gap-4">
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-white text-black px-4 py-2 rounded hover:bg-gray-300 transition"
                    >
                        GitHub
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectSlide;
  