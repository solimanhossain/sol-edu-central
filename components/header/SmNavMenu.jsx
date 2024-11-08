import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Menu } from "lucide-react";
import MenuBar from "../header/MenuBar";
import LoginRegister from "../header/LoginRegister";

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
                        <LoginRegister />
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
}
