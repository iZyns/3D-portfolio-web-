import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, Stars, Float, MeshDistortMaterial, GradientTexture, Sparkles, Text3D, Center } from '@react-three/drei';
import { Github, Linkedin, Mail, MousePointer2 } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Group, Mesh, BufferGeometry, Material, Vector3 } from 'three';
import { NormalBufferAttributes } from 'three';
import * as THREE from 'three';

function Scene() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const mainSphereRef = useRef<Mesh<BufferGeometry<NormalBufferAttributes>, Material | Material[]>>(null);
    const groupRef = useRef<Group>(null);
    const [hovered, setHovered] = useState(false);

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            setMousePosition({
                x: (event.clientX / window.innerWidth) * 2 - 1,
                y: -(event.clientY / window.innerHeight) * 2 + 1
            });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const lightX = mousePosition.x * 10;
    const lightY = mousePosition.y * 10;

    // Animation values
    const pulseScale = hovered ? 1.1 : 1;
    const distortionSpeed = hovered ? 4 : 2;
    const distortionIntensity = hovered ?
        0.4 + Math.abs(mousePosition.x) * 0.3 :
        0.3 + Math.abs(mousePosition.x) * 0.2;

    return (
        <>
            <color attach="background" args={['#030014']} />
            <fog attach="fog" args={['#030014', 5, 25]} />

            {/* Enhanced Lighting */}
            <ambientLight intensity={0.2} />
            <pointLight position={[lightX, lightY, 10]} intensity={2} color="#818cf8" />
            <pointLight position={[-lightX, -lightY, -10]} intensity={1} color="#c084fc" />
            <spotLight
                position={[5, 5, 5]}
                angle={0.15}
                penumbra={1}
                intensity={0.5}
                color="#f472b6"
            />

            <group ref={groupRef}>
                <Float speed={2} rotationIntensity={2} floatIntensity={1}>
                    <Sphere
                        ref={mainSphereRef}
                        args={[1.2, 64, 64]}
                        position={[0, 0, 0]}
                        onPointerOver={() => setHovered(true)}
                        onPointerOut={() => setHovered(false)}
                        scale={pulseScale}
                    >
                        <MeshDistortMaterial
                            color="#4338ca"
                            attach="material"
                            distort={distortionIntensity}
                            speed={distortionSpeed}
                            roughness={0.4}
                            metalness={0.8}
                            wireframe={false}
                        >
                            <GradientTexture
                                stops={[0, 0.3, 0.6, 1]}
                                colors={['#818cf8', '#c084fc', '#f472b6', '#818cf8']}
                                size={1024}
                            />
                        </MeshDistortMaterial>
                    </Sphere>
                </Float>

                {/* Enhanced Orbital Spheres */}
                {[0, 120, 240].map((angle, i) => (
                    <group key={i} rotation={[Math.PI / 6, 0, (angle * Math.PI) / 180]}>
                        <Float
                            speed={4 + i}
                            rotationIntensity={2}
                            floatIntensity={2}
                            position={[2.5, 0, 0]}
                        >
                            <Sphere args={[0.15, 32, 32]}>
                                <meshPhongMaterial>
                                    <GradientTexture
                                        stops={[0, 0.5, 1]}
                                        colors={['#818cf8', '#c084fc', '#f472b6']}
                                        size={1024}
                                    />
                                </meshPhongMaterial>
                            </Sphere>
                        </Float>
                        <mesh>
                            <ringGeometry args={[2.4, 2.45, 64]} />
                            <meshBasicMaterial
                                color="#818cf8"
                                transparent
                                opacity={0.15}
                                side={THREE.DoubleSide}
                            />
                        </mesh>
                    </group>
                ))}

                {/* Enhanced Particles */}
                <Sparkles
                    count={200}
                    scale={12}
                    size={2}
                    speed={0.5}
                    color="#c084fc"
                    opacity={0.5}
                />
                <Sparkles
                    count={100}
                    scale={10}
                    size={1}
                    speed={0.2}
                    color="#f472b6"
                    opacity={0.3}
                />
                <Stars
                    radius={50}
                    depth={50}
                    count={5000}
                    factor={4}
                    saturation={1}
                    fade
                    speed={1.5}
                />
            </group>

            <OrbitControls
                enableZoom={false}
                autoRotate
                autoRotateSpeed={0.5}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 2}
            />
        </>
    );
}

