import Image from "next/image";
import { GitHub, LinkedIn } from "@deemlol/next-icons";
import { jetBrainsMono } from "@/components/fonts";

export default function Navbar() {
    return (
        <section id="navbar">
            <div className="h-16 w-full border-b-2 border-zinc-300 flex justify-between">
                <div className="flex h-full items-center mx-6">
                    <Image src="/next.svg" alt="Next.js Logo" width={100} height={40} priority />
                    <span className={`text-zinc-600 ml-5 font-mono font-bold text-[14px] ${jetBrainsMono.className}`}>AGUS / 2026</span>
                </div>

                <div className="flex h-full items-center mx-6 gap-2">
                    <div
                        className="w-10 h-10 border-2 border-zinc-300 text-zinc-600 flex items-center justify-center font-bold
                                hover:bg-black hover:text-white transition-colors duration-300 ease-in-out"
                    >
                        <GitHub className="h-5 w-5" />
                    </div>
                    <div
                        className="w-10 h-10  border-2 border-zinc-300 text-zinc-600 flex items-center justify-center font-bold
                                hover:bg-black hover:text-white transition-colors duration-300 ease-in-out"
                    >
                        <LinkedIn className="h-5 w-5" />
                    </div>
                </div>
            </div>
        </section>
    );
}
