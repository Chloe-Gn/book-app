import { Directive, input } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
  ValidatorFn,
} from '@angular/forms';

/* helpers functions and factories often put above the class for:
- better viibility when scanning the file
- availability within the class without hoisting concerns
- keeping the class clean and focused on logic, while utility functions stay seperate
*/

/* returns a configured validator function
  the function returns either null if the control value is valid or a validation error object
  validation error object typically has a property whose name is the validation key, 'forbiddenName',
   and whose value is an arbitrary dictionary of values that you could insert into an error message,
   {name}
*/
export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? { forbiddenName: { value: control.value } } : null;
  };
}

@Directive({
  selector: '[appForbiddenName]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: ForbiddenValidatorDirective,
      multi: true,
    },
  ],
})
export class ForbiddenValidatorDirective implements Validator {
  //currently not using that directive because I'm not building template-driven forms.
  // I'll use the factory above when creating the form, in the class directly.

  forbiddenName = input<string>('', { alias: 'appForbiddenName' });

  validate(control: AbstractControl): ValidationErrors | null {
    return this.forbiddenName
      ? forbiddenNameValidator(new RegExp(this.forbiddenName(), 'i'))(control)
      : null;
  }
}
