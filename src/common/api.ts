export interface ApiSuccessResponse<T> {
    status: 'success';
    message?: string;
    data: T;
}

export interface ApiErrorResponse {
    status?: string;
    message?: string;
    errors?: Record<string, string>;
}

export type ApiResponse<T> = ApiSuccessResponse<T> | ApiErrorResponse;
