import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import InstructorTab from "./InstructorTab";
import CurriculumTab from "./CurriculumTab";
import OverviewTab from "./OverviewTab";

export default function CourseDetailsSection() {
    return (
        <section className="py-8 md:py-12 lg:py-24">
            <div className="container">
                <span className="bg-success px-4 py-0.5 rounded-full text-xs font-medium text-white inline-block">
                    Development
                </span>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold 2xl:text-5xl mt-3">
                    Python Crash Course
                </h3>
                <p className="mt-3 text-gray-600 text-sm">
                    This tutorial will help you learn quickly and thoroughly.
                </p>
                {/* Instructor and last updated */}
                <div className="flex sm:items-center gap-5 flex-col sm:flex-row sm:gap-6 md:gap-20 mt-6">
                    <div className="flex items-center gap-2">
                        <img
                            className="w-[40px] h-[40px] rounded-full"
                            src="https://i.pravatar.cc/40"
                            alt="Instructor"
                        />
                        <p className="font-bold">Course Instructor</p>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                        <span className="text-success font-semibold">
                            Last Updated:{" "}
                        </span>
                        <span>{new Date().toDateString()}</span>
                    </div>
                </div>

                {/* Tab */}
                <div className="my-6">
                    <Tabs defaultValue="overview" className="w-full">
                        <TabsList className="grid w-full grid-cols-3 my-6 max-w-[768px]">
                            <TabsTrigger value="overview">Overview</TabsTrigger>
                            <TabsTrigger value="curriculum">
                                Carriculum
                            </TabsTrigger>
                            <TabsTrigger value="instructor">
                                Instructor
                            </TabsTrigger>
                        </TabsList>
                        <OverviewTab />
                        <CurriculumTab />
                        <InstructorTab />
                    </Tabs>
                </div>
            </div>
        </section>
    );
}
