import React from 'react'
import { motion } from 'framer-motion'

const companies = [
    'SPACE X', 'NIKE', 'APPLE', 'ADIDAS', 'TESLA',
    'GOOGLE', 'META', 'AMAZON', 'NETFLIX', 'SPOTIFY',
    'DISNEY', 'SAMSUNG'
]

const TrustedBy = () => {
    return (
        <section className="relative px-8 md:px-16 py-32 bg-black overflow-hidden flex flex-col md:flex-row gap-16 items-start">
            {/* Left Side: Label */}
            <div className="w-full md:w-1/4 pt-8">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="flex flex-col gap-2"
                >
                    <span className="text-xs uppercase tracking-[0.5em] opacity-30">TRUSTED BY</span>
                    <span className="text-xl font-black tracking-tighter">(LEADERS)</span>
                </motion.div>
            </div>

            {/* Right Side: Grid */}
            <div className="w-full md:w-3/4 grid grid-cols-2 md:grid-cols-5 gap-0 border-t border-l border-white/10">
                {companies.map((company, index) => {
                    return (
                        <motion.div
                            key={company}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            whileHover={{ backgroundColor: 'rgba(255,255,255,0.03)' }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            className="h-40 flex items-center justify-center border-r border-b border-white/10 relative group"
                        >
                            {/* Corner Nodes */}
                            <span className="absolute -top-[2px] -left-[2px] w-1 h-1 bg-white/20 z-10 transition-colors group-hover:bg-white"></span>
                            <span className="absolute -top-[2px] -right-[2px] w-1 h-1 bg-white/20 z-10 transition-colors group-hover:bg-white"></span>
                            <span className="absolute -bottom-[2px] -left-[2px] w-1 h-1 bg-white/20 z-10 transition-colors group-hover:bg-white"></span>
                            <span className="absolute -bottom-[2px] -right-[2px] w-1 h-1 bg-white/20 z-10 transition-colors group-hover:bg-white"></span>

                            <span className="text-sm md:text-base font-black tracking-tighter opacity-40 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
                                {company}
                            </span>
                        </motion.div>
                    )
                })}
            </div>
        </section>
    )
}

export default TrustedBy
