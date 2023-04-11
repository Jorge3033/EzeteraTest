import { ValidationChain, check } from "express-validator";
import { EGlobalValidatoInportance } from "../../interfaces/Global.entities";
import ApiValidatorErrorResponse from "../ErrorResponeces/ValidatorErrorResponce.interactor";

export class ValidateInportance {
  constructor(
    private property: string,
    private inportance: EGlobalValidatoInportance
  ) {}

  get checkValidation(): ValidationChain {
    
    const validation: ValidationChain = check(this.property);

    if (this.inportance === EGlobalValidatoInportance.is_required) {
      validation
        .not()
        .isEmpty()
        .withMessage(
          new ApiValidatorErrorResponse({
            message: `el campo ${this.property} no puede estar vacio`,
            property: this.property,
            constraints: {
              notEmpty: `la hora ${this.property} no puede estar vacio`,
            },
          })
        );
    }

    if (this.inportance === EGlobalValidatoInportance.is_optional) {
      validation.optional();
    }

    return validation;
  }
}