import mongoose, { Schema } from "mongoose";

const progressSchema = new Schema({
    enrollmentedAt: { type: Date, required: true },
    status: { type: String, required: true },
    paymentWay: { type: String, required: true },
    review: { type: String },
    rating: { type: Number },
    completedAt: { type: Date },
    user: { type: Schema.ObjectId, ref: "User" },
    course: { type: Schema.ObjectId, ref: "Course" },
});

export const ProgressModel =
    mongoose.models.Progresses || mongoose.model("Progresses", progressSchema);
