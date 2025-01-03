import CourseCard from "@/components/CourseCard";
import FilteredShow from "./_components/FilteredShow";
import SearchBox from "./_components/SearchBox";
import SortByPrice from "./_components/SortByPrice";
import FilterMobile from "./_components/FilterMobile";
import FilterBar from "./_components/FilterBar";
import { getCourseByParams } from "@/actions/courseQueries";
import { OctagonAlert } from "lucide-react";

export default async function CoursePage({ searchParams }) {
    const { category, search } = await searchParams;
    courses = await getCourseByParams(search, category);

    return (
        <main className="flex md:min-h-[calc(100vh-25%)] flex-col">
            <div className="container flex-1 pt-20 flex flex-col">
                <section
                    id="courses"
                    className="space-y-6 dark:bg-transparent py-6"
                >
                    <hgroup className="flex items-baseline justify-between  border-gray-200 border-b pb-6  gap-4 flex-row">
                        <SearchBox />
                        <div className="flex items-center justify-end gap-2 max-lg:w-full">
                            <SortByPrice />
                            <FilterMobile />
                        </div>
                    </hgroup>
                    <FilteredShow />
                </section>

                <section className="pb-24 pt-6">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                        <aside className="hidden lg:block">
                            <FilterBar />
                        </aside>
                        <div className="lg:col-span-3 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
                            {courses?.length > 0 ? (
                                courses.map((course) => (
                                    <CourseCard
                                        key={course._id.toString()}
                                        course={course}
                                    />
                                ))
                            ) : (
                                <div className="text-center col-span-full drop-shadow-lg">
                                    <div className="flex h-full items-center justify-center">
                                        <OctagonAlert className="mr-4" />
                                        <h2 className="text-xl font-bold text-gray-800 dark:text-white">
                                            No Courses Found!
                                        </h2>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
