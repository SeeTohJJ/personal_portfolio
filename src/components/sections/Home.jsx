import { RevealOnScroll } from "../RevealOnScroll";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import ProfilePicture from '../../assets/ProfilePicture.jpg';

export const Home = () => {
    return (
        <section id="home" className="flex flex-col items-center justify-center min-h-screen py-20">
            <RevealOnScroll>
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-32 w-full">
                    <div className="px-4 w-full md:w-150 text-center md:text-left">
                        <h2 className="text-2xl font-bold mb-4">Hello, I'm</h2>
                        <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-[#3b82f6] to-[#5DCCAB] bg-clip-text text-transparent">
                            See Toh Jin Jie
                        </h1>
                        <p className="text-xl text-gray-300 mb-8">
                            <strong className="text-white">Software Engineering</strong> specialized in
                            <strong className="text-white"> Full Stack Development</strong> with
                            <strong className="text-white"> 3+ years</strong> of experience
                            accross web & mobile application development.
                        </p>
                        <a
                            href="#contact"
                            className="inline-block border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200
                            hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:bg-blue-500 hover:text-white"
                            style={{ minWidth: 150 }}
                        >
                            Let's Connect!
                        </a>
                    </div>
                    <div className="flex flex-col items-center mt-8 md:mt-0">
                        <img
                            src={ProfilePicture}
                            className="w-40 h-40 md:w-60 md:h-60 object-cover rounded-xl shadow-lg"
                            alt="Profile"
                        />
                        <div className="flex items-center justify-center gap-6 mt-6 flex-nowrap">
                            <a href="https://github.com/SeeTohJJ" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                                <GitHubIcon className="text-2xl text-white hover:text-blue-500 transition-colors duration-200" />
                            </a>
                            <a href="https://www.linkedin.com/in/see-toh-jin-jie-78a7211b1/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                                <LinkedInIcon className="text-2xl text-white hover:text-blue-500 transition-colors duration-200" />
                            </a>
                            <a href="mailto:seetohjinjie@gmail.com" className="flex items-center justify-center">
                                <EmailIcon className="text-2xl text-white hover:text-blue-500 transition-colors duration-200" />
                            </a>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};