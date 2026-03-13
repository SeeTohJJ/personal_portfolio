import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
    return <section 
    id="projects" 
    className="min-h-screen flex items-center justify-center py-20"
    >
        <RevealOnScroll>
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-[#3b82f6] to-[#5DCCAB] bg-clip-text text-transparent leading-right">
                    Academic Projects
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_10px_rgba(59,130,246,0.1)] transition-all">
                        <h3 className="text-2xl font-bold mb-4">SC2006 - RoadGuardian</h3>
                        <p className="text-lg text-gray-400">
                            An Android and Web application that alerts user about road incidents and hazards through image recognition from LTA's road camera data. 
                            It also allows users to report road incidents and hazards to the authorities.
                        </p>
                        <br />
                        <div>
                            {["Kotlin", "Android Studio", "Firebase"].map((tech, key) =>(
                                <span key={key} className="bg-blue-500/10 text-blue-500 px-4 py-2 rounded-full text-sm
                                hover:bg-blue-500/20 hover:shadow-[0_2px_10px_rgba(59,130,246,0.4)] transition">
                                    {tech}
                                </span>
                            ))}
                        </div>
                            <br />
                        <div>
                            <a href="https://github.com/SeeTohJJ/RoadGuardian" className="text-blue-500 hover:text-blue-300 transition-colors">View Project →</a>
                        </div>
                    </div>
                </div>
                <br />
                <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-[#3b82f6] to-[#5DCCAB] bg-clip-text text-transparent leading-right">
                    Personal Projects
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_10px_rgba(59,130,246,0.1)] transition-all">
                        <h3 className="text-2xl font-bold mb-4">Personal Portfolio</h3>
                        <p className="text-lg text-gray-400">
                            A personal portfolio website to showcase my projects and skills.
                        </p>
                        <br />
                        <div>
                            {["HTML", "Tailwind CSS", "JavaScript", "Vite"].map((tech, key) =>(
                                <span key={key} className="bg-blue-500/10 text-blue-500 px-4 py-2 rounded-full text-sm
                                hover:bg-blue-500/20 hover:shadow-[0_2px_10px_rgba(59,130,246,0.4)] transition">
                                    {tech}
                                </span>
                            ))}
                        </div>
                            <br />
                        <div>
                            <a href="https://github.com/SeeTohJJ/personal_portfolio" className="text-blue-500 hover:text-blue-300 transition-colors">View Project →</a>
                        </div>
                    </div>
                </div>
                <br />
                <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-[#3b82f6] to-[#5DCCAB] bg-clip-text text-transparent leading-right">
                    Achievements
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_10px_rgba(59,130,246,0.1)] transition-all">
                        <h3 className="text-2xl font-bold mb-4">IdeasJam 2025 - Error 404's Wellby</h3>
                        <p className="text-lg text-gray-400">
                            Achieved Top 8 in IdeasJam 2025, an ideathon organized by NTU Garage@EEE where participants pitch innovative solutions to real-world problems. 
                            Our team, Error 404, proposed an AI powered wearable solution to assist patients with dementia in navigating their surroundings and improving their quality of life.
                        </p>
                        <br />
                        <div>
                            {["Figma", "Canva"].map((tech, key) =>(
                                <span key={key} className="bg-blue-500/10 text-blue-500 px-4 py-2 rounded-full text-sm
                                hover:bg-blue-500/20 hover:shadow-[0_2px_10px_rgba(59,130,246,0.4)] transition">
                                    {tech}
                                </span>
                            ))}
                        </div>
                            <br />
                        <div>
                            <a href="https://www.figma.com/proto/XG7VHPq9GLYzKKCGWPSQUt/Error-404-App-UI?node-id=175-870&p=f&t=HXJpEYxR7YMSyiqE-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=175%3A870" 
                            className="text-blue-500 hover:text-blue-300 transition-colors">View Prototype →</a>
                        </div>
                    </div>
                </div>
            </div>
        </RevealOnScroll>
    </section>
};