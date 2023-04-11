export enum ApiVersion {
  V1 = 'v1',
  V2 = 'v2',
}

export interface ErrorResponse<Type> {
  status: number;
  message: Type;
  apiVersion: ApiVersion;
  module : string;
  timestamp: Date;
  url: string;
}