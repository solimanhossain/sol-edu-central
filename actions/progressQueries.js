import connectMongo from "@/dbConnect/connectMongo";
import { CourseModel, ProgressModel, UserModel } from "@/models";

async function getCourseReviews(courseId) {
    await connectMongo();
    const progress = await ProgressModel.find({ course: courseId }).populate({
        path: "user",
        model: UserModel,
    });

    const reviews = progress
        .map((item) => {
            return {
                id: item?._id,
                rating: item?.rating,
                review: item?.review,
                avatar: item?.user?.avatar,
                name: `${item?.user?.firstName} ${item?.user?.lastName}`,
            };
        })
        .flat();
    return reviews;
}

async function getCourseDetailsByInstructor(instructorId) {
    await connectMongo();
    const courses = await CourseModel.find({ instructor: instructorId }).lean();

    const coureProgress = await Promise.all(
        courses.map(
            async (course) => await ProgressModel.find({ course: course._id })
        )
    );

    // const totalReviews = coureProgress.reduce(
    //     (acc, obj) => acc.concat(obj),
    //     []
    // );
    const totalReviews = coureProgress.flat();
    const avgRating =
        totalReviews.reduce((acc, obj) => acc + obj.rating, 0) /
        totalReviews.length;

    return {
        enrolled: courses.length,
        reviews: totalReviews.length,
        ratings: avgRating.toPrecision(2),
    };
}

export { getCourseDetailsByInstructor, getCourseReviews };
