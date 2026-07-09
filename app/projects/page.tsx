import ProjectsPage from "./projectPpage";

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


export default function Page() {
    return (
        <ProjectsPage />
    );
}