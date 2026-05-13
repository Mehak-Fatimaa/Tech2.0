import React from 'react'
import { motion } from 'framer-motion'
import { Plus } from 'lucide-react'

const projects = [
    { id: 1, title: 'LUMINA', category: 'DIGITAL EXPERIENCE', img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000' },
    { id: 2, title: 'AETHER', category: 'WEB DESIGN', img: 'https://images.unsplash.com/photo-1633167606207-d840b5070fc2?q=80&w=1000' },
    { id: 3, title: 'NEBULA', category: 'BRANDING', img: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1000' },
    { id: 4, title: 'ORIZON', category: 'UI/UX', img: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=1000' },
    { id: 5, title: 'KINETIC', category: 'MOTION DESIGN', img: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1000' },
    { id: 6, title: 'FLUX', category: 'CREATIVE DEV', img: 'https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=1000' },
    { id: 7, title: 'ZENITH', category: '3D ART', img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000' },
]

const ProjectCard = ({ project, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className={`relative group cursor-pointer w-full mb-12 ${index % 2 !== 0 ? 'mt-0 md:mt-32' : ''}`}
        >
            <div className="overflow-hidden rounded-2xl aspect-[4/5] relative">
                <motion.img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <Plus className="w-12 h-12 text-white glow-sm scale-75 group-hover:scale-100 transition-transform duration-500" />
                </div>
            </div>

            <div className="mt-6 flex justify-between items-end">
                <div>
                    <h3 className="text-3xl font-black tracking-tighter">{project.title}</h3>
                    <p className="text-sm uppercase tracking-widest opacity-0 group-hover:opacity-60 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                        {project.category}
                    </p>
                </div>
            </div>
        </motion.div>
    )
}

const FeaturedWork = () => {
    return (
        <section className="relative px-8 md:px-16 py-32 bg-black">
            <div className="flex flex-col md:flex-row gap-16">

                {/* Left Panel - Sticky */}
                <div className="w-full md:w-1/3 h-fit md:sticky md:top-32">
                    <motion.h2
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="text-6xl md:text-7xl font-black tracking-tighter mb-8"
                    >
                        FEATURED WORK
                    </motion.h2>
                    <motion.button
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="px-8 py-3 border border-white/30 rounded-full text-sm uppercase tracking-widest hover:border-white transition-all hover:bg-white hover:text-black font-bold"
                    >
                        ALL WORK →
                    </motion.button>
                </div>

                {/* Right Grid */}
                <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-12">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FeaturedWork
