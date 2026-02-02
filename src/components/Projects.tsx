
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
    const projects = [
        {
            title: "Trade 360",
            category: "Fintech & Analytics",
            image: "/projects/trading.png",
            tech: ["Next.js", "Python", "ML", "PostgreSQL"],
            description: "Automated trading platform with AI-powered strategy builder using deep learning models for market prediction.",
            links: { demo: "#", github: "https://github.com/moeiz2701/CryptoApp" }
        },
        {
            title: "Resumize",
            category: "AI Productivity",
            image: "/projects/resume.png",
            tech: ["SvelteKit", "FastAPI", "OpenAI", "SQLite"],
            description: "AI-powered resume generator with LinkedIn OAuth integration and ATS optimization.",
            links: { demo: "#", github: "https://github.com/Ninjaa-aa/enhancv" }
        },
        {
            title: "Rahgeer",
            category: "Urban Mobility",
            image: "/projects/ride-share.png",
            tech: ["MERN Stack", "Socket.IO", "MapBox"],
            description: "Real-time ride-sharing platform with GPS tracking, secure payments, and user authentication.",
            links: { demo: "#", github: "https://github.com/kamran-11003/Project" }
        },
        {
            title: "WeatherPulse",
            category: "Meteorology AI",
            image: "/projects/weather.png",
            tech: ["Python", "FastAPI", "OpenWeather"],
            description: "Weather forecasting app with custom AI chatbot for conversational queries.",
            links: { demo: "#", github: "https://github.com/Abdul-Hanan-Choudhry/AiWeatherApp" }
        }
    ];

    return (
        <section id="projects" className="py-32 bg-background border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20 flex flex-col md:flex-row justify-between items-end gap-6"
                >
                    <div>
                        <h2 className="text-sm font-mono text-primary mb-2 uppercase tracking-widest">Selected Works</h2>
                        <h3 className="text-4xl md:text-5xl font-serif font-bold text-white">Innovation <br /> Showcase</h3>
                    </div>
                    <p className="text-muted-foreground max-w-sm text-right font-mono text-xs md:text-sm">
                        Combining engineering precision with aesthetic excellence to solve complex problems.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            {/* Architectural Card */}
                            <div className="relative aspect-[4/3] overflow-hidden bg-secondary mb-6 border border-white/5">
                                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500 z-10"></div>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform md:grayscale md:group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                                />
                            </div>

                            <div className="flex justify-between items-start">
                                <div>
                                    <h4 className="text-2xl font-serif font-bold text-white mb-2 group-hover:text-primary transition-colors">{project.title}</h4>
                                    <p className="font-mono text-xs text-primary mb-3 uppercase tracking-wider">{project.category}</p>
                                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 max-w-md">
                                        {project.description}
                                    </p>
                                </div>
                                <div className="flex gap-3">
                                    <a href={project.links.github} className="text-muted-foreground hover:text-white transition-colors">
                                        <Github className="w-5 h-5" />
                                    </a>
                                    <a href={project.links.demo} className="text-muted-foreground hover:text-white transition-colors">
                                        <ExternalLink className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-x-4 gap-y-2 mt-2">
                                {project.tech.map((t) => (
                                    <span key={t} className="font-mono text-[10px] text-muted-foreground/60 border border-white/10 px-2 py-1 uppercase">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
