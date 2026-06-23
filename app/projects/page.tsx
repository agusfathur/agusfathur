import { bricolageGrotesque, jetBrainsMono } from "@/components/fonts";
import DashboardLayout from "@/components/layout";

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

export default function ProjectsPage() {
    return (
        <DashboardLayout>
            <div className="flex-1 flex-col px-12 pt-12">
                {/* Breadcrumb */}
                <div>
                    <div
                        className={`text-md font-mono text-zinc-500 uppercase ${jetBrainsMono.className}`}
                    >
                        ABOUT / BACKGROUND
                    </div>
                    <div className={`text-5xl text-zinc-950 font-bold leading-[0.9em] mt-5 ${bricolageGrotesque.className}`}>
                        Full-stack web products, automation, AI workflows, and GIS
                        systems.
                    </div>
                </div>

                {/* Card Content */}
                <div className="flex gap-6 mt-12">
                    <div className="w-1/3 h-[500px] border border-zinc-300"></div>
                    <div className="w-1/3 h-[500px] border border-zinc-300"></div>
                    <div className="w-1/3 h-[500px] border border-zinc-300"></div>
                </div>
            </div>
        </DashboardLayout>
    );
}
