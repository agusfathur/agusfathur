import DashboardLayout from "@/components/layout";
import { bricolageGrotesque, jetBrainsMono } from "@/components/fonts";

export const metadata = {
    title: "Agus Fathur - Full Stack Developer",
    description:
        "Personal portfolio website of Agus Fathur, showcasing projects, skills, and contact information.",
    meta: {
        "og:title": "Agus Fathur - Full Stack Developer",
        "og:description":
            "Personal portfolio website of Agus Fathur, showcasing projects, skills, and contact information.",
        "og:image": "/profile.jpg",
        "og:url": "https://agusfathur.com",
        "twitter:card": "summary_large_image",
        "twitter:title": "Agus Fathur - Full Stack Developer",
        "twitter:description":
            "Personal portfolio website of Agus Fathur, showcasing projects, skills, and contact information.",
        "twitter:image": "/profile.jpg",
    },
};

export default function AboutPage() {
    const educations = [
        {
            year: "2021 - 2025",
            school: "Universitas Muria Kudus",
            major: "S1 INFORMATICS ENGINEERING",
            description: "Focused on software development, web systems, data, and practical product implementation.",
        },
        {
            year: "2018 - 2021",
            school: "SMK Negeri 3 Kudus",
            major: "Teknik Komputer dan Jaringan",
            description: "Focused on networking, server management, computer systems, and IT infrastructure.",
        },
    ];

    const experiences = [
        {
            year: "August 2025 – Present",
            role: "Programmer, PT. Kanindo Makmur Jaya",
            description: "Developing and maintaining internal web-based applications to support production processes in a bag manufacturing factory, including scheduling systems, material tracking, production reports, and production performance analysis dashboards.",
        },
        {
            year: "May 2024 – Present",
            role: "Web Developer, Freelance",
            description: "Developing web applications using PHP (Laravel, CodeIgniter), JavaScript, and React with RESTful API integration for communication between frontend and backend.",
        },
        {
            year: "August 2023 – July 2024",
            role: "Teaching Assistant, Universitas Muria Kudus",
            description: "Assisted lecturers in Network Programming and Database System practicums by guiding students, supervising laboratory sessions, creating modules, evaluating assignments, and managing laboratory operations.",
        },
        {
            year: "January 2024 – February 2024",
            role: "Junior Programmer Intern, PT Humanika Mitra Solusi",
            description: "Independently developed 'E-Cafe', a digital cash register system, covering database design, backend implementation, and user interface development.",
        },
        {
            year: "February 2021 – May 2022",
            role: "Network Administrator",
            description: "Built and managed internet network servers using MikroTik and installed wireless/fiber optic infrastructure, scaling from 1 to 120 active clients in one year while ensuring stable connectivity through maintenance and troubleshooting.",
        },
    ];

    return (
        <DashboardLayout>
            <div className="flex-1 flex-col px-12 pt-12">
                {/* Breadcrumb */}
                <div>
                    <div
                        className={`text-md font-mono text-zinc-500 uppercase ${jetBrainsMono.className}`}
                    >
                        ABOUT / BACKGROUND
                    </div>
                    <div
                        className={`text-3xl lg:text-5xl text-zinc-950 font-bold lg:leading-[0.9em] mt-5 ${bricolageGrotesque.className}`}
                    >
                        Full-stack web products, automation, Bussiness Intelligence, and Financial Management.
                    </div>
                </div>

                {/* Card Content */}
                <div className="flex flex-col lg:flex-row gap-6 mt-8 items-start">
                    {/* Current Direction */}
                    <div className="w-full lg:w-1/3 border border-zinc-400">
                        {/* Header */}
                        <div className="border-b border-zinc-400">
                            <div className="flex justify-between items-center py-3 px-4 md:px-5">
                                <div className="flex items-center gap-2">
                                    <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-black" />
                                    <span className="text-zinc-500 font-mono font-bold text-xs lg:text-sm">
                                        CURRENT DIRECTION
                                    </span>
                                </div>

                                <span className="text-zinc-400 font-mono font-bold text-xs lg:text-sm">
                                    PRESENT
                                </span>
                            </div>
                        </div>

                        {/* Body */}
                        <div className="p-3 md:p-4 bg-zinc-50">
                            <h3
                                className={`text-sm lg:text-4xl text-zinc-600 font-bold leading-tight ${bricolageGrotesque.className}`}
                            >
                                Full-stack web developer.
                            </h3>

                            <p
                                className={`mt-2 lg:mt-4 text-zinc-500 lg:text-lg leading-snug ${jetBrainsMono.className}`}
                            >
                                I build full-stack web products for clients and companies. Specialized
                                in web applications with PHP, JavaScript, React, and RESTful
                                API integration. Currently focused on developing manufacturing
                                management systems with production scheduling, material
                                tracking, and analytics dashboards.
                            </p>
                        </div>
                    </div>

                    {/* Education */}
                    <div className="w-full lg:w-1/3 border border-zinc-400 overflow-hidden">
                        {/* Header */}
                        <div className="border-b border-zinc-400">
                            <div className="flex justify-between items-center py-3 px-4 md:px-5">
                                <div className="flex items-center gap-2">
                                    <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-black" />
                                    <span className="text-zinc-500 font-mono font-bold text-xs lg:text-sm">
                                        EDUCATION
                                    </span>
                                </div>

                                <span className="text-zinc-400 font-mono font-bold text-[10px] text-xs lg:text-sm">
                                    FORMAL TRACK
                                </span>
                            </div>
                        </div>

                        {/* Body */}
                        <div className=" overflow-y-auto p-3 md:p-4">
                            {educations.map((edu, index) => (
                                <div
                                    key={index}
                                    className="w-full border bg-zinc-50 border-zinc-400 border-l-[5px] p-3 flex flex-col gap-2 mb-3 hover:border-l-zinc-700 transition-colors duration-300 ease-in-out"
                                >
                                    <div
                                        className={`w-fit px-2 h-6 border border-zinc-300 text-zinc-500 flex items-center justify-center font-bold text-[10px] ${jetBrainsMono.className}`}
                                    >
                                        {edu.year}
                                    </div>

                                    <h3
                                        className={`text-sm lg:text-lg text-zinc-600 font-bold leading-tight ${bricolageGrotesque.className}`}
                                    >
                                        {edu.school}
                                    </h3>

                                    <div
                                        className={`border-l-2 border-zinc-500 text-zinc-500 pl-2 font-bold text-[11px] ${jetBrainsMono.className}`}
                                    >
                                        {edu.major}
                                    </div>

                                    <p
                                        className={`text-zinc-500 text-[11px] leading-snug ${jetBrainsMono.className}`}
                                    >
                                        {edu.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Work Experience */}
                    <div className="w-full lg:w-1/3 border border-zinc-400 overflow-hidden">
                        {/* Header */}
                        <div className="border-b border-zinc-400">
                            <div className="flex justify-between items-center py-3 px-4 md:px-5">
                                <div className="flex items-center gap-2">
                                    <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-black" />
                                    <span className="text-zinc-500 font-mono font-bold text-xs lg:text-sm">
                                        WORK EXPERIENCE
                                    </span>
                                </div>

                                <span className="text-zinc-400 font-mono font-bold text-[10px] text-xs lg:text-sm">
                                    PRACTICE LOG
                                </span>
                            </div>
                        </div>

                        {/* Body */}
                        <div className="max-h-[70vh] lg:h-[60vh] overflow-y-auto p-3 md:p-4">
                            {experiences.map((exp, index) => (
                                <div
                                    key={index}
                                    className="w-full border bg-zinc-50 border-zinc-400 border-l-[5px] p-3 flex flex-col gap-2 mb-3 hover:border-l-zinc-700 transition-colors duration-300 ease-in-out"
                                >
                                    <div
                                        className={`w-fit px-2 h-6 border border-zinc-300 text-zinc-500 flex items-center justify-center font-bold text-[10px] ${jetBrainsMono.className}`}
                                    >
                                        {exp.year}
                                    </div>

                                    <h3
                                        className={`text-sm lg:text-lg text-zinc-600 font-bold leading-tight ${bricolageGrotesque.className}`}
                                    >
                                        {exp.role}
                                    </h3>

                                    <p
                                        className={`text-zinc-500 text-[11px] leading-snug ${jetBrainsMono.className}`}
                                    >
                                        {exp.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
} 
