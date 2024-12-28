import mongoose, { Schema } from "mongoose";

const moduleSchema = new Schema({
    title: { type: String, required: true },
    slug: { type: String },
    description: { type: String },
    status: { type: String, required: true },
    lessonIds: { type: Array, ref: "Lesson" },
    course: { type: Schema.ObjectId, ref: "Course" },
});

export const ModuleModel =
    mongoose.models.Modules || mongoose.model("Modules", moduleSchema);
