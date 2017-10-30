import { FormArray, FormControl, FormGroup, ValidationErrors } from '@angular/forms';

export class CustomValidators {
    static vaildEmail(c: FormControl): ValidationErrors {
        const email = c.value;
        var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
        var isValid = true;
        const message = {
            'vaildEmail': {
                'message': 'Should be valid email.'
            }
        };
        if (reg.test(email)){
            isValid = true;
        }
        else{
            isValid = false;
        }
        return isValid ? null : message;
    }
    static age(c: FormControl): ValidationErrors { 
       const num = Number(c.value);
       const isValid = !isNaN(num) && num >= 18 && num <= 85;
       const message = {
         'age': {
           'message': 'The age must be a valid number between 18 and 85' // Will changes the error defined in errors helper.
         }
       };
       return isValid ? null : message;
    }
}