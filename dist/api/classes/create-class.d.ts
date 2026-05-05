import { ClassSchedule } from '../../entities/class';
export interface CreateClassRequest {
    courseId: number;
    teacherId: number;
    studentIds: number[];
    meetingLink?: string | null;
    schedules: ClassSchedule[];
}
export type CreateClassResponse = CreateClassRequest & {
    id: number;
};
//# sourceMappingURL=create-class.d.ts.map