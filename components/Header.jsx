import Link from "next/link";
import Logo from "@/components/Logo";
import MenuBar from "./header/MenuBar";
import SmNavMenu from "./header/SmNavMenu";
import AvatarMenu from "./header/AvatarMenu";
import LoginRegister from "./header/LoginRegister";

export function Header() {
    return (
        <header className="z-50 bg-background/60 backdrop-blur-md md:fixed top-0 left-0 right-0 border-b ">
            <nav className="container flex h-20 items-center justify-between py-6 ">
                <SmNavMenu />
                <div className="flex gap-6 lg:gap-10">
                    <Link className="flex-center logo-hover" href="/">
                        <Logo />
                        <h1 className="text-sm">SOLEdu</h1>
                    </Link>
                    <div className="md:flex gap-6 hidden">
                        <MenuBar />
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <div className="items-center gap-3 hidden md:flex">
                        <LoginRegister />
                    </div>
                    <AvatarMenu />
                </div>
            </nav>
        </header>
    );
}
