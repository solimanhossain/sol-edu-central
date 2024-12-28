import mongoose, { Schema } from "mongoose";

const lessonSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String },
    duration_sec: { type: Number },
    video_url: { type: String },
    published: { type: Boolean, required: true },
    slug: { type: String },
    access: { type: String },
});

export const LessonModel =
    mongoose.models.Lessons || mongoose.model("Lessons", lessonSchema);
