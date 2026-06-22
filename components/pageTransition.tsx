"use client";

import { useTransitionStore } from "@/stores/useTransitionStore";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function PageTransition({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    const showTransition = useTransitionStore((state) => state.showTransition);

    const stopTransition = useTransitionStore((state) => state.stopTransition);

    useEffect(() => {
        if (!showTransition) return;

        const timer = setTimeout(() => {
            stopTransition();
        }, 2200);

        return () => clearTimeout(timer);
    }, [pathname, showTransition, stopTransition]);

    const pageName =
        pathname === "/"
            ? "HOME"
            : pathname.replace("/", "").replaceAll("-", " ").toUpperCase();

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={pathname}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="relative h-full"
            >
                {showTransition && (
                    <div className="fixed inset-0 z-9999 pointer-events-none overflow-hidden">
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
                                        duration: 1.4,
                                        delay: i * 0.05,
                                        ease: [0.83, 0, 0.17, 0.4],
                                    }}
                                >
                                    <div className="absolute inset-0 grid grid-cols-12 grid-rows-20">
                                        {Array.from({
                                            length: 240,
                                        }).map((_, index) => (
                                            <div key={index} className="border border-white/10" />
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            className="absolute inset-0 flex items-center justify-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.2 }}
                        >
                            <span className="text-white text-xs md:text-lg uppercase tracking-[0.6em] font-medium">
                                {pageName}
                            </span>
                        </motion.div>
                    </div>
                )}

                {children}
            </motion.div>
        </AnimatePresence>
    );
}
