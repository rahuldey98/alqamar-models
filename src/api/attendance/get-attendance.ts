import { DateString } from '../../common/scalars';
import { Attendance } from '../../entities/attendance';

export interface GetAttendanceQuery {
    fromDate?: DateString;
    toDate?: DateString;
}

export type GetAttendanceResponse = Attendance[];
