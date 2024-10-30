import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        title: "Study Platform",
        description: "A full-featured study platform built with React and Node.js",
        image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800",
        github: "https://github.com",
        demo: "https://gostudypal.com",
        tags: ["React", "Node.js", "Firebase", "OpenAI"]
    },
    {
        title: "Job Matcher",
        description: "A job matching algorithm built with python and OpenAI",
        image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4",
        github: "https://github.com/iZyns/Job-Scraper",
        demo: "",
        tags: ["Python", "Streamlit", "OpenAI", "Selenium"]
    },
    {
        title: "Portfolio Website",
        description: "A newly updated 3D portfolio website",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800",
        github: "https://github.com",
        demo: "https://demo.com",
        tags: ["Three.js", "React", "Tailwind"]
    }
];

export default function Projects() {
    return (
        <section className="py-20 bg-gray-800" id="projects">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-6xl mx-auto"
                >
                    <h2 className="text-4xl font-bold text-white text-center mb-12">Latest Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className="bg-gray-700 rounded-lg overflow-hidden"
                            >
                                <div className="relative h-48">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                                        <div className="flex space-x-4">
                                            <a
                                                href={project.github}
                                                className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <Github className="w-6 h-6 text-white" />
                                            </a>
                                            {project.demo && (
                                                <a
                                                    href={project.demo}
                                                    className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <ExternalLink className="w-6 h-6 text-white" />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                                    <p className="text-gray-300 mb-4">{project.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag, tagIndex) => (
                                            <span
                                                key={tagIndex}
                                                className="px-3 py-1 bg-gray-600 text-sm text-gray-200 rounded-full"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex justify-center mt-12"
                    >
                        <a
                            href="https://github.com/izyns"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-6 py-3 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors"
                        >
                            <Github className="w-5 h-5" />
                            <span>See More Projects</span>
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}