import { motion } from 'framer-motion';
import { Calendar, Briefcase } from 'lucide-react';

export default function Experience() {
    const experiences = [
        {
            company: "Systems Limited",
            role: "Cloud Application Developer Intern",
            period: "Jun 2025 – Aug 2025",
            location: "Islamabad, Pakistan",
            description: [
                "Developed cloud-native applications on Azure using Functions, App Services, and Cosmos DB.",
                "Implemented scalable microservices architecture for enterprise solutions.",
                "Built CI/CD pipelines with Azure DevOps and GitHub Actions, reducing deployment time by 40%."
            ]
        },
        {
            company: "Zeez Soft",
            role: "Web Development & Design Intern",
            period: "Jan 2024 – May 2024",
            location: "Multan, Pakistan",
            description: [
                "Developed responsive web applications using React, Node.js, and Tailwind CSS for 5 client projects.",
                "Integrated RESTful APIs to enhance functionality and user experience."
            ]
        }
    ];

    return (
        <section id="experience" className="py-24 bg-background relative">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-sm font-mono text-primary mb-2 uppercase tracking-widest">Career Path</h2>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">Professional <br /> Journey</h2>
                </motion.div>

                <div className="relative border-l border-white/10 ml-3 md:ml-0 md:border-l-0">

                    <div className="space-y-16">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className={`flex flex-col md:flex-row gap-8 md:gap-16 items-start relative`}
                            >
                                {/* Timeline Logic for Desktop */}
                                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2"></div>
                                <div className={`hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full mt-2 border-4 border-background z-10`}></div>

                                <div className={`flex-1 ${index % 2 === 1 ? 'md:order-last' : 'md:text-right'} pl-8 md:pl-0`}>
                                    <h3 className="text-2xl font-serif font-bold text-white">{exp.role}</h3>
                                    <p className="text-lg text-primary font-mono mt-1 mb-2">{exp.company}</p>
                                    <div className={`flex flex-wrap gap-4 text-xs font-mono text-muted-foreground uppercase tracking-wider mb-4 ${index % 2 === 1 ? '' : 'md:justify-end'}`}>
                                        <span className="flex items-center gap-2"><Calendar className="w-3 h-3" /> {exp.period}</span>
                                        <span className="flex items-center gap-2"><Briefcase className="w-3 h-3" /> {exp.location}</span>
                                    </div>
                                </div>

                                <div className={`flex-1 ${index % 2 === 1 ? 'md:order-first md:text-right' : ''} pl-8 md:pl-0 pt-2`}>
                                    <ul className={`space-y-3 ${index % 2 === 1 ? 'md:ml-auto' : ''}`}>
                                        {exp.description.map((item, i) => (
                                            <li key={i} className="text-muted-foreground text-sm leading-relaxed flex items-start gap-3">
                                                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
