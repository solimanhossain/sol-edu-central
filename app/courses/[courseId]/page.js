import ReleatedCoursesSection from "./_components/ReleatedCoursesSection";
import CourseDetailsSection from "./_components/CourseDetailsSection";
import TopCoverSection from "./_components/TopCoverSection";
import { getSingleCourse } from "@/actions/courseQueries";
import ReviewSection from "./_components/ReviewSection";
import { notFound } from "next/navigation";

export default async function CoursePage({ params }) {
    const { courseId } = await params;
    let courseDetails = [];

    try {
        courseDetails = await getSingleCourse(courseId.toString());
    } catch (err) {
        return notFound();
    }

    return (
        <main className="flex min-h-[calc(100vh-25%)] flex-col">
            <div className="flex-1 pt-20 flex flex-col">
                <TopCoverSection course={courseDetails} />
                <CourseDetailsSection course={courseDetails} />
                <ReviewSection courseId={courseId} />
                <ReleatedCoursesSection category={courseDetails?.category} />
            </div>
        </main>
    );
}
