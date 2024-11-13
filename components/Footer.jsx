import Image from "next/image";
import Link from "next/link";

import Logo from "@/components/Logo";

export default function Footer() {
    return (
        <footer className="dark:bg-gray-900 dark:text-white">
            <div className="container mx-auto md:py-8 ">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <Link
                        href="/"
                        className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse logo-hover"
                    >
                        <Logo />
                        <span className="self-center text-base lg:text-2xl md:text-lg font-semibold whitespace-nowrap">
                            SOLEdu Central
                        </span>
                    </Link>
                    <ul className="flex flex-wrap items-center mb-6 text-xs md:text-sm md:font-medium sm:mb-0">
                        <li>
                            <Link
                                href="#"
                                className="transition-colors hover:text-foreground/80 me-4 md:me-6"
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#"
                                className="transition-colors hover:text-foreground/80 me-4 md:me-6"
                            >
                                Privacy Policy
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#"
                                className="transition-colors hover:text-foreground/80 me-4 md:me-6"
                            >
                                Licensing
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#"
                                className="transition-colors hover:text-foreground/80"
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
                <hr className="my-4 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-6" />
                <span className="block text-xs md:text-sm text-gray-500 text-center dark:text-gray-400">
                    All Rights Reserved |
                    <Link href="#" className="hover:text-gray-500">
                        {" SOLEdu™ "}
                    </Link>
                    © 2024
                </span>
            </div>
        </footer>
    );
}
