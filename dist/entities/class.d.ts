import { DayOfWeek } from '../common/enums';
import { DateString, TimeString } from '../common/scalars';
export interface Class {
    id: number;
    meetLink: string | null;
    status: string;
    startDate: DateString;
    courseId: number;
}
export interface ClassSchedule {
    dayOfWeek: DayOfWeek;
    startTime: TimeString;
    endTime: TimeString;
}
//# sourceMappingURL=class.d.ts.map