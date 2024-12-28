import { TabsContent } from "@/components/ui/tabs";
import { getInstructorCourses } from "@/actions/courseQueries";
import { MessageSquare, Presentation, UserRound, Star } from "lucide-react";
import { formatNumber } from "@/lib/formatNumber";
import { getCourseDetailsByInstructor } from "@/actions/progressQueries";

export default async function InstructorTab({ instructor }) {
    const instructorCourses = await getInstructorCourses(instructor._id);
    const instructorCourseDetails = await getCourseDetailsByInstructor(
        instructor._id
    );

    return (
        <TabsContent value="instructor">
            <div className="bg-gray-50  grid-cols-3 max-w-[768px] rounded-md p-8">
                <div className="md:flex md:gap-x-5 mb-8">
                    <div className="h-[310px] w-[270px] max-w-full  flex-none rounded mb-5 md:mb-0">
                        <img
                            src={instructor?.avatar}
                            alt={
                                instructor?.firstName +
                                " " +
                                instructor?.lastName
                            }
                            className="w-full h-full object-cover rounded"
                        />
                    </div>
                    <div className="flex-1">
                        <div className="max-w-[300px]">
                            <h4 className="text-[34px] font-bold leading-[51px]">
                                Course Instructor
                            </h4>
                            <div className="text-gray-600 font-medium mb-6">
                                Senior Software Engineer
                            </div>
                            <ul className="list space-y-4">
                                <li className="flex items-center space-x-3">
                                    <Presentation className="text-gray-600" />
                                    <div>
                                        {instructorCourses.length}+ Courses
                                    </div>
                                </li>
                                <li className="flex space-x-3">
                                    <UserRound className="text-gray-600" />
                                    <div>
                                        {formatNumber(
                                            instructorCourseDetails?.enrolled
                                        )}
                                        + Students
                                    </div>
                                </li>
                                <li className="flex space-x-3">
                                    <MessageSquare className="text-gray-600" />
                                    <div>
                                        {formatNumber(
                                            instructorCourseDetails?.reviews
                                        )}
                                        + Reviews
                                    </div>
                                </li>
                                <li className="flex space-x-3">
                                    <Star className="text-gray-600" />
                                    <div>
                                        {instructorCourseDetails?.ratings}{" "}
                                        Rating
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <p className="text-gray-600">{instructor?.bio}</p>
            </div>
        </TabsContent>
    );
}
