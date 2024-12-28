import connectMongo from "@/dbConnect/connectMongo";
import { CourseModel, UserModel, CategoryModel, ProgressModel } from "@/models";

async function getAllCourses(limited = null) {
    await connectMongo();
    return await CourseModel.find().limit(limited).lean();
}

async function getSingleCourse(objectId) {
    await connectMongo();
    return await CourseModel.findById(objectId)
        .populate({
            path: "category",
            model: CategoryModel,
        })
        .populate({
            path: "instructor",
            model: UserModel,
        })
        .lean();
}

async function getInstructorCourses(instructorObjId) {
    await connectMongo();
    return await CourseModel.find({ instructor: instructorObjId }).lean();
}

async function getSingleCategoryCourses(courseId, limited = null) {
    await connectMongo();
    return await CourseModel.find({ category: courseId }).limit(limited).lean();
}

export {
    getAllCourses,
    getSingleCourse,
    getInstructorCourses,
    getSingleCategoryCourses,
};
