import { motion } from "framer-motion";

function FloatingPaths({ position }) {
    const paths = Array.from({ length: 36 }, (_, i) => ({
        id: i,
        d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
            380 - i * 5 * position
        } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
            152 - i * 5 * position
        } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
            684 - i * 5 * position
        } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
        color: `rgba(45,212,191,${0.1 + i * 0.03})`, 
        width: 0.5 + i * 0.03,
    }));

    return (
        <div className="absolute inset-0 pointer-events-none">
            <svg
                className="w-full h-full text-teal-500/30"
                viewBox="0 0 696 316"
                fill="none"
            >
                <title>Background Paths</title>
                {paths.map((path) => (
                    <motion.path
                        key={path.id}
                        d={path.d}
                        stroke="currentColor"
                        strokeWidth={path.width}
                        strokeOpacity={0.1 + path.id * 0.03}
                        initial={{ pathLength: 0.3, opacity: 0.6 }}
                        animate={{
                            pathLength: 1,
                            opacity: [0.3, 0.6, 0.3],
                            pathOffset: [0, 1, 0],
                        }}
                        transition={{
                            duration: 20 + Math.random() * 10,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                        }}
                    />
                ))}
            </svg>
        </div>
    );
}

export function BackgroundPaths({ title = "Background Paths", children }) {
    const words = title.split(" ");

    return (
        // LOGIC CHANGE: Menghapus 'overflow-hidden' dari kontainer utama
        <div className="relative w-full flex flex-col items-center bg-[#070B19]">
            
            {/* LOGIC CHANGE: Memindahkan 'overflow-hidden' ke layer ini agar hanya memotong garis animasi, bukan kontenmu */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <FloatingPaths position={1} />
                <FloatingPaths position={-1} />
                <div className="absolute inset-0 bg-gradient-to-b from-[#0A1128]/80 via-transparent to-[#070B19]"></div>
            </div>

            <div className="relative z-10 container mx-auto px-4 md:px-6 text-center pt-32 pb-12">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    className="max-w-4xl mx-auto w-full"
                >
                    <span className="inline-block py-1 px-3 rounded-full glass-panel text-cyan-400 text-xs font-bold tracking-wider uppercase mb-6 border-cyan-400/30">
                        Welcome to the new standard
                    </span>
                    
                    <h1 className="mt-2 text-5xl sm:text-7xl md:text-8xl font-bold mb-8 tracking-tighter text-white leading-normal">
                        {words.map((word, wordIndex) => (
                            <span
                                key={wordIndex}
                                className="inline-block mr-4 last:mr-0"
                            >
                                {word.split("").map((letter, letterIndex) => (
                                    <motion.span
                                        key={`${wordIndex}-${letterIndex}`}
                                        initial={{ y: 100, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{
                                            delay: wordIndex * 0.1 + letterIndex * 0.03,
                                            type: "spring",
                                            stiffness: 150,
                                            damping: 25,
                                        }}
                                        className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-teal-400 py-2"
                                    >
                                        {letter}
                                    </motion.span>
                                ))}
                            </span>
                        ))}
                    </h1>
                    
                    {/* Ini adalah Search Bar milikmu, sekarang bebas dari batasan overflow! */}
                    {children}

                </motion.div>
            </div>
        </div>
    );
}