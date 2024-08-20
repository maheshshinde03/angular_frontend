
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';



export const confirmPasswordValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    let password = control.get('password');
    let confirmPassword = control.get('confirmPassword');

    if (password && confirmPassword && password.value !== confirmPassword.value) {
        return { passwordMismatch: true };
    }

    return null;
};

export function strongPasswordValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const password = control.value;

        // Check if the password is at least 8 characters long.
        if (password.length < 8) {
            return {
                minLength: {
                    requiredLength: 8,
                    actualLength: password.length,
                },
            };
        }

        // Check if the password contains at least one uppercase letter.
        if (!/[A-Z]/.test(password)) {
            return {
                uppercase: true,
            };
        }

        // Check if the password contains at least one lowercase letter.
        if (!/[a-z]/.test(password)) {
            return {
                lowercase: true,
            };
        }

        // Check if the password contains at least one number.
        if (!/[0-9]/.test(password)) {
            return {
                number: true,
            };
        }

        // The password is strong.
        return null;
    };
}