export default function Hero() {
    const [isLoaded, setIsLoaded] = useState(false);
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <section className="relative h-screen w-full overflow-hidden">
            <div className="absolute inset-0">
                <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
                    <Scene />
                </Canvas>
            </div>

            {/* Enhanced Background Gradient */}
            <div className="absolute inset-0 bg-gradient-radial from-transparent via-gray-900/50 to-gray-900">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent animate-pulse" />
            </div>

            <motion.div
                style={{ y, opacity }}
                className="absolute inset-0 flex items-center justify-center"
            >
                <div className="text-center z-10 space-y-8 px-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="space-y-4 relative"
                    >
                        {/* Enhanced Text Container */}
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg filter blur-xl opacity-20 animate-pulse" />

                        <motion.div
                            initial={{ y: 20 }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <motion.div
                                animate={{
                                    background: [
                                        'linear-gradient(to right, #818cf8, #c084fc)',
                                        'linear-gradient(to right, #c084fc, #f472b6)',
                                        'linear-gradient(to right, #f472b6, #818cf8)',
                                    ],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                }}
                                className="absolute inset-0 blur-3xl opacity-30"
                            />
                            <motion.h2
                                className="text-xl md:text-2xl font-light text-indigo-300 tracking-wider"
                                whileHover={{ scale: 1.05 }}
                            >
                                Hello, I'm
                            </motion.h2>
                            <motion.h1
                                className="text-6xl md:text-8xl font-bold gradient-text tracking-tight"
                                whileHover={{ scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                Vincent Wirawan
                            </motion.h1>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="space-y-4"
                    >
                        <motion.p
                            className="text-2xl md:text-3xl text-gray-200 font-light tracking-wide"
                            whileHover={{ scale: 1.05 }}
                        >
                            Software Engineer
                        </motion.p>
                        <motion.p
                            className="text-gray-400 max-w-2xl mx-auto text-lg"
                            whileHover={{ scale: 1.05 }}
                        >
                            Crafting intelligent digital experiences with code and technology
                        </motion.p>
                    </motion.div>

                    {/* Enhanced Social Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="flex space-x-6 justify-center"
                    >
                        {[
                            { icon: Github, href: 'https://github.com/izyns', label: 'GitHub' },
                            { icon: Linkedin, href: 'https://linkedin.com/in/vnw', label: 'LinkedIn' },
                            { icon: Mail, href: 'mailto:vincentnw24@gmail.com', label: 'Email' }
                        ].map((item, index) => (
                            <motion.a
                                key={index}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={item.label}
                                whileHover={{ scale: 1.1, y: -4 }}
                                whileTap={{ scale: 0.95 }}
                                className="relative p-4 bg-white/5 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20 group"
                            >
                                <item.icon size={24} className="text-white group-hover:text-indigo-300 transition-colors relative z-10" />
                                <motion.div
                                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity"
                                    whileHover={{
                                        boxShadow: '0 0 20px rgba(129, 140, 248, 0.5)',
                                    }}
                                />
                            </motion.a>
                        ))}
                    </motion.div>

                    {/* Enhanced Scroll Indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isLoaded ? 1 : 0 }}
                        transition={{ duration: 1, delay: 1.2 }}
                        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2"
                    >
                        <motion.span
                            className="text-sm text-gray-400"
                            animate={{
                                opacity: [0.5, 1, 0.5],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        >
                            Scroll to explore
                        </motion.span>
                        <motion.div
                            animate={{
                                y: [0, 8, 0],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="relative"
                        >
                            <motion.div
                                className="absolute -inset-2 rounded-full bg-indigo-500/20 blur-md"
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.5, 0.8, 0.5],
                                }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            />
                            <MousePointer2 className="w-6 h-6 text-indigo-400" />
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}