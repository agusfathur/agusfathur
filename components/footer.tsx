import { jetBrainsMono } from "@/components/fonts";

export default function Footer() {
    return (
        <footer id="footer" className={jetBrainsMono.className}>
            <div className="h-8 border-t-2 border-zinc-300 flex items-center  text-zinc-400  text-xs font-mono">
                <div className="mx-6 justify-between flex w-full flex-row items-center uppercase">
                    <span className="">Full Stack Developer</span>
                    <span className="">automation / ai / gis</span>
                    <span className="">@agusfathur</span>
                </div>
            </div>
        </footer>
    );
}
