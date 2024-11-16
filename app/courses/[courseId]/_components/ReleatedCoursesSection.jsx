import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import CourseCard from "@/components/CourseCard";

export default function ReleatedCoursesSection({ courses }) {
    return (
        <section className="related-courses">
            <div className="container">
                <h2 className="title">Related Courses</h2>
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
                                key={course.id}
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
