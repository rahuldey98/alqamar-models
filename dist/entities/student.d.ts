import { User } from './user';
import { Course } from "./course";
import { Class } from "./class";
export interface Student {
    userId: number;
    user: User;
    feesDate?: string;
    course?: Course;
    class?: Class;
}
//# sourceMappingURL=student.d.ts.map