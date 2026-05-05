import { DateString } from '../common/scalars';

export interface Attendance {
    id: number;
    classId: number;
    date: DateString;
}
