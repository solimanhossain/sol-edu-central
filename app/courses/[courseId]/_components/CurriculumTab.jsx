import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import ModuleLesson from "./ModuleLesson";
import { TabsContent } from "@/components/ui/tabs";
import { BookCheck, Milestone } from "lucide-react";
import { getAllModules } from "@/actions/moduleLessonQueries";

export default async function CurriculumTab({ courseId }) {
    const allModules = await getAllModules(courseId);
    const totalLessons = allModules.reduce((acc, module) => {
        return acc + module.lessonIds.length;
    }, 0);

    return (
        <TabsContent value="curriculum">
            <div className="bg-gray-50  grid-cols-3 max-w-[768px] rounded-md p-8">
                <div className="flex gap-x-5 items-center justify-start flex-wrap mt-2 mb-4 text-gray-600 text-sm">
                    <span className="flex items-center gap-1.5 bg-slate-100 py-2 px-3 rounded-sm">
                        <BookCheck className="w-4 h-4" />
                        {allModules?.length} Chapters
                    </span>
                    <span className="flex items-center gap-1.5 bg-slate-100 py-2 px-3 rounded-sm">
                        <Milestone className="w-4 h-4" />
                        {totalLessons} Lessons
                    </span>
                </div>
                <Accordion
                    type="multiple"
                    collapsible="true"
                    className="w-full"
                >
                    {allModules &&
                        allModules.map((module) => (
                            <AccordionItem
                                key={module.id}
                                className="border-none"
                                value={module.id}
                            >
                                <AccordionTrigger>
                                    {module?.title}
                                </AccordionTrigger>
                                <AccordionContent>
                                    <ModuleLesson lessons={module?.lessonIds} />
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                </Accordion>
            </div>
        </TabsContent>
    );
}
