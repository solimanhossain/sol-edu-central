import mongoose, { Schema } from "mongoose";

const courseSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    thumbnail: { type: Number, required: true },
    modules: { type: Array, required: true },
    price: { type: Number, required: true, min: 0 },
    active: { type: Boolean, required: true },
    category: { type: String, required: true },
    instructor: { type: String, required: true },
    testimonials: { type: Array },
    quizSet: { type: Array },
    ratingReviews: { type: Array },
    totalEnrolled: { type: Array, required: true },
});

export const CourseModel =
    mongoose.models.Courses || mongoose.model("Courses", courseSchema);
