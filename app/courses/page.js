import CourseCard from "@/components/CourseCard";
import FilteredShow from "./_components/FilteredShow";
import SearchBox from "./_components/SearchBox";
import SortByPrice from "./_components/SortByPrice";
import FilterMobile from "./_components/FilterMobile";
import FilterBar from "./_components/FilterBar";

export default function CoursePage() {
    return (
        <main className="flex min-h-[calc(100vh-25%)] flex-col">
            <div className="container flex-1 pt-20 flex flex-col">
                <section
                    id="courses"
                    className="space-y-6 dark:bg-transparent py-6"
                >
                    <hgroup className="flex items-baseline justify-between  border-gray-200 border-b pb-6 flex-col gap-4 lg:flex-row">
                        <SearchBox />

                        <div className="flex items-center justify-end gap-2 max-lg:w-full">
                            <SortByPrice SORT_OPTIONS={SORT_OPTIONS} />
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
                            {courses.map((course) => (
                                <CourseCard key={course.id} course={course} />
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}

const SORT_OPTIONS = [
    { label: "Price: Low to High", value: "price-asc" },
    { label: "Price: High to Low", value: "price-desc" },
];

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
