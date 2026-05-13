import React from 'react'
import { motion } from 'framer-motion'

const Header = () => {
    const navLinks = [
        { name: 'Manifesto', href: '#' },
        { name: 'Webflow Enterprise', href: '#' },
    ]

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 md:px-16 py-8"
        >
            <div className="text-2xl font-bold tracking-tighter cursor-pointer">
                TECHATHON.
            </div>

            <nav className="flex items-center gap-8 md:gap-12">
                <ul className="hidden md:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a
                                href={link.href}
                                className="group relative text-sm uppercase tracking-widest font-medium overflow-hidden block h-[1.2em] leading-none"
                            >
                                <div className="transition-transform duration-500 group-hover:-translate-y-full">
                                    <span className="block h-[1.2em]">
                                        {link.name} →
                                    </span>
                                    <span className="block h-[1.2em] text-white glow-sm">
                                        {link.name} →
                                    </span>
                                </div>
                                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-500 group-hover:w-full"></span>
                            </a>
                        </li>
                    ))}
                </ul>

                <button className="px-6 py-2 border border-white/30 rounded-full text-sm uppercase tracking-widest hover:border-white transition-all duration-500 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                    Contact
                </button>
            </nav>
        </motion.header>
    )
}

export default Header
