import { User } from './user';
import { Course } from "./course";
import { Class } from "./class";
export interface Student extends User {
    feesDate?: string;
    course?: Course;
    class?: Class;
}
//# sourceMappingURL=student.d.ts.map