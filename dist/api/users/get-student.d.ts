import { Enrollment } from '../../entities/enrollment';
import { UserResponse } from './user-response';
export type GetStudentResponse = UserResponse & {
    createdAt: string;
    updatedAt: string;
    enrollments: Enrollment[];
};
//# sourceMappingURL=get-student.d.ts.map