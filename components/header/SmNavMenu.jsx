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
            <DropdownMenu className="md:hidden">
                <DropdownMenuTrigger asChild>
                    <Menu />
                </DropdownMenuTrigger>
                <DropdownMenuContent
                    align="center"
                    className="w-56 my-10 mx-20 p-2 md:hidden"
                >
                    <nav className="grid grid-flow-row justify-center gap-6 p-4">
                        <MenuBar />
                    </nav>
                    <DropdownMenuItem className="flex justify-evenly px-2">
                        <LoginRegister />
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
}
