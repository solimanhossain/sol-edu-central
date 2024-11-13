import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import MenuBar from "@/components/header/MenuBar";
import Link from "next/link";

export default function Test() {
    return (
        <div className="md:hidden">
            <DropdownMenu>
                <DropdownMenuTrigger className="cursor-pointer" asChild>
                    <Menu />
                </DropdownMenuTrigger>
                <DropdownMenuContent
                    align="center"
                    className="w-56 mt-8 mx-20 md:hidden"
                >
                    <div className="grid grid-flow-row justify-center gap-6 p-4">
                        <MenuBar />
                    </div>
                    <DropdownMenuItem className="flex justify-evenly px-2">
                        <Link
                            href="/login"
                            className={cn(
                                buttonVariants({ size: "sm" }),
                                "px-4"
                            )}
                        >
                            Login
                        </Link>
                        <Link
                            href="/register"
                            className={cn(
                                buttonVariants({
                                    size: "sm",
                                    variant: "outline",
                                }),
                                "px-4"
                            )}
                        >
                            Register
                        </Link>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
}
