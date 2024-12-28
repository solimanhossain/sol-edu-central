import Link from "next/link";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { getAllCategories } from "@/actions/categoryQueries";

export default async function Categories() {
    const allCategories = await getAllCategories();
    const showCategories = allCategories.slice(0, 4);

    return (
        <section
            id="categories"
            className="container space-y-6  py-8  md:py-12 lg:py-24"
        >
            <div className="flex items-center justify-between">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">
                    Categories
                </h2>
                <button
                    type="submit"
                    className=" text-sm font-medium  hover:opacity-80 flex items-center gap-1"
                >
                    Show All <ArrowDown className="h-4 w-4" />
                </button>
            </div>
            <div className="mx-auto grid justify-center gap-4 grid-cols-2  md:grid-cols-3 2xl:grid-cols-4">
                {showCategories.map((category) => (
                    <Link
                        href="#"
                        key={category._id}
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
