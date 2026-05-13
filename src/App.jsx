import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import TrustedBy from './components/TrustedBy'
import FeaturedWork from './components/FeaturedWork'
import ScrollMedia from './components/ScrollMedia'
import Awards from './components/Awards'
import FinalReveal from './components/FinalReveal'

function App() {
    return (
        <main className="bg-black text-white min-h-screen selection:bg-white selection:text-black">
            <Header />
            <Hero />
            <TrustedBy />
            <FeaturedWork />
            <ScrollMedia />
            <Awards />
            <FinalReveal />

            {/* Footer / Copyright */}
            <footer className="px-8 md:px-16 py-12 flex justify-between items-center border-t border-white/10 text-[10px] uppercase tracking-widest opacity-30">
                <div>© 2024 TECHATHON STUDIO.</div>
                <div className="flex gap-8">
                    <a href="#" className="hover:opacity-100 transition-opacity">TWITTER</a>
                    <a href="#" className="hover:opacity-100 transition-opacity">INSTAGRAM</a>
                    <a href="#" className="hover:opacity-100 transition-opacity">DRIBBBLE</a>
                </div>
            </footer>
        </main>
    )
}

export default App
