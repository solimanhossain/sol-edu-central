import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String, required: true },
    role: { type: String, required: true },
    socialMedia: { type: Object },
    avatar: { type: String },
    bio: { type: String },
});

export const UserModel =
    mongoose.models.Users || mongoose.model("Users", userSchema);
