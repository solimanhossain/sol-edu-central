import { Toaster } from "@/components/ui/sonner";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import "@/app/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const poppins = Inter({ subsets: ["latin"], variable: "--font-poppins" });

const geistMono = localFont({
    src: "../assets/fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata = {
    title: "SOLEdu Central",
    description: "Learning Platform",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`${cn(
                    geistMono.className,
                    poppins.className
                )} antialiased`}
            >
                {children}
                <Toaster richColors position="top-right" />
            </body>
        </html>
    );
}
