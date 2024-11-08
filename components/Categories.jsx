import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Categories() {
    return (
        <section
            id="categories"
            className="container space-y-6  py-8  md:py-12 lg:py-24"
        >
            <div className="flex items-center justify-between">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">
                    Categories
                </h2>

                <Link
                    href="#"
                    className=" text-sm font-medium  hover:opacity-80 flex items-center gap-1"
                >
                    Browse All <ArrowRightIcon className="h-4 w-4" />
                </Link>
            </div>
            <div className="mx-auto grid justify-center gap-4 grid-cols-2  md:grid-cols-3 2xl:grid-cols-4">
                {categories.map((category) => (
                    <Link
                        href="#"
                        key={category.id}
                        className="relative overflow-hidden rounded-lg border bg-background p-2 hover:scale-105 transition-all duration-500 ease-in-out"
                    >
                        <div className="flex  flex-col gap-4 items-center justify-between rounded-md p-6">
                            <Image
                                src={category.thumbnail}
                                alt={category.title}
                                width={100}
                                height={100}
                            />
                            <h3 className="font-bold">{category.title}</h3>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}

const categories = [
    {
        id: 1,
        title: "Design",
        thumbnail: "/images/categories/design.jpg",
    },

    {
        id: 2,
        title: "Personal Development",
        thumbnail: "/images/categories/personal-development.jpg",
    },
    {
        id: 4,
        title: "Marketing",
        thumbnail: "/images/categories/marketing.jpg",
    },
    {
        id: 5,
        title: "IT & Software",
        thumbnail: "/images/categories/it-software.jpg",
    },
    {
        id: 6,
        title: "Photography",
        thumbnail: "/images/categories/photography.jpg",
    },
    {
        id: 7,
        title: "Business",
        thumbnail: "/images/categories/business.jpg",
    },
    {
        id: 3,
        title: "Music",
        thumbnail: "/images/categories/music.jpg",
    },
    {
        id: 8,
        title: "Development",
        thumbnail: "/images/categories/development.jpg",
    },
];
