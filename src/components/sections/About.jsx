import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
    const frontendSkills = ["React", "Tailwind CSS"];
    const backendSkills = ["Java", "Python", "C"];
    const gameDevSkills = ["gdscript"];
    const otherSkills = ["HTML", "CSS", "Figma", "Aseprite"];

    return <section id="about" className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-[#3b82f6] to-[#5DCCAB] bg-clip-text text-transparent leading-right">
                    About Me
                </h2>

                <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                    <p className="text-gray-400 mb-6">
                        Passionate about software and game development with a background in avionics.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-2xl font-bold mb-4">Frontend</h3>
                            <div className="flex flex-wrap gap-2">
                                {frontendSkills.map((tech) => (
                                    <span key={tech} 
                                    className="bg-blue-500/10 text-blue-500 px-4 py-2 rounded-full text-sm
                                            hover:bg-blue-500/20 hover:shadow-[0_2px_10px_rgba(59,130,246,0.4)] transition">   
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-2xl font-bold mb-4">Backend</h3>
                            <div className="flex flex-wrap gap-2">
                                {backendSkills.map((tech) => (
                                    <span key={tech} 
                                    className="bg-blue-500/10 text-blue-500 px-4 py-2 rounded-full text-sm
                                            hover:bg-blue-500/20 hover:shadow-[0_2px_10px_rgba(59,130,246,0.4)] transition">   
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-2xl font-bold mb-4">GameDev</h3>
                            <div className="flex flex-wrap gap-2">
                                {gameDevSkills.map((tech) => (
                                    <span key={tech} 
                                    className="bg-blue-500/10 text-blue-500 px-4 py-2 rounded-full text-sm
                                            hover:bg-blue-500/20 hover:shadow-[0_2px_10px_rgba(59,130,246,0.4)] transition">   
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-2xl font-bold mb-4">Others</h3>
                            <div className="flex flex-wrap gap-2">
                                {otherSkills.map((tech) => (
                                    <span key={tech} 
                                    className="bg-blue-500/10 text-blue-500 px-4 py-2 rounded-full text-sm
                                            hover:bg-blue-500/20 hover:shadow-[0_2px_10px_rgba(59,130,246,0.4)] transition">   
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
                                <h3 className="text-2xl font-bold mb-4">Education</h3>

                                <ul className="list-disc list-inside">
                                    <li>
                                        <strong>Bachelor in Computing (Computer Science)</strong> - Nanyang Technological University (2023 - Present)
                                    </li>
                                    <br />
                                    <li>
                                        <strong>Diploma in Aerospace Electronics</strong> - Temasek Polytechnic (2018 - 2021)
                                    </li>
                                </ul>
                            </div>

                            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
                                <h4 className="font-semibold">
                                            Airforce Technician (Flight Line Crew - Weapons) - Republic of Singapore Airforce (2021 - 2023)
                                </h4>
                                    <ul className="list-disc list-inside ml-4">
                                        <li>Worked on the F-15SG Fighter Jet, handling weapons and loading them onto the aircraft.</li>
                                    </ul>
                                <br />
                                <h4 className="font-semibold">
                                        Student Intern - Temasek Polytechnic Aviation Research Centre (2020 - 2021)
                                </h4>
                                <ul className="list-disc list-inside ml-4">
                                    <li>Developed and fabricated a quadcopter drone.</li>
                                    <li>Built two Arduino-based temperature monitoring battery chargers using CAD.</li>
                                    <li>Redesigned a carbon fiber cutter with speed control and automated vacuuming.</li>
                                </ul>
                            </div>
                    </div>
                </div>
            </div>
        </RevealOnScroll>
    </section>;
};