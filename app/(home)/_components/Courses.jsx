import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import CourseCard from "@/components/CourseCard";

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
                    href={"/courses"}
                    className=" text-sm font-medium  hover:opacity-80 flex items-center gap-1"
                >
                    Browse All <ArrowRightIcon className="h-4 w-4" />
                </Link>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4">
                {courses.map((course) => (
                    <CourseCard key={course.id} course={course} />
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
