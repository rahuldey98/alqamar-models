import { User } from './user';

export interface Teacher extends User {
    meetLink?: string;
    noOfStudents: number;
}
