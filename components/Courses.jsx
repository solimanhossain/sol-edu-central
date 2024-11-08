import { BookOpen, ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Courses() {
    return (
        <section
            id="courses"
            className="container space-y-6   md:py-12 lg:py-24"
        >
            <div className="flex items-center justify-between">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">
                    Courses
                </h2>
                <Link
                    href={""}
                    className=" text-sm font-medium  hover:opacity-80 flex items-center gap-1"
                >
                    Browse All <ArrowRightIcon className="h-4 w-4" />
                </Link>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4">
                {courses.map((course) => (
                    <Link key={course.id} href={`/courses/${course.id}`}>
                        <div className="group hover:shadow-sm transition overflow-hidden border rounded-lg p-3 h-full">
                            <div className="relative w-full aspect-video rounded-md overflow-hidden">
                                <Image
                                    src={course.thumbnail}
                                    alt={"course"}
                                    className="object-cover"
                                    fill
                                />
                            </div>
                            <div className="flex flex-col pt-2">
                                <div className="text-lg md:text-base font-medium group-hover:text-sky-700 line-clamp-2">
                                    {course.title}
                                </div>
                                <p className="text-xs text-muted-foreground">
                                    {course.category}
                                </p>
                                <div className="my-3 flex items-center gap-x-2 text-sm md:text-xs">
                                    <div className="flex items-center gap-x-1 text-slate-500">
                                        <div>
                                            <BookOpen className="w-4" />
                                        </div>
                                        <span>{course.chapter} Chapters</span>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between mt-4">
                                    <p className="text-md md:text-sm font-medium text-slate-700">
                                        {Intl.NumberFormat("en-us", {
                                            style: "currency",
                                            currency: "USD",
                                        }).format(course.price)}
                                    </p>

                                    <Button
                                        variant="ghost"
                                        className="text-xs text-sky-700 h-7 gap-1"
                                    >
                                        Enroll
                                        <ArrowRightIcon className="w-3" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}

const courses = [
    {
        id: 1,
        title: "Art",
        category: "Design",
        thumbnail: "/images/courses/art.png",
        chapter: 8,
        price: 15,
    },
    {
        id: 2,
        title: "Python",
        category: "Development",
        thumbnail: "/images/courses/python.png",
        chapter: 12,
        price: 29,
    },
];
