import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const MediaItem = ({ src, type, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: index * 0.1 }}
            className={`relative rounded-3xl overflow-hidden ${index % 2 === 0 ? 'w-full aspect-video' : 'w-2/3 aspect-square'}`}
        >
            {type === 'video' ? (
                <video src={src} autoPlay muted loop className="w-full h-full object-cover" />
            ) : (
                <img src={src} alt="" className="w-full h-full object-cover" />
            )}
        </motion.div>
    )
}

const ScrollMedia = () => {
    const containerRef = React.useRef(null)

    const mediaItems = [
        { type: 'image', src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000' },
        { type: 'image', src: 'https://images.unsplash.com/photo-1633167606207-d840b5070fc2?q=80&w=1000' },
        { type: 'image', src: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1000' },
        { type: 'image', src: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=1000' },
    ]

    return (
        <section ref={containerRef} className="relative px-8 md:px-16 py-32 bg-black flex flex-col md:flex-row gap-16">

            {/* Sticky Left Text */}
            <div className="w-full md:w-1/2 h-fit md:sticky md:top-1/2 md:-translate-y-1/2">
                <motion.h2
                    className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.9]"
                >
                    ELEVATING BRANDS IN UNEXPECTED WAYS
                </motion.h2>
            </div>

            {/* Animated Media Right */}
            <div className="w-full md:w-1/2 flex flex-col gap-20">
                {mediaItems.map((item, index) => (
                    <MediaItem key={index} {...item} index={index} />
                ))}
            </div>
        </section>
    )
}

export default ScrollMedia
