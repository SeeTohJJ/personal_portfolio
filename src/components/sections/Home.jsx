import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
    return <section id = "home" className="min-h-screen flex items-center justify-center relative">
        <RevealOnScroll>
            <div className="text-center z-10 px-4">
                <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#3b82f6] to-[#5DCCAB] bg-clip-text text-transparent leading-right">
                    Hi, I'm See Toh Jin Jie
                </h1>

                <p className="text-gray-400 text-lg md-8 max-w-lg mx-auto">
                    I'm a Y2 student at NTU School of Computing, majoring in Computer Science. 
                    I'm passionate about software and game development, and I'm always looking for opportunities to learn and grow.
                </p>

                <div className="flex justify-center space-x-4 mt-8">
                    <a href="#projects" className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative 
                    overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                        View Projects
                    </a>

                    <a href="#contact" className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200
                    hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:bg-blue-500 hover:text-white">
                        Contact Me
                    </a>

                </div>
            </div>
        </RevealOnScroll>
    </section>
};