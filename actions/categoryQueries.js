import connectMongo from "@/dbConnect/connectMongo";
import { CategoryModel } from "@/models/categoryModel";

async function getAllCategories(limited = null) {
    await connectMongo();
    return await CategoryModel.find().limit(limited).lean();
}

async function getSingleCategory(objectId) {
    await connectMongo();
    return await CategoryModel.findOne({ _id: objectId }).lean();
}

export { getAllCategories, getSingleCategory };
