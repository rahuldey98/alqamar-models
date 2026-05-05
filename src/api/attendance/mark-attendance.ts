import { DateString } from '../../common/scalars';

export interface MarkAttendanceRequest {
    classId: number;
    date: DateString;
}

export interface MarkAttendanceResponse {
    success: true;
}
