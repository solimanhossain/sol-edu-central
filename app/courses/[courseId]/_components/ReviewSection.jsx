import { getCourseReviews } from "@/actions/progressQueries";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Star, StarIcon } from "lucide-react";

export default async function ReviewSection({ courseId }) {
    const courseReviews = await getCourseReviews(courseId);

    return (
        <section className="pb-8 md:pb-12 lg:pb-24">
            <div className="container">
                <h2 className="title pb-4">Reviews</h2>
                <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="max-2xl:w-[90%] w-full mx-auto"
                >
                    <CarouselPrevious />
                    <CarouselNext />
                    <CarouselContent>
                        {courseReviews.map((review) => (
                            <CarouselItem
                                key={review.id}
                                className="md:basis-1/2 lg:basis-1/3"
                            >
                                <div className="sm:break-inside-avoid">
                                    <blockquote className="rounded-lg bg-gray-50 p-6  sm:p-8 shadow-sm">
                                        <div className="flex items-center gap-4">
                                            <img
                                                alt={review?.name}
                                                src={review?.avatar}
                                                height="auto"
                                                width="auto"
                                                className="size-10 rounded-full object-cover"
                                            />
                                            <div>
                                                <p className="mt-0.5 text-lg font-medium text-gray-900">
                                                    {review?.name}
                                                </p>
                                                <div className="flex justify-center gap-0.5">
                                                    {Array(
                                                        Math.floor(
                                                            review?.rating ?? 0
                                                        )
                                                    ).fill("⭐️")}
                                                </div>
                                            </div>
                                        </div>
                                        <p className="mt-4 text-gray-700">
                                            {review?.review}
                                        </p>
                                    </blockquote>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </section>
    );
}
