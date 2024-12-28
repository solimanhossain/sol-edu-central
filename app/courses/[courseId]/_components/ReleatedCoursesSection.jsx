import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import CourseCard from "@/components/CourseCard";
import { getSingleCategoryCourses } from "@/actions/courseQueries";

export default async function ReleatedCoursesSection({ category }) {
    const courses = await getSingleCategoryCourses(category, 4);

    return (
        <section className="related-courses pb-8 md:pb-12 lg:pb-24">
            <div className="container">
                <h2 className="title pb-4">Related Courses</h2>
                <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="max-2xl:w-[90%] w-full mx-auto"
                >
                    <CarouselPrevious />
                    <CarouselNext />
                    <CarouselContent>
                        {courses.map((course) => (
                            <CarouselItem
                                key={course?._id}
                                className="md:basis-1/2 lg:basis-1/3"
                            >
                                <CourseCard course={course} />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </section>
    );
}
