import { getCourseByParams } from "@/actions/courseQueries";
import { NextResponse } from "next/server";

export async function GET(request) {
    const getSearch = await request.nextUrl.searchParams.get("search");
    if (!getSearch) return NextResponse.json({ courses: [] });

    try {
        const findCourses = await getCourseByParams(getSearch);
        const courses = findCourses.map((course) => ({
            id: course._id,
            title: course.title,
            thumbnail: course.thumbnail,
        }));
        return NextResponse.json({ courses }, { status: 200 });
    } catch (err) {
        return NextResponse.json({ courses: [] }, { status: 404 });
    }
}
