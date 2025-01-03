import Link from "next/link";
import { BookCheck, Library, LogOut, Users } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function AvatarMenu() {
    return (
        <DropdownMenu className="text-center">
            <DropdownMenuTrigger asChild>
                <Avatar className="border-2 border-solLight cursor-pointer">
                    <AvatarImage
                        src="https://github.com/solimanhossain.png"
                        alt="avatar"
                    />
                    <AvatarFallback>{}</AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="px-2 w-48 mt-6">
                <DropdownMenuItem className="cursor-pointer border-b" asChild>
                    <Link href="account">
                        <Users />
                        Profile
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer border-b" asChild>
                    <Link href="account/enrolled-courses">
                        <Library />
                        My Courses
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer border-b" asChild>
                    <Link href="account/testimonials-certificates">
                        <BookCheck />
                        Testimonials & Certificates
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer" asChild>
                    <Link href="/logout">
                        <LogOut />
                        Logout
                    </Link>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
