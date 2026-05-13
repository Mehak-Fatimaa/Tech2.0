import React from 'react'
import { motion } from 'framer-motion'
import LiquidOrb from './LiquidOrb'

const Hero = () => {
    return (
        <section className="relative min-h-screen w-full flex flex-col justify-center px-8 md:px-16 pt-32 overflow-hidden">
            <LiquidOrb />

            <div className="relative z-10 w-full flex flex-col pt-20">
                <motion.h1
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    className="text-[10vw] font-black leading-[0.8] tracking-tighter"
                >
                    A DIFFERENT
                </motion.h1>

                {/* Vertical space for Orb area */}
                <div className="h-[15vh] md:h-[20vh] flex items-center justify-end">
                    <motion.h1
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="text-[10vw] font-black leading-[0.8] tracking-tighter"
                    >
                        CREATIVE
                    </motion.h1>
                </div>

                <motion.h1
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="text-[10vw] font-black leading-[0.8] tracking-tighter text-left"
                >
                    APPROACH
                </motion.h1>
            </div>

            {/* Subtext Paragraph - Editorial Style */}
            <div className="relative z-10 mt-20 md:mt-40 max-w-5xl">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-[1.1] text-white"
                >
                    WITH EMOTION,<br />
                    INNOVATION, PLUS<br />
                    INNOVATION WE PUSH THE<br />
                    BOUNDARIES OF DIGITAL<br />
                    CREATIVITY.
                </motion.h2>
            </div>

            {/* Info Boxes Section */}
            <div className="relative z-10 mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
                {/* Left Card: Stats */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ y: -10, borderColor: 'rgba(255,255,255,0.4)', boxShadow: '0 0 30px rgba(255,255,255,0.1)' }}
                    transition={{ duration: 0.5 }}
                    className="glass p-10 md:p-14 rounded-[2rem] flex flex-col justify-between group transition-all duration-500"
                >
                    <div className="grid grid-cols-2 gap-8">
                        <div>
                            <div className="text-3xl font-black font-editorial tracking-tighter">50K+</div>
                            <div className="text-[10px] uppercase tracking-widest text-white/40 mt-1">Active Participants</div>
                        </div>
                        <div>
                            <div className="text-3xl font-black font-editorial tracking-tighter">1.2K</div>
                            <div className="text-[10px] uppercase tracking-widest text-white/40 mt-1">Creative Projects</div>
                        </div>
                        <div>
                            <div className="text-3xl font-black font-editorial tracking-tighter">120+</div>
                            <div className="text-[10px] uppercase tracking-widest text-white/40 mt-1">Global Reach</div>
                        </div>
                        <div>
                            <div className="text-3xl font-black font-editorial tracking-tighter">98%</div>
                            <div className="text-[10px] uppercase tracking-widest text-white/40 mt-1">Innovation Score</div>
                        </div>
                    </div>
                </motion.div>

                {/* Right Card: Navigation */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ y: -10, borderColor: 'rgba(255,255,255,0.4)', boxShadow: '0 0 30px rgba(255,255,255,0.1)' }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="glass p-10 md:p-14 rounded-[2rem] flex flex-col justify-between group transition-all duration-500 cursor-pointer"
                >
                    <div className="flex justify-between items-start w-full">
                        <span className="text-xs uppercase tracking-widest font-bold opacity-30 group-hover:opacity-100 transition-opacity">TECHATHON</span>
                        <span className="text-xs uppercase tracking-widest font-black group-hover:translate-x-2 transition-transform duration-500">ALL WORK →</span>
                    </div>
                    <div className="text-5xl font-black tracking-tighter mt-10">
                        CRAFTING THE <br /> FUTURE
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Hero
