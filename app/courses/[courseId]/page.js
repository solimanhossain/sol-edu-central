export default function CoursePage({ params: { courseId } }) {
    return (
        <main className="flex min-h-[calc(100vh-25%)] flex-col">
            <div className="container flex-1 pt-20 flex flex-col">
                <div className="text-2xl">Course ID: {courseId}</div>
            </div>
        </main>
    );
}
