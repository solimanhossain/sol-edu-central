import { cn } from "@/lib/utils";
import { Video, Clock10, CirclePlay, Lock } from "lucide-react";
import { secondsToMinutes, secondsToHours } from "@/lib/formatTime";

export default function ModuleLesson({ lessons }) {
    const lessonsDuration = lessons.reduce(
        (acc, lesson) => acc + lesson?.duration_sec,
        0
    );

    return (
        <>
            <div className="flex gap-x-5 items-center flex-wrap mb-6 text-gray-800 text-sm">
                <span className="flex items-center gap-1.5">
                    <Video className="w-4 h-4" />
                    {lessons?.length} Lessons
                </span>
                <span className="flex items-center gap-1.5">
                    <Clock10 className="w-4 h-4" />
                    {secondsToHours(lessonsDuration)}+ Hours
                </span>
            </div>
            {lessons?.map((lesson) => (
                <div className="py-2" key={lesson?._id}>
                    <button
                        type="button"
                        className={cn(
                            "flex items-center gap-x-2 text-slate-500 text-sm font-[500]  transition-all hover:text-slate-600  w-full"
                        )}
                    >
                        <div className="flex items-center gap-x-2">
                            {lesson?.access == "public" ? (
                                <CirclePlay
                                    size={16}
                                    className={cn("text-slate-500")}
                                />
                            ) : (
                                <Lock
                                    size={16}
                                    className={cn("text-slate-500")}
                                />
                            )}
                            <p>{lesson?.title}</p>
                            <div className="text-xs text-muted-foreground">
                                ({secondsToMinutes(lesson?.duration_sec)})
                            </div>
                        </div>
                    </button>
                </div>
            ))}
        </>
    );
}
