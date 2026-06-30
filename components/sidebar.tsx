"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { jetBrainsMono } from "@/components/fonts";
import { useTransitionStore } from "@/stores/useTransitionStore";
import { useMobileMenuStore } from "@/stores/useMobileMenuStore";
import { useEffect } from "react";
import { GitHub } from "@deemlol/next-icons";
import { LiaLinkedinIn } from "react-icons/lia";

export default function Sidebar() {
    const pathname = usePathname();
    const router = useRouter();
    const { isOpen, closeMenu } = useMobileMenuStore();

    const menus = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/skills", label: "Skills" },
        { href: "/projects", label: "Projects" },
        { href: "/contact", label: "Contact" },
    ];

    const startTransition = useTransitionStore((state) => state.startTransition);

    const navigate = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
        e.preventDefault();
        if (pathname === href) {
            closeMenu(); // Close menu if clicking same page
            return;
        }

        startTransition();
        closeMenu(); // Close menu on navigation
        router.push(href);
    };

    // Close menu on escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") closeMenu();
        };

        if (isOpen) {
            document.addEventListener("keydown", handleEscape);
            // Prevent body scroll when menu is open
            document.body.style.overflow = "hidden";
        }

        return () => {
            document.removeEventListener("keydown", handleEscape);
            document.body.style.overflow = "unset";
        };
    }, [isOpen, closeMenu]);

    return (
        <>
            {/* Desktop Sidebar */}
            <div id="sidebar" className="hidden md:block">
                <div className="w-44 relative h-full border-r-2 border-zinc-300 uppercase text-sm font-mono p-4 flex flex-col gap-4 justify-center ">
                    <div className={`flex flex-col gap-5 absolute ml-4 ${jetBrainsMono.className}`}>
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

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="md:hidden fixed inset-0 z-50">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black bg-opacity-50 transition-opacity"
                        onClick={closeMenu}
                    />

                    {/* Menu Panel */}
                    <div className="absolute top-0 right-0 h-full w-64 bg-white border-l-2 border-zinc-300 shadow-xl transform transition-transform duration-300">
                        <div className={`flex flex-col gap-6 p-8 pt-24 ${jetBrainsMono.className}`}>
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
                                        className={`font-bold uppercase text-lg flex items-center transition-colors
                                                ${active ? "text-zinc-950" : "text-zinc-500 hover:text-zinc-950"}
                                            `}
                                    >
                                        <span
                                            className={`inline-block h-px mr-3 transition-all duration-300
                                                ${active ? "w-6 bg-zinc-950" : "w-3 bg-zinc-400"}
                                            `}
                                        />
                                        {menu.label}
                                    </Link>
                                );
                            })}

                            {/* Social Links for Mobile */}
                            <div className="mt-8 pt-8 border-t-2 border-zinc-200">
                                <div className="text-xs text-zinc-400 uppercase tracking-wider mb-4">
                                    Connect
                                </div>
                                <div className="flex gap-3">
                                    <Link
                                        href="https://github.com/agusfathur"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 border-2 border-zinc-300 text-zinc-600 flex items-center justify-center font-bold hover:bg-black hover:text-white transition-colors duration-300 hover:border-black"
                                    >
                                        <GitHub className="h-5 w-5" />
                                    </Link>

                                    <Link
                                        href="https://linkedin.com/in/mohagusfathurrozi"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 border-2 border-zinc-300 text-zinc-600 flex items-center justify-center font-bold hover:bg-black hover:text-white transition-colors duration-300 hover:border-black"
                                    >
                                        <LiaLinkedinIn className="h-5 w-5" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
