export interface ErrorResponse {
  message: string;
  property: string;
  constraints: {
    [type: string]: string | string[] | number;
  } | undefined;
}

export default class ApiValidatorErrorResponse implements ErrorResponse {
  message: string;
  property: string;
  constraints: {
    [type: string]: string | string[] | number;
  } | undefined;

  constructor(errorResponse: ErrorResponse) {
    this.message = errorResponse.message;
    this.property = errorResponse.property;
    this.constraints = errorResponse.constraints;
  }
  
}