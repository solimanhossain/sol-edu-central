"use client";
import { toast } from "sonner";
import { Button } from "./ui/button";

export default function Test() {
    return (
        <>
            <div className="w-full flex justify-center m-8">
                <Button onClick={() => toast.success("Toast!")}>Button</Button>
            </div>
        </>
    );
}
