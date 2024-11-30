import connectMongo from "@/dbConnect/connectMongo";
import { CourseModel } from "@/models/courseModel";

async function getAllCourses(limited = null) {
    await connectMongo();
    return await CourseModel.find().limit(limited).lean();
}

async function getSingleCourse(objectId) {
    await connectMongo();
    return await CourseModel.findOne({ _id: objectId }).lean();
}

export { getAllCourses, getSingleCourse };
