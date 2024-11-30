import mongoose, { Schema } from "mongoose";

const categorySchema = new Schema({
    title: { type: String, required: true },
    thumbnail: { type: Number, required: true },
    description: { type: String },
});

export const CategoryModel =
    mongoose.models.Categories || mongoose.model("Categories", categorySchema);
