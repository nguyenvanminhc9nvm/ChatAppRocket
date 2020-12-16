export interface DefaultBaseResponse<T> {
  status: string;
  data: T;
  error: string;
  message: string;
}

export interface BaseResponse<T> {
  data: DefaultBaseResponse<T>;
}
