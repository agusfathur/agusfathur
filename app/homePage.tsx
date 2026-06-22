"use client";
import { ArrowUpRight } from "@deemlol/next-icons";
import { bricolageGrotesque, jetBrainsMono } from "@/components/fonts";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
    const buildTexts = ["full-stack web apps", "automation scripts", "AI-powered tools", "GIS applications"];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % buildTexts.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [buildTexts.length]);

    return (
        <section id="content" className="flex-1 p-4 text-zinc-600 mt-4 lg:mt-12 xl:mt-20">
            <div className="flex justify-between mx-5">
                {/* Left side */}
                <div className="flex flex-col w-full gap-4 lg:w-[40%]">
                    <div className={`text-sm font-mono text-zinc-400 uppercase ${jetBrainsMono.className}`}>Portfolio 2026 / web + automation + AI + GIS</div>
                    <div className={bricolageGrotesque.className}>
                        <span className="text-4xl lg:text-6xl xl:text-8xl font-extrabold text-zinc-950">Agus Fathur</span>
                    </div>
                    <div className={`text-zinc-950 text-2xl lg:text-3xl xl:text-4xl mt-2 lg:mt-5 font-semibold items-center flex ${bricolageGrotesque.className}`}>
                        I build
                        {/* Animated Text */}
                        <div className="inline-block px-2 py-1 bg-black text-white ml-2 overflow-hidden">
                            <span key={index} className="inline-block animate-slide-up ease-in-out">
                                {buildTexts[index]}
                            </span>
                        </div>
                    </div>
                    <div className={`text-zinc-400 text-sm lg:text-md xl:text-lg mt-2 lg:mt-4 xl:mt-8 ${bricolageGrotesque.className}`}>
                        I build full-stack web products from interface to database, then add automation, AI, data, or GIS when needed.
                    </div>
                    <div className={`flex sm:flex-row gap-3 sm:gap-4 mt-6 xl:mt-16 ${jetBrainsMono.className}`}>
                        <Link
                            href="/projects"
                            className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-3 text-xs font-semibold uppercase text-white bg-black border border-black transition-colors duration-300 ease-in-out hover:bg-zinc-800"
                        >
                            <span>VIEW PROJECTS</span>
                            <ArrowUpRight className="w-4 h-4 lg:w-5 lg:h-5" strokeWidth={2} />
                        </Link>

                        <Link
                            href="#"
                            className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-3 text-xs font-semibold uppercase text-zinc-600 border border-zinc-300 transition-colors duration-300 ease-in-out hover:border-black hover:bg-black hover:text-white"
                        >
                            <span>OPEN CV</span>
                            <ArrowUpRight className="w-4 h-4 lg:w-5 lg:h-5" strokeWidth={2} />
                        </Link>
                    </div>
                </div>

                {/* Profile Picture */}
                <div className="relative lg:w-[45%] lg:h-80 xl:h-96 overflow-hidden hidden lg:block">
                    {/* Label */}
                    <div className="absolute top-5 left-5 z-30 xl:top-4 xl:left-24">
                        <span
                            className={`inline-block px-3 py-2 border border-black bg-black text-[10px] tracking-[0.2em] text-white 
                                hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer ${jetBrainsMono.className}`}
                        >
                            FULL-STACK DEVELOPER
                        </span>
                    </div>

                    {/* Profile */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative group">
                            {/* Corner Top Right */}
                            <div className="absolute -top-6 -right-6 w-10 h-10 border-r border-t border-zinc-400 group-hover:w-16 group-hover:h-16 transition-all duration-300 ease-in-out"></div>

                            {/* Corner Bottom Left */}
                            <div className="absolute -bottom-6 -left-6 w-10 h-10 border-l border-b border-zinc-400 group-hover:w-16 group-hover:h-16 transition-all duration-300 ease-in-out"></div>

                            {/* Corner Bottom Right */}
                            <div className="absolute -bottom-6 -right-6 w-10 h-10 border-r border-b border-zinc-400 group-hover:w-16 group-hover:h-16 transition-all duration-300 ease-in-out"></div>

                            {/* Image */}
                            <Image
                                src="/pp.jpg"
                                alt="Profile Picture"
                                width={260}
                                height={260}
                                className=" w-60 h-60 lg:w-80 lg:h-80 object-cover grayscale transition-all duration-700 cursor-pointer hover:grayscale-0 hover:scale-105"
                            />
                        </div>
                    </div>

                    {/* Info */}
                    <div className={`absolute bottom-5 left-5 text-[10px] tracking-[0.2em] text-zinc-400 ${jetBrainsMono.className}`}>EST. 2023</div>

                    {/* Kotak dekorasi kanan bawah */}
                    <div className="absolute bottom-6 right-6 w-8 h-8 xl:w-10 xl:h-10 xl:bottom-10 xl:right-4 border border-zinc-400"></div>
                </div>
            </div>

            {/* card section */}
            <div className="relative flex w-[98%] mx-5 mt-8 border border-zinc-300 lg:mt-20 xl:mt-20">
                {/* Intro */}
                <div className="w-[30%] border-r h-40 border-zinc-300 p-3 relative overflow-hidden group flex flex-col justify-between transition-all duration-300 hover:bg-zinc-950 hover:text-white">
                    <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-zinc-500/20 blur-3xl"></div>
                    <div className="absolute -bottom-16 -left-16 w-40 h-40 rounded-full bg-zinc-500/20 blur-3xl"></div>

                    <div className={`relative z-10 text-md text-zinc-500 font-bold ${jetBrainsMono.className}`}>CAPABILITY MAP</div>

                    <div className={`relative z-10 text-md leading-tight font-bold text-zinc-950 mt-6 group-hover:text-white xl:text-2xl ${bricolageGrotesque.className}`}>
                        These are the areas I combine inside projects. They are a quick summary, not page shortcuts.
                    </div>
                </div>

                {/* Cards */}
                <div className="flex-1 grid grid-cols-4 h-40 overflow-hidden">
                    {[
                        {
                            no: "01",
                            title: "WEB CORE",
                            subtitle: "Full-Stack Products",
                            desc: "Developing modern web applications with responsive interfaces, backend services, APIs, authentication, and deployment pipelines.",
                        },
                        {
                            no: "02",
                            title: "DATABASE",
                            subtitle: "Data Architecture",
                            desc: "Designing relational databases, optimizing queries, managing data integrity, and building scalable storage solutions.",
                        },
                        {
                            no: "03",
                            title: "FINANCE",
                            subtitle: "Financial Systems",
                            desc: "Building accounting, payroll, budgeting, reporting, and transaction management solutions for business operations.",
                        },
                        {
                            no: "04",
                            title: "BUSINESS INTEGRATION",
                            subtitle: "Connected Workflows",
                            desc: "Integrating applications, services, APIs, and business processes into unified and efficient operational ecosystems.",
                        },
                    ].map((item) => (
                        <div
                            key={item.no}
                            className="group border-l overflow-hidden relative border-zinc-300 p-3  flex flex-col justify-between transition-all duration-300 hover:bg-zinc-950 hover:text-white"
                        >
                            <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-zinc-500/20 blur-3xl"></div>
                            <div className="absolute -bottom-16 -left-16 w-28 h-28 rounded-full bg-zinc-500/20 blur-3xl"></div>
                            <div className="flex justify-between items-start">
                                <div className={`text-[10px] tracking-widest text-zinc-500 group-hover:text-zinc-400 ${jetBrainsMono.className}`}>{item.title}</div>
                                <div className={`text-[10px] text-zinc-400 group-hover:text-zinc-500 ${jetBrainsMono.className}`}>{item.no}</div>
                            </div>

                            <div className="my-3">
                                <h3 className={`text-md font-bold ${bricolageGrotesque.className}`}>{item.subtitle}</h3>
                            </div>

                            <p className="text-[10px] leading-tight text-zinc-500 group-hover:text-zinc-300">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
