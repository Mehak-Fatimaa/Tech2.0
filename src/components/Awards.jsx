import React from 'react'
import { motion } from 'framer-motion'

const awards = [
    { name: 'AWWWARDS', desc: 'SOTD / 2024 SITE OF THE YEAR NOMINEE' },
    { name: 'FWA', desc: 'FWA OF THE DAY / BEST IN CLASS EXPERIENCES' },
    { name: 'CSS DESIGN', desc: 'UI/UX INNOVATION AWARD WINNER' },
    { name: 'OPERTRONS', desc: 'BEST CREATIVE STUDIO EXCELLENCE' }
]

const Awards = () => {
    return (
        <section className="px-8 md:px-16 py-32 bg-black border-t border-white/10">
            <div className="flex flex-col gap-0">
                {awards.map((award, index) => (
                    <motion.div
                        key={award.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                        className="grid grid-cols-1 md:grid-cols-3 py-12 border-b border-white/10 group cursor-default"
                    >
                        <div className="text-sm opacity-30 uppercase tracking-widest self-center">0{index + 1}</div>
                        <div className="text-4xl md:text-6xl font-black tracking-tighter group-hover:italic transition-all duration-500">
                            {award.name}
                        </div>
                        <div className="text-sm uppercase tracking-widest opacity-50 max-w-[200px] md:text-right self-center justify-self-end mt-4 md:mt-0">
                            {award.desc}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

export default Awards
