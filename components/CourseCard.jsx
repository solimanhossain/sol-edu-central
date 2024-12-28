import { ArrowRightIcon, BookOpen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { formatMoney } from "@/lib/formatMoney";
import { getSingleCategory } from "@/actions/categoryQueries";

export default async function CourseCard({ course }) {
    const { _id, thumbnail, title, category, modules, price } = course;
    const courseCategory = await getSingleCategory(category);

    return (
        <Link href={`/courses/${_id}`}>
            <div className="group hover:shadow-sm transition overflow-hidden border rounded-lg p-3">
                <div className="relative w-full aspect-video rounded-md overflow-hidden">
                    <Image
                        src={thumbnail}
                        alt={"course"}
                        className="object-cover"
                        sizes="auto"
                        fill
                    />
                </div>
                <div className="flex flex-col pt-2">
                    <div className="text-lg md:text-base font-medium group-hover:text-sky-700 line-clamp-2">
                        {title}
                    </div>
                    <p className="text-xs text-muted-foreground">
                        {courseCategory.title}
                    </p>
                    <div className="my-3 flex items-center gap-x-2 text-sm md:text-xs">
                        <div className="flex items-center gap-x-1 text-slate-500">
                            <div>
                                <BookOpen className="w-4" />
                            </div>
                            <span>{modules.length} Chapters</span>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <p className="text-md md:text-sm font-medium text-slate-700">
                            {formatMoney(price)}
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
    );
}
