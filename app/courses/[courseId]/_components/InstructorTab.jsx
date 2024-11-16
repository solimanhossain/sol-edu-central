import { TabsContent } from "@/components/ui/tabs";
import {
    CheckCheck,
    MessageSquare,
    Presentation,
    Star,
    UserRound,
} from "lucide-react";

export default function InstructorTab() {
    return (
        <TabsContent value="instructor">
            <div className="bg-gray-50 rounded-md p-8">
                <div className="md:flex md:gap-x-5 mb-8">
                    <div className="h-[310px] w-[270px] max-w-full  flex-none rounded mb-5 md:mb-0">
                        <img
                            src="https://i.pravatar.cc/300"
                            alt=""
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
                                    <div>10+ Courses</div>
                                </li>
                                <li className="flex space-x-3">
                                    <UserRound className="text-gray-600" />
                                    <div>2k+ Student Learned</div>
                                </li>
                                <li className="flex space-x-3">
                                    <MessageSquare className="text-gray-600" />
                                    <div>1500+ Reviews</div>
                                </li>
                                <li className="flex space-x-3">
                                    <Star className="text-gray-600" />
                                    <div>4.9 Average Rating</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <p className="text-gray-600">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which do not
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum, you need to be sure there is not
                    anything embarrassing hidden in the middle of text. All the
                    Lorem Ipsum generators on the Internet tend.
                </p>
            </div>
        </TabsContent>
    );
}
