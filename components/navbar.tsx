import Image from "next/image";
import { GitHub, LinkedIn } from "@deemlol/next-icons";
import { jetBrainsMono } from "@/components/fonts";
import { BiPlus } from "react-icons/bi";

export default function Navbar() {
    return (
        <section id="navbar">
            <div className="h-16 w-screen border-b-2 border-zinc-300 flex justify-between">
                <div className="flex h-full items-center ml-3 md:mx-6">
                    <Image
                        src="/next.svg"
                        alt="Next.js Logo"
                        width={100}
                        height={40}
                        priority
                    />
                    <span
                        className={`text-zinc-600 ml-5 font-mono font-bold text-[14px] ${jetBrainsMono.className}`}
                    >
                        AGUS / 2026
                    </span>
                </div>

                <div className="hidden md:flex h-full items-center md:mr-12 gap-2">
                    <div
                        className="w-10 h-10 border-2 border-zinc-300 text-zinc-600 flex items-center justify-center font-bold
                                hover:bg-black hover:text-white transition-colors duration-300 ease-in-out hover:border-black"
                    >
                        <GitHub className="h-5 w-5" />
                    </div>
                    <div
                        className="w-10 h-10  border-2 border-zinc-300 text-zinc-600 flex items-center justify-center font-bold
                                hover:bg-black hover:text-white transition-colors duration-300 ease-in-out hover:border-black"
                    >
                        <LinkedIn className="h-5 w-5" />
                    </div>
                </div>

                <div className="flex h-full mr-6 items-center md:mr-12">
                    <button
                        className=" group flex items-center h-10 px-2 border-2 border-zinc-300 text-zinc-800 font-bold transition-all duration-300 hover:bg-black hover:text-white hover:border-black"
                    >
                        <span className={`text-xs ${jetBrainsMono.className}`}>MENU</span>
                        <BiPlus className="h-5 w-5 transition-colors duration-300 -mt-1" />
                    </button>
                </div>
            </div>
        </section>
    );
}
