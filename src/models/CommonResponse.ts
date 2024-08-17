export interface CommonResponse<T> {
  data: T | null;
  error: string | null;
  isSuccess: boolean;
}