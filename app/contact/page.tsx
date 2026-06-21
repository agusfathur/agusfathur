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

export default function ContactPage() {
    return (
        <DashboardLayout>
            <div className="flex-1 flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold mb-4 text-zinc-950">Contact Me</h1>
                <p className="text-lg text-zinc-600 text-center max-w-xl">Feel free to reach out to me if you have any questions or opportunities!</p>
            </div>
        </DashboardLayout>
    );
}
