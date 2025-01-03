import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import InstructorTab from "./InstructorTab";
import CurriculumTab from "./CurriculumTab";
import OverviewTab from "./OverviewTab";
import { formatAllDate } from "@/lib/formatDate";

export default function CourseDetailsSection({ course }) {
    const {
        _id,
        title,
        subtitle,
        createdAt,
        description,
        learning,
        category,
        instructor,
        modules,
    } = course;
    // console.log(course);

    return (
        <section className="py-8 md:py-12 lg:py-24">
            <div className="container">
                <span className="bg-success px-4 py-0.5 rounded-full text-xs font-medium text-white inline-block">
                    {category?.title}
                </span>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold 2xl:text-5xl mt-3">
                    {title}
                </h3>
                <p className="mt-3 text-gray-600 text-sm">{subtitle}</p>
                <div className="flex sm:items-center gap-5 flex-col sm:flex-row sm:gap-6 md:gap-20 mt-6">
                    <div className="flex items-center gap-2">
                        <img
                            className="w-[40px] h-[40px] rounded-full border"
                            src={instructor?.avatar}
                            alt={instructor?.firstName}
                        />
                        <p className="font-bold">
                            {instructor?.firstName + " " + instructor?.lastName}
                        </p>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                        <span className="text-success font-semibold">
                            Last Updated:{" "}
                        </span>
                        <span>{formatAllDate(createdAt)}</span>
                    </div>
                </div>

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
                        <OverviewTab
                            description={description}
                            learning={learning}
                        />
                        <CurriculumTab courseId={_id} />
                        <InstructorTab instructor={instructor} courseId={_id} />
                    </Tabs>
                </div>
            </div>
        </section>
    );
}
