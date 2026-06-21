"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function PageTransition({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    const firstLoad = useRef(true);
    const [showTransition, setShowTransition] = useState(false);

    useEffect(() => {
        if (firstLoad.current) {
            firstLoad.current = false;
            return;
        }

        setShowTransition(true);

        const timer = setTimeout(() => {
            setShowTransition(false);
        }, 3200);

        return () => clearTimeout(timer);
    }, [pathname]);

    const pageName = pathname === "/" ? "HOME" : pathname.replace("/", "").replaceAll("-", " ").toUpperCase();

    return (
        <AnimatePresence mode="wait">
            <motion.div key={pathname} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }} className="relative h-full">
                {showTransition && (
                    <div className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden">
                        {/* Panels */}
                        <div className="absolute inset-0 flex">
                            {[...Array(5)].map((_, i) => (
                                <motion.div
                                    key={`${pathname}-${i}`}
                                    className="relative flex-1 bg-black overflow-hidden"
                                    initial={{ y: "-100%" }}
                                    animate={{
                                        y: ["-100%", "0%", "0%", "100%"],
                                    }}
                                    transition={{
                                        duration: 2.1,
                                        delay: i * 0.05,
                                        ease: [0.83, 0, 0.17, 0.4],
                                    }}
                                >
                                    {/* Small Grid */}
                                    <div className="absolute inset-0 grid grid-cols-12 grid-rows-20">
                                        {Array.from({ length: 360 }).map((_, index) => (
                                            <div key={index} className="border border-white/[0.04]" />
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Center Text */}
                        <motion.div className="absolute inset-0 flex items-center justify-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2 }}>
                            <div className="flex flex-col items-center gap-3">
                                <span className=" text-white text-xs md:text-sm uppercase tracking-[0.6em] font-medium">{pageName}</span>
                            </div>
                        </motion.div>
                    </div>
                )}

                {children}
            </motion.div>
        </AnimatePresence>
    );
}
