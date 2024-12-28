import { ModuleModel, LessonModel } from "@/models";

async function getAllModules(courseObjId) {
    const modules = await ModuleModel.find({ course: courseObjId }).populate({
        path: "lessonIds",
        model: LessonModel,
    });
    return modules;
}

export { getAllModules };
