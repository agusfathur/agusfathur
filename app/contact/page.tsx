import { bricolageGrotesque, jetBrainsMono } from "@/components/fonts";
import DashboardLayout from "@/components/layout";
import { Email, GitHub, Instagram, LinkedIn, MapPin, Phone } from "@deemlol/next-icons";
import Link from "next/link";

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
        <div className="flex-1 flex items-center  w-full h-full px-14">
          <div className="w-3/5 flex flex-col gap-4">
            <span
              className={`text-sm text-zinc-500 ${jetBrainsMono.className}`}
            >
              CONTACT
            </span>
            <span
              className={`text-9xl text-zinc-950 font-bold leading-[0.9em] ${bricolageGrotesque.className}`}
            >
              Let's Build Something Sharper.
            </span>
          </div>

          <div className="w-2/5">
            <div className="border border-zinc-300">
              <Link
                href="mailto:gusfathur250gmail.com"
                className={`flex items-center gap-3 px-6 py-6 text-zinc-900 hover:bg-zinc-50 transition-colors ${jetBrainsMono.className}`}
              >
                <Email size={20} />
                <span>gusfathur250gmail.com</span>
              </Link>

              <hr className="border-zinc-300 mx-5" />

              <Link
                href="tel:+6285156859024"
                className={`flex items-center gap-3 px-6 py-6 text-zinc-900 hover:bg-zinc-50 transition-colors ${jetBrainsMono.className}`}
              >
                <Phone size={20} />
                <span>+6285156859024</span>
              </Link>

              <hr className="border-zinc-300 mx-5" />

              <Link
                href="https://maps.google.com/?q=Kabupaten+Kudus+Jawa+Tengah"
                target="_blank"
                className={`flex items-center gap-3 px-6 py-6 text-zinc-900 hover:bg-zinc-50 transition-colors ${jetBrainsMono.className}`}
              >
                <MapPin size={20} />
                <span>Kabupaten Kudus, Jawa Tengah</span>
              </Link>

              <hr className="border-zinc-300 mx-5" />

              <div className="flex gap-3 p-6">
                <Link
                  href="https://github.com/agusfathur"
                  target="_blank"
                  className="flex items-center gap-2 bg-black text-white px-5 py-3 text-xs font-bold tracking-wider hover:opacity-90 transition hover:scale-105"
                >
                  <GitHub size={16} />
                  <span className={jetBrainsMono.className}>GITHUB</span>
                </Link>

                <Link
                  href="https://linkedin.com/in/mohagusfathurrozi"
                  target="_blank"
                  className="flex items-center gap-2 bg-black text-white px-5 py-3 text-xs font-bold tracking-wider hover:opacity-90 transition hover:scale-105"
                >
                  <LinkedIn size={16} />
                  <span className={jetBrainsMono.className}>LINKEDIN</span>
                </Link>

                <Link
                  href="https://instagram.com/agoesfr"
                  target="_blank"
                  className="flex items-center gap-2 bg-black text-white px-5 py-3 text-xs font-bold tracking-wider hover:opacity-90 transition hover:scale-105"
                >
                  <Instagram size={16} />
                  <span className={jetBrainsMono.className}>INSTAGRAM</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
    );
}
