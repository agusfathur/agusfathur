"use client";

import { useState } from "react";
import { bricolageGrotesque, jetBrainsMono } from "@/components/fonts";
import DashboardLayout from "@/components/layout";
import Image from "next/image";
import {
    SiNextdotjs,
    SiReact,
    SiLaravel,
    SiTypescript,
    SiTailwindcss,
    SiPostgresql,
    SiMysql,
    SiNestjs,
    SiExpress,
    SiPrisma,
    SiDocker,
    SiBootstrap,
} from "react-icons/si";
import { FaPhp, FaNode, FaGitAlt, FaDatabase } from "react-icons/fa";
import { BiChevronLeft, BiChevronRight, BiLockAlt, BiLinkExternal, BiX } from "react-icons/bi";
import { JSX } from "react";

type ProjectStatus = "Active development" | "Release channel" | "Concept build" | "App production" | "NFT production";



interface Project {
    id: number;
    year: string;
    category: string;
    title: string;
    status: ProjectStatus;
    type: string;
    techYear: string;
    tech: string;
    statusLabel: string;
    description: string;
    notes: string;
    stack: { name: string; icon: JSX.Element }[];
    repo?: string;
    live?: string;
    private?: boolean;
    screenshots?: string[];
}

const projects: Project[] = [
    {
        id: 1,
        year: "2024 / THESIS PROJECT",
        category: "THESIS PROJECT",
        title: "Payroll and Attendance Management System",
        status: "App production",
        type: "Enterprise System",
        techYear: "October 2024 – January 2025",
        tech: "Next.js + Express.js",
        statusLabel: "Thesis Project",
        description:
            "Designed and developed a role-based payroll and attendance system with features including location-based attendance, schedule management, leave and overtime tracking, and reporting.",
        notes: "Built using Next.js (frontend) and Express.js with layered architecture, PostgreSQL database, JWT authentication, Zustand state management, and RESTful API integration. Implemented Google Maps for location tracking and Cloudinary for media management with structured and scalable database and API design.",
        stack: [
            { name: "Next.js", icon: <SiNextdotjs /> },
            { name: "Express.js", icon: <SiExpress /> },
            { name: "PostgreSQL", icon: <SiPostgresql /> },
            { name: "TypeScript", icon: <SiTypescript /> },
            { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        ],
        private: false,
        screenshots: ["/projects/sigma_1.png", "/projects/sigma_2.png", "/projects/sigma_3.png", "/projects/sigma_4.png", "/projects/sigma_5.png"],
    },
    {
        id: 2,
        year: "2025 / FREELANCE PROJECT",
        category: "FREELANCE PROJECT",
        title: "Sports Court Booking System",
        status: "App production",
        type: "Booking System",
        techYear: "May 2025 – July 2025",
        tech: "Laravel + MySQL",
        statusLabel: "Freelance Project",
        description:
            "Developed a web-based sports court booking system using Laravel, MySQL, and Bootstrap, featuring court management, reservation, payment, and review modules.",
        notes: "Implemented automated order expiration and WhatsApp review notification using Laravel Scheduler to improve operational efficiency. Designed database structure and system architecture covering multi-role access (Admin & User), transaction flow, and financial reporting.",
        stack: [
            { name: "Laravel", icon: <SiLaravel /> },
            { name: "MySQL", icon: <SiMysql /> },
            { name: "Bootstrap", icon: <SiBootstrap /> },
            { name: "PHP", icon: <FaPhp /> },
        ],
        private: false,
        live: "https://lapangan.agusfathur.my.id",
        screenshots : ["/projects/goatsc_1.png", "/projects/goatsc_2.png", "/projects/goatsc_3.png", "/projects/goatsc_4.png", "/projects/goatsc_5.png"],
    },
    {
        id: 3,
        year: "2024 / INTERN PROJECT",
        category: "INTERN PROJECT",
        title: "E-Cafe",
        status: "App production",
        type: "Cashier System",
        techYear: "January 2024 – February 2024",
        tech: "Laravel 8 + MySQL",
        statusLabel: "Intern Project",
        description:
            "Developed a web-based Point of Sale (POS) system using Laravel 8 and Bootstrap 5, featuring inventory management, order processing, online payment integration, transaction management, and comprehensive reporting.",
        notes: "Designed database structure and backend logic to ensure data consistency and operational efficiency.",
        stack: [
            { name: "Laravel", icon: <SiLaravel /> },
            { name: "MySQL", icon: <SiMysql /> },
            { name: "Bootstrap", icon: <SiBootstrap /> },
            { name: "PHP", icon: <FaPhp /> },
        ],
        private: false,
        live: "https://cafe.agusfathur.my.id",
        screenshots: ["/projects/cafe_1.png"],
    },  
];

const statusColors: Record<ProjectStatus, string> = {
    "Active development": "bg-green-100 text-green-700 border-green-300",
    "Release channel": "bg-blue-100 text-blue-700 border-blue-300",
    "Concept build": "bg-yellow-100 text-yellow-700 border-yellow-300",
    "App production": "bg-purple-100 text-purple-700 border-purple-300",
    "NFT production": "bg-orange-100 text-orange-700 border-orange-300",
};

export default function ProjectsPage() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const active = projects[activeIndex];

    const goNext = () => setActiveIndex((i) => (i + 1) % projects.length);
    const goPrev = () => setActiveIndex((i) => (i - 1 + projects.length) % projects.length);

    const openModal = (index: number) => {
        setCurrentImageIndex(index);
        setIsModalOpen(true);
    };

    const closeModal = () => setIsModalOpen(false);

    const goNextImage = () => {
        if (active.screenshots) {
            setCurrentImageIndex((i) => (i + 1) % active.screenshots!.length);
        }
    };

    const goPrevImage = () => {
        if (active.screenshots) {
            setCurrentImageIndex((i) => (i - 1 + active.screenshots!.length) % active.screenshots!.length);
        }
    };

    return (
        <DashboardLayout>
            <div className={`flex flex-col h-full ${jetBrainsMono.className}`}>
                {/* Page Header */}
                <div className="px-8 pt-8 pb-2 ">
                    <div className={`text-xs text-zinc-400 uppercase tracking-widest mb-2`}>
                        2024 - Present / SELECTED PROJECTS
                    </div>
                    <div className={`text-4xl md:text-5xl text-zinc-950 font-bold ${bricolageGrotesque.className}`}>
                        Project archive.
                    </div>
                </div>

                {/* Two-panel layout */}
                <div className="flex flex-1 overflow-hidden mx-8 my-2">
                    <div className="flex flex-1 overflow-hidden border border-zinc-300 ">
                    {/* LEFT: Project List */}
                    <div className="w-72 flex-shrink-0 border-r-2 border-zinc-300 overflow-y-auto bg-white">
                        {/* List Header */}
                        <div className="flex items-center justify-between px-5 h-16 border-b-2 border-zinc-300 bg-zinc-50">
                            <span className="text-xs uppercase tracking-wider text-zinc-500 font-semibold">Project list</span>
                            <span className="text-xs text-zinc-400 font-mono">{projects.length} projects</span>
                        </div>

                        {/* List Items */}
                        <div className="flex flex-col">
                            {projects.map((project, index) => {
                                const isActive = index === activeIndex;
                                return (
                                    <button
                                        key={project.id}
                                        onClick={() => setActiveIndex(index)}
                                        className={`text-left px-5 py-4 border-b border-zinc-200 transition-all duration-200
                                            ${isActive ? "bg-zinc-950 text-white border-zinc-950" : "bg-white hover:bg-zinc-50 text-zinc-700"}`}
                                    >
                                        <div className={`text-[10px] uppercase tracking-wider mb-1 ${isActive ? "text-zinc-400" : "text-zinc-400"}`}>
                                            {project.year}
                                        </div>
                                        <div className={`text-sm font-bold leading-tight mb-2 ${isActive ? "text-white" : "text-zinc-900"} ${bricolageGrotesque.className}`}>
                                            {project.title}
                                        </div>
                                        <div className={`text-[10px] uppercase tracking-wide ${isActive ? "text-zinc-300" : "text-zinc-500"}`}>
                                            {project.statusLabel}
                                        </div>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* RIGHT: Project Dossier */}
                    <div className="flex-1 overflow-y-auto bg-zinc-50">
                        {/* Dossier Top Bar */}
                        <div className="flex items-center justify-between px-6 h-16 border-b-2 border-zinc-300 bg-white sticky top-0 z-10">
                            <span className="text-xs uppercase tracking-wider text-zinc-500 font-semibold">Project dossier</span>
                            <div className="flex items-center gap-2">
                                {/* Status badge */}
                                <span className={`text-[10px] px-2.5 py-1 border rounded uppercase tracking-wider font-semibold ${statusColors[active.status]}`}>
                                    {active.status}
                                </span>
                                {active.private && (
                                    <span className="text-[10px] px-2.5 py-1 border border-zinc-300 rounded uppercase tracking-wider text-zinc-500 flex items-center gap-1">
                                        <BiLockAlt className="text-xs" /> Private
                                    </span>
                                )}
                                {/* Navigation */}
                                <div className="flex items-center gap-1 ml-2">
                                    <button
                                        onClick={goPrev}
                                        className="w-7 h-7 border-2 border-zinc-300 flex items-center justify-center hover:bg-zinc-950 hover:text-white hover:border-zinc-950 transition-colors duration-200"
                                    >
                                        <BiChevronLeft className="text-lg text-zinc-400" />
                                    </button>
                                    <span className="text-[10px] text-zinc-400 px-2 font-mono">
                                        Project {activeIndex + 1} of {projects.length}
                                    </span>
                                    <button
                                        onClick={goNext}
                                        className="w-7 h-7 border-2 border-zinc-300 flex items-center justify-center hover:bg-zinc-950 hover:text-white hover:border-zinc-950 transition-colors duration-200"
                                    >
                                        <BiChevronRight className="text-lg text-zinc-400" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Dossier Content */}
                        <div className="px-8 py-8">
                            {/* Year / Category */}
                            <div className="text-xs text-zinc-400 uppercase tracking-widest mb-3">
                                {active.year}
                            </div>

                            {/* Title */}
                            <h2 className={`text-4xl md:text-5xl font-bold text-zinc-950 mb-8 ${bricolageGrotesque.className}`}>
                                {active.title}
                            </h2>

                            {/* Main Grid */}
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                {/* Left col — Screenshots + Description */}
                                <div className="lg:col-span-2 space-y-6">
                                    {/* Screenshots */}
                                    <div className="border-2 border-zinc-300 rounded bg-white p-4">
                                        <div className="flex items-center justify-between mb-3 pb-3 border-b border-zinc-200">
                                            <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-semibold">Screenshots</span>
                                            {active.screenshots && active.screenshots.length > 0 && (
                                                <span className="text-[10px] text-zinc-400 font-mono">{active.screenshots.length} images</span>
                                            )}
                                        </div>
                                        <div 
                                            className="border border-zinc-200 rounded bg-white aspect-video flex items-center justify-center overflow-hidden cursor-pointer hover:border-zinc-400 transition-colors"
                                            onClick={() => active.screenshots && active.screenshots.length > 0 && openModal(0)}
                                        >
                                            {active.screenshots && active.screenshots.length > 0 ? (
                                                <div className="w-full h-full relative">
                                                
                                                    <div className="absolute inset-0 bg-opacity-0 hover:bg-opacity-5 transition-all flex items-center justify-center group">
                                                        <span className="text-zinc-700 text-xs uppercase tracking-wider opacity-0 group-hover:opacity-100 bg-white px-3 py-1.5 rounded border border-zinc-300 font-semibold transition-opacity">
                                                            Click to view gallery
                                                        </span>
                                                        <Image 
                                                        src={active.screenshots[0]} 
                                                        alt="Project screenshot preview" 
                                                        fill
                                                        className="object-contain"
                                                    />
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className="text-zinc-300 text-xs uppercase tracking-wider">No screenshots</div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Description Section */}
                                    <div className="border-2 border-zinc-300 rounded bg-white p-5">
                                        <div className="text-[10px] uppercase tracking-widest text-zinc-500 font-semibold mb-3 pb-3 border-b border-zinc-200">
                                            Description
                                        </div>
                                        <p className="text-sm text-zinc-700 leading-relaxed mb-4">
                                            {active.description}
                                        </p>

                                        {/* Notes */}
                                        <div className="border-l-4 border-zinc-300 pl-4 mt-5 pt-4 border-t border-zinc-200">
                                            <div className="text-[10px] uppercase tracking-widest text-zinc-400 mb-2">Technical Notes</div>
                                            <p className="text-xs text-zinc-600 leading-relaxed">
                                                {active.notes}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Right col — Meta */}
                                <div className="space-y-6">
                                    {/* Progress */}
                                    <div className="border-2 border-zinc-300 rounded bg-white p-5">
                                        <div className="text-[10px] uppercase tracking-widest text-zinc-400 mb-2 pb-2 border-b border-zinc-200">Progress</div>
                                        <div className={`text-lg font-bold text-zinc-900 mt-3 ${bricolageGrotesque.className}`}>
                                            {active.status}
                                        </div>
                                        <div className="text-[10px] text-zinc-400 uppercase tracking-wide mt-1">
                                            Current portfolio status
                                        </div>
                                    </div>

                                    {/* Project Info Grid */}
                                    <div className="border-2 border-zinc-300 rounded bg-white p-5">
                                        <div className="text-[10px] uppercase tracking-widest text-zinc-400 mb-3 pb-3 border-b border-zinc-200 font-semibold">Project Info</div>
                                        <div className="space-y-4">
                                            <div className="pb-3 border-b border-zinc-100">
                                                <div className="text-[10px] uppercase tracking-widest text-zinc-400 mb-1">Type</div>
                                                <div className="text-sm font-semibold text-zinc-800">{active.type}</div>
                                            </div>
                                            <div className="pb-3 border-b border-zinc-100">
                                                <div className="text-[10px] uppercase tracking-widest text-zinc-400 mb-1">Timeline</div>
                                                <div className="text-sm font-semibold text-zinc-800">{active.techYear}</div>
                                            </div>
                                            <div className="pb-3 border-b border-zinc-100">
                                                <div className="text-[10px] uppercase tracking-widest text-zinc-400 mb-1">Tech Stack</div>
                                                <div className="text-sm font-semibold text-zinc-800">{active.tech}</div>
                                            </div>
                                            <div>
                                                <div className="text-[10px] uppercase tracking-widest text-zinc-400 mb-1">Status</div>
                                                <div className="text-sm font-semibold text-zinc-800">{active.statusLabel}</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Stack */}
                                    <div className="border-2 border-zinc-300 rounded bg-white p-5">
                                        <div className="text-[10px] uppercase tracking-widest text-zinc-400 mb-3 pb-3 border-b border-zinc-200 font-semibold">Tech Stack</div>
                                        <div className="flex flex-wrap gap-2">
                                            {active.stack.map((s, i) => (
                                                <div
                                                    key={i}
                                                    className="flex items-center gap-2 px-3 py-2 border-2 border-zinc-300 rounded bg-white text-zinc-700 hover:bg-zinc-950 hover:text-white hover:border-zinc-950 transition-colors duration-200 text-xs font-semibold"
                                                    title={s.name}
                                                >
                                                    <span className="text-lg">{s.icon}</span>
                                                    <span className="text-[10px] uppercase tracking-wide">{s.name}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Repos / Links */}
                                    <div className="border-2 border-zinc-300 rounded bg-white p-5">
                                        <div className="text-[10px] uppercase tracking-widest text-zinc-400 mb-3 pb-3 border-b border-zinc-200 font-semibold">Access</div>
                                        {active.private ? (
                                            <button className="flex items-center gap-2 px-4 py-2.5 border-2 border-zinc-300 rounded text-xs font-semibold text-zinc-600 hover:bg-zinc-950 hover:text-white hover:border-zinc-950 transition-colors duration-200 w-full justify-center">
                                                <BiLockAlt className="text-sm" />
                                                Private repo
                                            </button>
                                        ) : active.live ? (
                                            <a
                                                href={active.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 px-4 py-2.5 border-2 border-zinc-300 rounded text-xs font-semibold text-zinc-600 hover:bg-zinc-950 hover:text-white hover:border-zinc-950 transition-colors duration-200 w-full justify-center"
                                            >
                                                <BiLinkExternal className="text-sm" />
                                                View live
                                            </a>
                                        ) : (
                                            <button className="flex items-center gap-2 px-4 py-2.5 border-2 border-zinc-300 rounded text-xs text-zinc-400 cursor-default w-full justify-center">
                                                No public link
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>

            {/* Screenshot Modal */}
            {isModalOpen && active.screenshots && active.screenshots.length > 0 && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
                    onClick={closeModal}
                >
                    <button
                        onClick={closeModal}
                        className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors border-2 border-white rounded z-50"
                    >
                        <BiX className="text-2xl" />
                    </button>

                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            goPrevImage();
                        }}
                        className="absolute left-4 w-12 h-12 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors border-2 border-white rounded"
                    >
                        <BiChevronLeft className="text-3xl" />
                    </button>

                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            goNextImage();
                        }}
                        className="absolute right-4 w-12 h-12 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors border-2 border-white rounded"
                    >
                        <BiChevronRight className="text-3xl" />
                    </button>

                    <div 
                        className="relative w-[90vw] h-[90vh] flex items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={active.screenshots[currentImageIndex]}
                            alt={`Screenshot ${currentImageIndex + 1}`}
                            fill
                            className="object-contain"
                        />
                        
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-75 text-white px-4 py-2 rounded text-sm font-mono">
                            {currentImageIndex + 1} / {active.screenshots.length}
                        </div>
                    </div>
                </div>
            )}
        </DashboardLayout>
    );
}
