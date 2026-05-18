import { User } from './user';
import { Course } from "./course";
import { Class } from "./class";
export interface Student extends User {
    feesDate?: string;
    courseId?: number;
    course?: Course;
    classId?: number;
    class?: Class;
    teacherId?: number;
    teacher?: User;
}
//# sourceMappingURL=student.d.ts.map