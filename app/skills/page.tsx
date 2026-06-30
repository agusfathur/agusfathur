import { bricolageGrotesque, jetBrainsMono } from "@/components/fonts";
import DashboardLayout from "@/components/layout";
import { FaPhp, FaNode, FaReact, FaDatabase, FaDocker, FaGitAlt, FaBusinessTime, FaFileAlt, FaBrain, FaChartLine, FaUsers, FaLightbulb, FaComments, FaClock, FaHandshake, FaCertificate } from "react-icons/fa";
import {
    SiTypescript,
    SiNestjs,
    SiPostgresql,
    SiMikrotik,
    SiCodeigniter,
    SiExpress,
    SiMysql,
    SiNotion,
    SiGithub,
    SiJavascript,
    SiTailwindcss,
    SiNextdotjs,
    SiBootstrap,
    SiLaravel,
    SiReact,
    SiJsonwebtokens,
    SiPrisma,
} from "react-icons/si";
import { FaLanguage } from "react-icons/fa";
import { JSX } from "react/jsx-runtime";
import { PiMicrosoftExcelLogo, PiMicrosoftPowerpointLogo, PiMicrosoftWordLogo } from "react-icons/pi";
const SkillGrid = ({ skills }: { skills: { name: string; icon: JSX.Element }[] }) => {
    return (
        <div className="grid grid-cols-4 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {skills.map((skill, index) => (
                <div
                    key={index}
                    className="
                        group
                        rounded-lg
                        border border-zinc-300
                        bg-white
                        p-4
                        transition-all
                        duration-300
                        hover:bg-black
                        hover:border-black
                        hover:-translate-y-1
                        hover:shadow-lg
                    "
                >
                    <div className="flex flex-col gap-3">
                        <div className="text-3xl text-zinc-600 transition-colors duration-300 group-hover:text-white">{skill.icon}</div>

                        <div className="text-sm font-medium text-zinc-700 transition-colors duration-300 group-hover:text-white">{skill.name}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export const metadata = {
    title: "Agus Fathur - Full Stack Developer",
    description: "Personal portfolio website of Agus Fathur, showcasing projects, skills, and contact information.",
    meta: {
        "og:title": "Agus Fathur - Full Stack Developer",
        "og:description": "Personal portfolio website of Agus Fathur, showcasing projects, skills, and contact information.",
        "og:image": "/profile.jpg",
        "og:url": "https://agusfathur.com",
        "twitter:card": "summary_large_image",
        "twitter:title": "Agus Fathur - Full Stack Developer",
        "twitter:description": "Personal portfolio website of Agus Fathur, showcasing projects, skills, and contact information.",
        "twitter:image": "/profile.jpg",
    },
};

export default function SkillsPage() {
    const coreSkills = [
        {
            category: "CORE EXPERTISE",
            items: "Web Applications, RESTful APIs, Business Systems",
        },
        {
            category: "SPECIALIZATION",
            items: "Enterprise & Financial Systems",
        },
        {
            category: "DELIVERY",
            items: "Analysis, Development, Maintenance",
        },
    ];

    const technicalSkills = [
        {
            category: "Backend",
            skills: [
                { name: "PHP", icon: <FaPhp className="text-2xl" /> },
                { name: "Laravel", icon: <SiLaravel className="text-2xl" /> },
                { name: "CodeIgniter", icon: <SiCodeigniter className="text-2xl" /> },
                { name: "Node.js", icon: <FaNode className="text-2xl" /> },
                { name: "NestJS", icon: <SiNestjs className="text-2xl" /> },
                { name: "Express.js", icon: <SiExpress className="text-2xl" /> },
                { name: "RESTful API", icon: <FaGitAlt className="text-2xl" /> },
                { name: "JWT", icon: <SiJsonwebtokens className="text-2xl" /> },
                { name: "Prisma", icon: <SiPrisma className="text-2xl" /> },
            ],
        },
        {
            category: "Frontend",
            skills: [
                { name: "JavaScript", icon: <SiJavascript className="text-2xl" /> },
                { name: "TypeScript", icon: <SiTypescript className="text-2xl" /> },
                { name: "React.js", icon: <FaReact className="text-2xl" /> },
                { name: "Next.js", icon: <SiNextdotjs className="text-2xl" /> },
                { name: "Laravel", icon: <SiLaravel className="text-2xl" /> },
                { name: "CodeIgniter", icon: <SiCodeigniter className="text-2xl" /> },
                { name: "Tailwind CSS", icon: <SiTailwindcss className="text-2xl" /> },
                { name: "Bootstrap", icon: <SiBootstrap className="text-2xl" /> },
                { name: "Zustand State Management", icon: <SiReact className="text-2xl" /> },
            ],
        },
        {
            category: "Database",
            skills: [
                { name: "MySQL", icon: <SiMysql className="text-2xl" /> },
                { name: "SqlServer", icon: <FaDatabase className="text-2xl" /> },
                { name: "PostgreSQL", icon: <SiPostgresql className="text-2xl" /> },
            ],
        },
        {
            category: "DevOps & Tools",
            skills: [
                { name: "Docker", icon: <FaDocker className="text-2xl" /> },
                { name: "CI/CD", icon: <FaGitAlt className="text-2xl" /> },
                { name: "Notion", icon: <SiNotion className="text-2xl" /> },
                { name: "GitHub", icon: <SiGithub className="text-2xl" /> },
            ],
        },
        {
            category: "Networking",
            skills: [
                { name: "MikroTik", icon: <SiMikrotik className="text-2xl" /> },
                { name: "Network Infrastructure", icon: <SiMikrotik className="text-2xl" /> },
            ],
        },
        {
            category: "Office Tools",
            skills: [
                { name: "Microsoft Word", icon: <PiMicrosoftWordLogo className="text-2xl" /> },
                { name: "Microsoft Excel", icon: <PiMicrosoftExcelLogo className="text-2xl" /> },
                { name: "Microsoft Powerpoint", icon: <PiMicrosoftPowerpointLogo className="text-2xl" /> },
                { name: "Microsoft Outlook", icon: <PiMicrosoftWordLogo className="text-2xl" /> },
            ],
        },
        {
            category: "Business & Analysis",
            skills: [
                { name: "Business Analysis", icon: <FaBusinessTime className="text-2xl" /> },
                { name: "System Integration", icon: <FaBusinessTime className="text-2xl" /> },
                { name: "Requirements Gathering", icon: <FaFileAlt className="text-2xl" /> },
                { name: "ERD", icon: <FaDatabase className="text-2xl" /> },
                { name: "API Design", icon: ( <p className={`text-sm ${jetBrainsMono.className}`}>200</p> ), },
                { name: "Technical Documentation", icon: <FaGitAlt className="text-2xl" /> },
            ],
        },
    ];

    const professionalSkills = [
        {
            category: "Core Skills",
            skills: [
                { name: "Problem Solving", icon: <FaLightbulb className="text-2xl" /> },
                { name: "Analytical Thinking", icon: <FaBrain className="text-2xl" /> },
                { name: "Leadership", icon: <FaUsers className="text-2xl" /> },
                { name: "Initiative", icon: <FaChartLine className="text-2xl" /> },
                { name: "Cross-Functional Collaboration", icon: <FaHandshake className="text-2xl" /> },
                { name: "Technical Communication", icon: <FaComments className="text-2xl" /> },
                { name: "Time Management", icon: <FaClock className="text-2xl" /> },
                { name: "Finance & Business Knowledge", icon: <FaBusinessTime className="text-2xl" /> },
            ],
        },
        {
            category: "Languages",
            skills: [
                { name: "Bahasa Indonesia", icon: <FaLanguage className="text-2xl" /> },
                { name: "English", icon: <FaLanguage className="text-2xl" /> },
            ],
        },
    ];

    return (
        <DashboardLayout>
            <div className="flex-1 flex-col px-8 md:px-12 pt-12 pb-20">
                {/* Breadcrumb & Title */}
                <div className="mb-8">
                    <div className={`text-sm md:text-md font-mono text-zinc-500 uppercase ${jetBrainsMono.className}`}>SKILLS / CAPABILITIES</div>
                    <div className={`text-3xl lg:text-5xl text-zinc-950 font-bold lg:leading-[0.9em] mt-5 ${bricolageGrotesque.className}`}>My Skills & Capabilities</div>
                </div>

                {/* Core Direction Section */}
                <div className="border border-zinc-300 bg-zinc-50 rounded-lg p-8 mb-8">
                    <div className={`text-xs font-mono text-zinc-600 uppercase tracking-wider mb-4 ${jetBrainsMono.className}`}>CORE EXPERTISE</div>

                    <div className={`text-2xl md:text-3xl lg:text-4xl text-zinc-950 font-bold leading-tight mb-6 ${bricolageGrotesque.className}`}>
                        Full-Stack Web Development, RESTful APIs, Business Systems, and Financial Applications.
                    </div>

                    <p className="text-zinc-600 text-sm md:text-base mb-8 leading-relaxed">
                        I design and develop scalable web applications from frontend interfaces to backend services and relational databases. My experience includes building RESTful APIs, enterprise
                        business systems, financial applications, and production management solutions that improve operational efficiency and support business growth.
                    </p>

                    {/* Capabilities Table */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {coreSkills.map((skill, index) => (
                            <div key={index} className="border border-zinc-300 p-4 rounded">
                                <div className={`text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2 ${jetBrainsMono.className}`}>{skill.category}</div>

                                <div className={`text-sm md:text-base text-zinc-950 font-semibold ${bricolageGrotesque.className}`}>{skill.items}</div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* TECHNICAL SKILLS */}
                <div className="mt-8">
                    <div className={`text-xs font-mono text-zinc-500 uppercase tracking-wider mb-6 flex items-center gap-2 ${jetBrainsMono.className}`}>
                        <span className="text-green-500">$</span>
                        <span>ls ./technical-skills</span>
                    </div>

                    <div className="space-y-4">
                        {technicalSkills.map((skillGroup, index) => (
                            <div key={index} className="rounded-lg border border-zinc-300 bg-white overflow-hidden transition-all duration-300">
                                {/* Terminal title bar */}
                                <div className="flex items-center gap-2 px-4 py-2.5 border-b border-zinc-300 bg-zinc-100">
                                    <div className="flex gap-1.5">
                                        <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                                        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                                        <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                                    </div>

                                    <span className={`text-xs text-zinc-600 ml-2 ${jetBrainsMono.className}`}>
                                        <span className="text-blue-500 mr-1">~/skills</span>
                                        {skillGroup.category.toLowerCase().replace(/\s+/g, "-")}
                                    </span>
                                </div>

                                {/* Prompt line */}
                                <div className={`px-4 pt-3 pb-1 text-xs flex items-center gap-2 ${jetBrainsMono.className}`}>
                                    <span className="text-blue-500">❯</span>
                                    <span className="text-zinc-600">{skillGroup.category}</span>
                                </div>

                                <div className="px-4 pb-4 pt-1">
                                    <SkillGrid skills={skillGroup.skills} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* PROFESSIONAL SKILLS */}
                <div className="mt-8 mb-12">
                    <div className={`text-xs font-mono text-zinc-500 uppercase tracking-wider mb-6 flex items-center gap-2 ${jetBrainsMono.className}`}>
                        <span className="text-blue-400">$</span>
                        <span>ls ./professional-skills</span>
                    </div>

                    <div className="space-y-4">
                        {professionalSkills.map((skillGroup, index) => (
                            <div key={index} className="rounded-lg border border-zinc-300 bg-white overflow-hidden transition-all duration-300">
                                {/* Terminal title bar */}
                                <div className="flex items-center gap-2 px-4 py-2.5 border-b border-zinc-300 bg-zinc-100">
                                    <div className="flex gap-1.5">
                                        <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                                        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                                        <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                                    </div>

                                    <span className={`text-xs text-zinc-600 ml-2 ${jetBrainsMono.className}`}>
                                        <span className="text-blue-500 mr-1">~/skills</span>
                                        {skillGroup.category.toLowerCase().replace(/\s+/g, "-")}
                                    </span>
                                </div>

                                {/* Prompt line */}
                                <div className={`px-4 pt-3 pb-1 text-xs flex items-center gap-2 ${jetBrainsMono.className}`}>
                                    <span className="text-blue-500">❯</span>
                                    <span className="text-zinc-600">{skillGroup.category}</span>
                                </div>

                                <div className="px-4 pb-4 pt-1">
                                    <SkillGrid skills={skillGroup.skills} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
