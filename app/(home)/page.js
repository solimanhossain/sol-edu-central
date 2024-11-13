import Categories from "@/app/(home)/_components/Categories";
import Courses from "@/app/(home)/_components/Courses";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function HomePage() {
    return (
        <main className="min-h-[calc(100vh-25%)] w-full flex-center">
            <section className="space-y-6 pb-8 pt-16 md:pb-12 md:pt-32 lg:pt-40 grainy">
                <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center relative isolate">
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                    >
                        <div className="relative w-[36.125rem] clip-path-bg cutom-bg opacity-30" />
                    </div>
                    <span className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium border shadow-lg">
                        Hey, Welcome
                    </span>
                    <h1 className="font-heading text-3xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
                        Learn Today, Lead Tomorrow.
                    </h1>
                    <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
                        “You don&apos;t understand anything until you learn it
                        more than one way.”
                    </p>
                    <div className="flex items-center gap-3 flex-wrap justify-center">
                        <Link
                            href="/courses"
                            className={cn(buttonVariants({ size: "lg" }))}
                        >
                            Explore Now
                        </Link>
                        <Link
                            href="/register"
                            className={cn(
                                buttonVariants({
                                    variant: "outline",
                                    size: "lg",
                                })
                            )}
                        >
                            Become An Instructor
                        </Link>
                    </div>
                </div>
            </section>

            <Categories />
            <Courses />
        </main>
    );
}
