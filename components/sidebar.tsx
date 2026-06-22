"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { jetBrainsMono } from "@/components/fonts";
import { useTransitionStore } from "@/stores/useTransitionStore";

export default function Sidebar() {
    const pathname = usePathname();
    const router = useRouter();

    const menus = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/projects", label: "Projects" },
        { href: "/skills", label: "Skills" },
        { href: "/contact", label: "Contact" },
    ];

    const startTransition = useTransitionStore(
        (state) => state.startTransition,
    );

    const navigate = (e : React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
        e.preventDefault();
        if (pathname === href) return;

        startTransition();
        router.push(href);
    };
    
    return (
        <div id="sidebar" className="hidden md:block">
            <div className="w-44 h-full border-r-2 border-zinc-300 uppercase text-sm font-mono p-4 flex flex-col gap-4 justify-center">
                <div className={`flex flex-col gap-5 lg:-mt-25 ml-4 ${jetBrainsMono.className}`}>
                    {menus.map((menu) => {
                        const active = pathname === menu.href;
                        return (
                            <Link
                                prefetch
                                key={menu.href}
                                href={menu.href}
                                onClick={(e) => {
                                    navigate(e, menu.href);
                                }}
                                className={`font-semibold group flex items-center transition-colors
                                                ${active ? "text-zinc-950" : "text-zinc-500 hover:text-zinc-950"}
                                            `}
                            >
                                <span
                                    className={`inline-block h-px mr-2 transition-all duration-300
                                                ${active ? "w-4 bg-zinc-950" : "w-2 bg-zinc-400 group-hover:w-4 group-hover:bg-zinc-950"}
                                            `}
                                />
                                {menu.label}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
