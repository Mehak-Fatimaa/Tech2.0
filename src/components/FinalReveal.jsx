import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const FinalReveal = () => {
    const containerRef = React.useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    })

    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 15, 50])
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 360])
    const opacity = useTransform(scrollYProgress, [0, 0.4, 0.6], [0, 1, 1])
    const textOpacity = useTransform(scrollYProgress, [0.6, 0.8], [0, 1])

    return (
        <section ref={containerRef} className="relative h-[200vh] bg-black overflow-hidden">

            {/* Background Gradient / Atmosphere */}
            <motion.div
                style={{ opacity }}
                className="fixed inset-0 z-0 bg-[radial-gradient(circle_at_center,_rgba(255,100,50,0.1)_0%,_rgba(50,200,255,0.1)_50%,_black_100%)] pointer-events-none"
            />

            {/* The Large Plus Symbol */}
            <div className="sticky top-0 h-screen flex items-center justify-center pointer-events-none">
                <motion.div
                    style={{ scale, rotate, opacity }}
                    className="relative z-10"
                >
                    <div className="w-20 h-[2px] bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-sm"></div>
                    <div className="w-[2px] h-20 bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-sm"></div>

                    <div className="w-20 h-[1px] bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-[0_0_20px_#fff]"></div>
                    <div className="w-[1px] h-20 bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-[0_0_20px_#fff]"></div>
                </motion.div>
            </div>

            {/* Final Text Reveal */}
            <div className="sticky top-0 h-screen flex flex-col items-center justify-center z-20 text-center px-8">
                <motion.div style={{ opacity: textOpacity }}>
                    <h2 className="text-[6vw] font-black tracking-tighter leading-none mb-4">
                        WHERE DIFFERENCE IS THE STANDARD
                    </h2>
                    <h3 className="text-[4vw] font-light tracking-[0.2em] opacity-80">
                        CHOOSE TECHATHON
                    </h3>

                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        className="mt-12 px-12 py-4 bg-white text-black font-bold rounded-full uppercase tracking-widest text-sm hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-shadow"
                    >
                        GET STARTED
                    </motion.button>
                </motion.div>
            </div>

            {/* Rainbow Light Finish */}
            <motion.div
                style={{ opacity: textOpacity }}
                className="fixed inset-0 z-10 bg-gradient-to-b from-transparent via-purple-500/5 to-blue-500/5 pointer-events-none"
            />
        </section>
    )
}

export default FinalReveal
