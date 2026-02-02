import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Phone, ArrowUpRight, CheckCircle, XCircle } from 'lucide-react';

export default function Contact() {
    const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    return (
        <section id="contact" className="py-24 lg:py-32 bg-background relative overflow-hidden">
            {/* Custom Toast Notification */}
            <AnimatePresence>
                {(formStatus === 'success' || formStatus === 'error') && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, x: '-50%' }}
                        animate={{ opacity: 1, y: 0, x: '-50%' }}
                        exit={{ opacity: 0, y: 50, x: '-50%' }}
                        className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-50 px-6 py-4 border ${formStatus === 'success' ? 'bg-background border-primary text-white' : 'bg-red-950 border-red-500 text-white'
                            } flex items-center gap-4 shadow-2xl min-w-[300px] justify-center`}
                    >
                        {formStatus === 'success' ? <CheckCircle className="text-primary w-5 h-5" /> : <XCircle className="text-red-500 w-5 h-5" />}
                        <span className="font-mono text-sm tracking-widest uppercase">
                            {formStatus === 'success' ? "Message Sent Successfully" : "Submission Failed"}
                        </span>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="space-y-12"
                    >
                        <div>
                            <h2 className="text-primary font-mono text-sm tracking-widest uppercase mb-4">Contact</h2>
                            <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-white leading-tight mb-8">
                                Let's Build <br /> The Future.
                            </h2>
                            <p className="text-muted-foreground text-lg max-w-md font-sans border-l border-white/10 pl-6">
                                Open to discussing new opportunities, innovative solutions, and technical challenges.
                            </p>
                        </div>

                        <div className="space-y-8">
                            <div className="flex items-center gap-6 group">
                                <div className="w-12 h-12 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background transition-colors duration-300">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-1">Email</p>
                                    <a href="mailto:abdulhananch404@gmail.com" className="font-serif text-xl md:text-2xl text-white hover:text-primary transition-colors">
                                        abdulhananch404@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 group">
                                <div className="w-12 h-12 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background transition-colors duration-300">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-1">Phone</p>
                                    <p className="font-serif text-xl md:text-2xl text-white">
                                        +92-303-4513181
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 group">
                                <div className="w-12 h-12 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background transition-colors duration-300">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-1">Location</p>
                                    <p className="font-serif text-xl md:text-2xl text-white">
                                        Islamabad, Pakistan
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col justify-center bg-card p-8 md:p-12 border border-white/5 relative shadow-2xl"
                    >
                        {/* Decorative Corner */}
                        <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-primary hidden md:block"></div>

                        <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-8">Quick Connect</h3>

                        <form className="space-y-6"
                            onSubmit={async (e) => {
                                e.preventDefault();
                                setFormStatus('submitting');
                                const form = e.target as HTMLFormElement;
                                const formData = new FormData(form);

                                try {
                                    const response = await fetch("https://formspree.io/f/mlgljkro", {
                                        method: "POST",
                                        body: formData,
                                        headers: {
                                            'Accept': 'application/json'
                                        }
                                    });

                                    if (response.ok) {
                                        setFormStatus('success');
                                        form.reset();
                                        setTimeout(() => setFormStatus('idle'), 5000);
                                    } else {
                                        setFormStatus('error');
                                        setTimeout(() => setFormStatus('idle'), 5000);
                                    }
                                } catch (error) {
                                    setFormStatus('error');
                                    setTimeout(() => setFormStatus('idle'), 5000);
                                }
                            }}
                        >
                            <div className="space-y-2">
                                <label className="text-xs font-mono text-primary uppercase tracking-widest">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    disabled={formStatus === 'submitting'}
                                    className="w-full bg-background border border-white/10 px-4 py-4 text-white focus:outline-none focus:border-primary transition-colors font-sans text-lg placeholder:text-white/20 disabled:opacity-50"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-mono text-primary uppercase tracking-widest">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    disabled={formStatus === 'submitting'}
                                    className="w-full bg-background border border-white/10 px-4 py-4 text-white focus:outline-none focus:border-primary transition-colors font-sans text-lg placeholder:text-white/20 disabled:opacity-50"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-mono text-primary uppercase tracking-widest">Message</label>
                                <textarea
                                    name="message"
                                    rows={4}
                                    required
                                    disabled={formStatus === 'submitting'}
                                    className="w-full bg-background border border-white/10 px-4 py-4 text-white focus:outline-none focus:border-primary transition-colors font-sans text-lg resize-none placeholder:text-white/20 disabled:opacity-50"
                                    placeholder="Tell me about your project..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={formStatus === 'submitting'}
                                className="w-full bg-primary text-background font-mono font-bold py-5 hover:bg-white transition-colors flex items-center justify-center gap-3 text-lg mt-4 group disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                <span>{formStatus === 'submitting' ? 'SENDING...' : 'SEND MESSAGE'}</span>
                                {formStatus !== 'submitting' && <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                            </button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
