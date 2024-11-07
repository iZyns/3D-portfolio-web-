import { motion, useScroll, useTransform } from 'framer-motion';
import { ExternalLink, Github, Sparkles, Code2, Eye } from 'lucide-react';
import { useRef, useState } from 'react';

const projects = [
    {
        title: "Study Platform",
        description: "A full-featured study platform built with React and Node.js, featuring real-time collaboration, AI-powered study assistance, and interactive learning tools.",
        image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800",
        github: "https://github.com",
        demo: "https://gostudypal.com",
        tags: ["React", "Node.js", "Firebase", "OpenAI"],
        category: "Full Stack"
    },
    {
        title: "Job Matcher",
        description: "An intelligent job matching system that uses AI to analyze resumes and job descriptions, providing personalized job recommendations and application insights.",
        image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4",
        github: "https://github.com/iZyns/Job-Scraper",
        demo: "",
        tags: ["Python", "Streamlit", "OpenAI", "Selenium"],
        category: "AI"
    },
    {
        title: "Portfolio Website",
        description: "A modern 3D portfolio website showcasing interactive animations, Three.js integration, and responsive design principles.",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800",
        github: "https://github.com",
        demo: "https://demo.com",
        tags: ["Three.js", "React", "Tailwind"],
        category: "Full Stack"
    }
];

export default function Projects() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [hoveredProject, setHoveredProject] = useState<number | null>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <section className="py-20 bg-gradient-to-b from-gray-800 to-[#030014]" id="projects">
            <motion.div
                ref={containerRef}
                style={{ opacity }}
                className="container mx-auto px-4"
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-6xl mx-auto"
                >
                    <div className="text-center mb-16">
                        <motion.h2
                            className="text-5xl font-bold text-white mb-4"
                            whileHover={{ scale: 1.05 }}
                        >
                            Latest Projects
                        </motion.h2>
                        <div className="h-1 w-20 bg-indigo-500/50 mx-auto rounded-full mb-8" />
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Explore my recent projects showcasing web development, AI integration, and creative problem-solving.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className="group relative bg-gray-800/50 backdrop-blur-xl rounded-xl overflow-hidden border border-gray-700/50"
                                onMouseEnter={() => setHoveredProject(index)}
                                onMouseLeave={() => setHoveredProject(null)}
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"
                                        initial={false}
                                        animate={{
                                            opacity: hoveredProject === index ? 0.8 : 0.6
                                        }}
                                    />
                                    <motion.img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover"
                                        initial={false}
                                        animate={{
                                            scale: hoveredProject === index ? 1.1 : 1
                                        }}
                                        transition={{ duration: 0.4 }}
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                        {project.github && (
                                            <motion.a
                                                href={project.github}
                                                className="p-3 bg-gray-900/80 rounded-full hover:bg-gray-800 transition-colors"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                <Github className="w-6 h-6 text-white" />
                                            </motion.a>
                                        )}
                                        {project.demo && (
                                            <motion.a
                                                href={project.demo}
                                                className="p-3 bg-gray-900/80 rounded-full hover:bg-gray-800 transition-colors"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                <ExternalLink className="w-6 h-6 text-white" />
                                            </motion.a>
                                        )}
                                    </div>
                                    <div className="absolute top-4 right-4">
                                        <span className="px-3 py-1 bg-gray-900/90 text-white text-sm rounded-full border border-gray-700/50 shadow-lg backdrop-blur-sm">
                                            {project.category}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-white mb-2 flex items-center gap-2">
                                        {project.title}
                                        <Sparkles className="w-4 h-4 text-indigo-400" />
                                    </h3>
                                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag, tagIndex) => (
                                            <motion.span
                                                key={tagIndex}
                                                className="px-3 py-1 bg-gray-700/50 text-sm text-gray-300 rounded-full backdrop-blur-sm"
                                                whileHover={{ scale: 1.05 }}
                                            >
                                                {tag}
                                            </motion.span>
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
                        <motion.a
                            href="https://github.com/izyns"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-3 px-6 py-3 bg-indigo-500/10 text-indigo-300 rounded-xl hover:bg-indigo-500/20 transition-all duration-300 border border-indigo-500/20"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Github className="w-5 h-5" />
                            <span>View More Projects</span>
                            <motion.div
                                className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity"
                                whileHover={{
                                    boxShadow: '0 0 20px rgba(129, 140, 248, 0.5)',
                                }}
                            />
                        </motion.a>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
}