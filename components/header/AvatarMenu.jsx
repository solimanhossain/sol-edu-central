import { BookCheck, Library, LogOut, Users } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Link from "next/link";

export default function AvatarMenu() {
    return (
        <DropdownMenu className="text-center">
            <DropdownMenuTrigger asChild>
                <div className="cursor-pointer">
                    <Avatar className="border-2">
                        <AvatarImage
                            src="https://github.com/solimanhossain.png"
                            alt="avatar"
                        />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="px-2 w-48 mt-4">
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
                    <Link href="">
                        <BookCheck />
                        Testimonials & Certificates
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer" asChild>
                    <Link href="">
                        <LogOut />
                        Logout
                    </Link>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
