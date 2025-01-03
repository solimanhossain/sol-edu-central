"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function NotFound() {
    const pathname = usePathname();
    const courseId = pathname.split("/").pop();

    return (
        <main className="min-h-[calc(100vh-15%)] w-full flex-center">
            <section className="space-y-6 pb-8 pt-16 md:pb-12 md:pt-32 lg:pt-40 grainy">
                <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center relative isolate">
                    <Image
                        src="/images/404.png"
                        alt="404"
                        width={80}
                        height={80}
                        className="w-1/2 object-cover"
                    />
                    <h1 className="text-xl py-4 mb-2">
                        Id:
                        <span className="bg-slate-200 px-2 py-1 rounded-sm mx-2">
                            {courseId}
                        </span>
                        <br />
                        This course does not exist!
                    </h1>
                    <div className="bg-slate-100 p-4 rounded-sm shadow-sm">
                        <Link href="/courses">{"<- All Courses"}</Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
