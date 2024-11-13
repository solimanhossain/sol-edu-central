import { ArrowRightIcon, BookOpen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import formatMoney from "@/lib/formatMoney";

export default function CourseCard({ course }) {
    const { id, thumbnail, title, category, chapter, price } = course;

    return (
        <Link key={id} href={`/courses/${id}`}>
            <div className="group hover:shadow-sm transition overflow-hidden border rounded-lg p-3">
                <div className="relative w-full aspect-video rounded-md overflow-hidden">
                    <Image
                        src={thumbnail}
                        alt={"course"}
                        className="object-cover"
                        fill
                    />
                </div>
                <div className="flex flex-col pt-2">
                    <div className="text-lg md:text-base font-medium group-hover:text-sky-700 line-clamp-2">
                        {title}
                    </div>
                    <p className="text-xs text-muted-foreground">{category}</p>
                    <div className="my-3 flex items-center gap-x-2 text-sm md:text-xs">
                        <div className="flex items-center gap-x-1 text-slate-500">
                            <div>
                                <BookOpen className="w-4" />
                            </div>
                            <span>{chapter} Chapters</span>
                        </div>
                    </div>

                    <div className="flex items-center justify-between mt-4">
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
