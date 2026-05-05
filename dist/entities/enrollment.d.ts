import { Class } from './class';
import { Course } from './course';
export interface Enrollment {
    class: Class & {
        course: Course;
    };
}
//# sourceMappingURL=enrollment.d.ts.map