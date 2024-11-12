import { motion, useScroll, useTransform } from 'framer-motion';
import { Code2, Server, AppWindow, Brain, Database, Cloud, Cpu, Globe, Sparkles } from 'lucide-react';
import { useState, useRef } from 'react';

const skills = {
    frontend: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
    backend: ['Node.js', 'Express', 'MongoDB', 'REST APIs'],
    languages: ['C++', 'Java', 'JavaScript', 'Python', 'SQL'],
    other: ['Git', 'Docker', 'OpenCV', 'PyTorch', 'Figma']
};

export default function About() {
    const [activeTab, setActiveTab] = useState('education');
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100]);
    const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

    const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

    return (
        <section className="py-20 bg-gradient-to-b from-gray-900 to-[#030014]" id="about">
            <motion.div
                ref={containerRef}
                style={{ opacity, y, scale }}
                className="container mx-auto px-4"
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-5xl mx-auto"
                >
                    <div className="text-center mb-16">
                        <motion.h2
                            className="text-5xl font-bold text-white mb-4"
                            whileHover={{ scale: 1.05 }}
                        >
                            About Me
                        </motion.h2>
                        <div className="h-1 w-20 bg-indigo-500/50 mx-auto rounded-full" />
                    </div>

                    <div className="bg-gray-800/50 backdrop-blur-xl p-8 rounded-2xl shadow-2xl border border-gray-700/50">
                        <div className="flex flex-col md:flex-row gap-8 items-center mb-12">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="relative group"
                            >
                                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full blur opacity-50 group-hover:opacity-75 transition duration-200" />
                                <img
                                    src="/file.jpg"
                                    alt="Profile"
                                    className="w-40 h-40 rounded-full object-cover object-top relative ring-4 ring-gray-800"
                                />
                            </motion.div>
                            <div className="flex-1">
                                <motion.p
                                    className="text-gray-300 text-lg leading-relaxed"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    I'm a <span className="text-indigo-400 font-semibold">Computer Science & Software Engineering graduate</span> from the University of Washington, passionate about building innovative web applications. I specialize in backend development, with hands-on experience in software engineering through my internship at IndoCyber Global Teknologi.
                                    From developing study platforms to AI-integrated job matching systems, I combine technical expertise with creative problem-solving to build impactful applications.
                                </motion.p>
                            </div>
                        </div>

                        {/* Enhanced Tab Navigation */}
                        <div className="mb-12">
                            <div className="flex justify-center space-x-4 mb-8">
                                {['education', 'experience'].map((tab) => (
                                    <motion.button
                                        key={tab}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={`px-8 py-3 rounded-xl font-medium transition-all duration-300 relative group ${activeTab === tab
                                            ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white'
                                            : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50'
                                            }`}
                                        onClick={() => setActiveTab(tab)}
                                    >
                                        <span className="relative z-10 capitalize">{tab}</span>
                                        {activeTab === tab && (
                                            <motion.div
                                                layoutId="activeTab"
                                                className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                                                initial={false}
                                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                            />
                                        )}
                                    </motion.button>
                                ))}
                            </div>

                            {/* Tab Content */}
                            <div className="text-left">
                                {activeTab === 'education' && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.4 }}
                                        className="space-y-6"
                                    >
                                        <motion.div
                                            className="bg-gray-700/30 backdrop-blur-sm p-6 rounded-xl border border-gray-600/30 hover:border-gray-500/50 transition-all duration-300"
                                            whileHover={{ scale: 1.02, y: -5 }}
                                        >
                                            <div className="flex items-center gap-4 mb-2">
                                                <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse" />
                                                <h3 className="text-xl font-semibold text-white">
                                                    Bachelor of Computer Science & Software Engineering
                                                </h3>
                                            </div>
                                            <p className="text-indigo-400 mb-2 pl-6">University of Washington</p>
                                            <p className="text-gray-300 pl-6 flex items-center gap-2">
                                                <span className="w-1 h-1 bg-gray-500 rounded-full" />
                                                2022 - 2024
                                            </p>
                                        </motion.div>

                                        <motion.div
                                            className="bg-gray-700/30 backdrop-blur-sm p-6 rounded-xl border border-gray-600/30 hover:border-gray-500/50 transition-all duration-300"
                                            whileHover={{ scale: 1.02, y: -5 }}
                                        >
                                            <div className="flex items-center gap-4 mb-2">
                                                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                                                <h3 className="text-xl font-semibold text-white">
                                                    Associate of Science
                                                </h3>
                                            </div>
                                            <p className="text-indigo-400 mb-2 pl-6">Edmonds College</p>
                                            <p className="text-gray-300 pl-6 flex items-center gap-2">
                                                <span className="w-1 h-1 bg-gray-500 rounded-full" />
                                                2020 - 2022
                                            </p>
                                        </motion.div>
                                    </motion.div>
                                )}

                                {activeTab === 'experience' && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.4 }}
                                        className="space-y-6"
                                    >
                                        <motion.div
                                            className="bg-gray-700/30 backdrop-blur-sm p-6 rounded-xl border border-gray-600/30 hover:border-gray-500/50 transition-all duration-300"
                                            whileHover={{ scale: 1.02, y: -5 }}
                                        >
                                            <div className="flex items-center gap-4 mb-2">
                                                <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse" />
                                                <h3 className="text-xl font-semibold text-white">
                                                    Software Engineer Intern
                                                </h3>
                                            </div>
                                            <p className="text-indigo-400 mb-2 pl-6">Indocyber Global Teknologi</p>
                                            <p className="text-gray-300 pl-6 flex items-center gap-2">
                                                <span className="w-1 h-1 bg-gray-500 rounded-full" />
                                                2024
                                            </p>
                                            <p className="text-gray-300 mt-3 pl-6 leading-relaxed">
                                                Collaborated with a team of 15 developers to build and develop a financial document processing software.
                                            </p>
                                        </motion.div>

                                        <motion.div
                                            className="bg-gray-700/30 backdrop-blur-sm p-6 rounded-xl border border-gray-600/30 hover:border-gray-500/50 transition-all duration-300"
                                            whileHover={{ scale: 1.02, y: -5 }}
                                        >
                                            <div className="flex items-center gap-4 mb-2">
                                                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                                                <h3 className="text-xl font-semibold text-white">
                                                    Hackathon
                                                </h3>
                                            </div>
                                            <p className="text-indigo-400 mb-2 pl-6">UCLA</p>
                                            <p className="text-gray-300 pl-6 flex items-center gap-2">
                                                <span className="w-1 h-1 bg-gray-500 rounded-full" />
                                                2023
                                            </p>
                                            <p className="text-gray-300 mt-3 pl-6 leading-relaxed">
                                                Created a platform for global collaboration in education, including a virtual study environment with chatrooms, file/resource sharing, and project collaboration to make education accessible to everyone, regardless of location or socioeconomic status.
                                            </p>
                                        </motion.div>
                                    </motion.div>
                                )}
                            </div>
                        </div>

                        {/* Enhanced Skills Section */}
                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            {Object.entries(skills).map(([category, skillList], index) => (
                                <motion.div
                                    key={category}
                                    className="p-6 bg-gray-700/30 backdrop-blur-sm rounded-xl border border-gray-600/30 hover:border-gray-500/50 transition-all duration-300"
                                    whileHover={{ scale: 1.02, y: -5 }}
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        {category === 'frontend' && <AppWindow className="w-6 h-6 text-indigo-400" />}
                                        {category === 'backend' && <Server className="w-6 h-6 text-purple-400" />}
                                        {category === 'languages' && <Code2 className="w-6 h-6 text-pink-400" />}
                                        {category === 'other' && <Cpu className="w-6 h-6 text-blue-400" />}
                                        <h3 className="text-xl font-semibold text-white capitalize">{category}</h3>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {skillList.map((skill) => (
                                            <motion.span
                                                key={skill}
                                                className="px-3 py-1 bg-gray-800/50 rounded-full text-sm text-gray-300 hover:text-white hover:bg-gray-700/50 transition-all duration-300"
                                                whileHover={{ scale: 1.1 }}
                                                onHoverStart={() => setHoveredSkill(skill)}
                                                onHoverEnd={() => setHoveredSkill(null)}
                                            >
                                                {skill}
                                                {hoveredSkill === skill && (
                                                    <motion.span
                                                        className="absolute -inset-1 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur"
                                                        layoutId="skillHover"
                                                    />
                                                )}
                                            </motion.span>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
