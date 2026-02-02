import { motion } from 'framer-motion';
import { Code, Server, Database, Brain, Cloud, Terminal } from 'lucide-react';

export default function About() {
    const skills = [
        { category: "Languages", icon: <Code />, items: ["Python", "JavaScript", "Java", "C++", "C#", "SQL"] },
        { category: "Frameworks", icon: <Server />, items: ["React", "Next.js", "Node.js", "Express.js", "SvelteKit", "FastAPI"] },
        { category: "Databases", icon: <Database />, items: ["MongoDB", "MySQL", "PostgreSQL", "SQLite", "SQL Server"] },
        { category: "AI & ML", icon: <Brain />, items: ["TensorFlow", "PyTorch", "Scikit-learn", "MLOps", "Model Training"] },
        { category: "Cloud & DevOps", icon: <Cloud />, items: ["Azure", "Docker", "CI/CD", "GitHub Actions"] },
        { category: "Tools", icon: <Terminal />, items: ["GraphQL", "WebSockets", "Linux", "Microservices"] },
    ];

    return (
        <section id="about" className="py-24 bg-background border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-sm font-mono text-primary mb-2 uppercase tracking-widest">About Me</h2>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Technical <br /> Arsenal</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl font-sans border-l border-white/10 pl-6">
                        A comprehensive toolkit for building scalable, intelligent systems.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.category}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-secondary p-8 border border-white/5 hover:border-primary/50 transition-all group relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-150"></div>

                            <div className="flex items-center gap-4 mb-6 relative z-10">
                                <div className="text-primary">
                                    {skill.icon}
                                </div>
                                <h3 className="text-xl font-serif font-bold text-white">{skill.category}</h3>
                            </div>
                            <div className="flex flex-wrap gap-2 relative z-10">
                                {skill.items.map((item) => (
                                    <span key={item} className="px-2 py-1 bg-background text-xs font-mono text-muted-foreground border border-white/5 uppercase">
                                        {item}
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
