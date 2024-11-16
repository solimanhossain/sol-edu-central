import CourseDetailsSection from "./_components/CourseDetailsSection";
import TopCoverSection from "./_components/TopCoverSection";
import ReleatedCoursesSection from "./_components/ReleatedCoursesSection";
import ReviewSection from "./_components/ReviewSection";

export default function CoursePage({ params: { courseId } }) {
    console.log(courseId);

    return (
        <main className="flex min-h-[calc(100vh-25%)] flex-col">
            <div className="flex-1 pt-20 flex flex-col">
                <TopCoverSection />
                <CourseDetailsSection />
                <ReviewSection courses={courses} />
                <ReleatedCoursesSection courses={courses} />
            </div>
        </main>
    );
}

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
