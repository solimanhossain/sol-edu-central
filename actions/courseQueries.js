import connectMongo from "@/dbConnect/connectMongo";
import { CourseModel, UserModel, CategoryModel } from "@/models";

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

async function getCourseByParams(search, category, price, limited = null) {
    await connectMongo();
    let query = {};
    if (category) {
        query.category = category;
    }
    if (search) {
        query.title = { $regex: search, $options: "i" };
    }
    if (price) {
        switch (price) {
            case "free":
                query.price = 0;
                break;
            case "paid":
                query.price = { $gt: 0 };
                break;
        }
    }

    try {
        return await CourseModel.find(query).limit(limited).lean();
    } catch (err) {
        return [];
    }
}

export {
    getCourseByParams,
    getAllCourses,
    getSingleCourse,
    getInstructorCourses,
    getSingleCategoryCourses,
};
