import { Bricolage_Grotesque, JetBrains_Mono } from "next/font/google";

export const jetBrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800"],
    variable: "--font-jetbrains-mono",
});

export const bricolageGrotesque = Bricolage_Grotesque({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800"],
    variable: "--font-bricolage-grotesque",
});
