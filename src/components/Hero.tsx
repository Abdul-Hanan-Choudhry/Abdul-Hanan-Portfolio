import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, ArrowRight, Download } from 'lucide-react';

const Typewriter = ({ text, speed = 100 }: { text: string; speed?: number }) => {
    const [displayText, setDisplayText] = useState('');

    useEffect(() => {
        let i = 0;
        setDisplayText(''); // Reset on text change
        const timer = setInterval(() => {
            if (i < text.length) {
                setDisplayText(() => text.substring(0, i + 1));
                i++;
            } else {
                clearInterval(timer);
            }
        }, speed);

        return () => clearInterval(timer);
    }, [text, speed]);

    return (
        <span>
            {displayText}
            <span className="animate-pulse text-primary">|</span>
        </span>
    );
};

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden bg-background">
            {/* Architectural Grid Background */}
            <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-10 order-2 lg:order-1"
                    >
                        <div className="space-y-4">
                            <h2 className="text-primary font-mono tracking-widest text-sm uppercase border-l-2 border-primary pl-4">
                                The Digital Architect
                            </h2>
                            <h1 className="text-6xl md:text-8xl font-serif font-bold text-white tracking-tight leading-[0.9]">
                                Abdul <br />
                                <span className="text-white">Hanan</span>
                                <span className="text-primary text-2xl align-top">.</span>
                            </h1>
                            <div className="text-lg md:text-xl text-muted-foreground font-mono pt-2 h-8">
                                <Typewriter text="FULL STACK SOFTWARE ENGINEER" speed={50} />
                            </div>
                        </div>

                        <p className="text-muted-foreground text-lg max-w-md font-sans leading-relaxed border-l border-white/10 pl-6 py-2">
                            Specializing in Scalable System Design and AI Integration.
                            Connecting the dots between enterprise-grade applications and intelligent future-tech.
                        </p>

                        <div className="flex flex-wrap gap-6 pt-4">
                            <a href="#projects" className="px-8 py-4 bg-primary text-background font-mono font-bold hover:bg-white transition-colors flex items-center gap-3">
                                VIEW WORK <ArrowRight className="w-4 h-4" />
                            </a>
                            <a href="/RESUME.pdf" download="Abdul_Hanan_Resume.pdf" className="px-8 py-4 border border-white/20 text-white font-mono hover:border-primary hover:text-primary transition-colors flex items-center gap-3">
                                RESUME <Download className="w-4 h-4" />
                            </a>
                        </div>

                        <div className="flex gap-6 pt-8 border-t border-white/10 w-max">
                            <a href="https://github.com/Abdul-Hanan-Choudhry" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                                <Github className="w-6 h-6" />
                            </a>
                            <a href="https://linkedin.com/in/abdul-hanan-9bb417306" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                                <Linkedin className="w-6 h-6" />
                            </a>
                        </div>
                    </motion.div>

                    {/* Image Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative flex justify-center lg:justify-end order-1 lg:order-2"
                    >
                        <div className="relative w-80 h-[400px] md:w-96 md:h-[500px]">
                            {/* Architectural Frame */}
                            <div className="absolute -inset-4 border border-primary/30 z-0 hidden md:block"></div>
                            <div className="absolute -inset-4 border-2 border-primary/10 translate-x-4 translate-y-4 z-0 hidden md:block"></div>

                            {/* Profile Image container */}
                            <div className="absolute inset-0 bg-secondary overflow-hidden z-10">
                                <img
                                    src="/Profile.png"
                                    alt="Abdul Hanan"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60"></div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
