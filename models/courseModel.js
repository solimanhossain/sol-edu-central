import mongoose, { Schema } from "mongoose";

const courseSchema = new Schema({
    title: { type: String, required: true },
    thumbnail: { type: Number, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
    modules: [{ type: Schema.ObjectId, ref: "Module" }],
    category: { type: Schema.ObjectId, required: true, ref: "Category" },
    instructor: { type: Schema.ObjectId, required: true, ref: "User" },
    quizSet: { type: Schema.ObjectId, ref: "Quizset" },
    createdAt: { type: Date, default: Date.now },
    active: { type: Boolean, required: true },
    learning: { type: [String] },
    updateAt: { type: Date },
});

export const CourseModel =
    mongoose.models.Courses || mongoose.model("Courses", courseSchema);
