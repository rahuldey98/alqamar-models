import { User } from './user';

export interface Student extends User {
    feesDate?: string;
    courseId?: number;
    classId?: number;
}
