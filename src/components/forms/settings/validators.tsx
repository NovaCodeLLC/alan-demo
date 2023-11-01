import {ref, object, string, InferType, boolean} from 'yup';

export const settingsValidators = object({
        Name: string().min(3, "Name must be at least 6 characters long").required("Name is required"),
        Email: string().email('Please enter a valid email address').required("Email is required"),
        Password: string().min(6, "Password must be at least 6 characters long").required("Password is required")
            .lowercase("Password must contain at least one lowercase letter")
            .uppercase("Password must contain at least one uppercase letter")
            .matches(/[0-9]/g, "Password must contain at least one number")
            .matches(/[^a-zA-Z\d]/g, "Password must contain at least one special character"),
        ["Confirm Password"]: string()
            .required('Please retype your password.')
            .oneOf([ref('$Password')], 'Your passwords do not match'),
        Subscribe: boolean(),
        Gender: string(),
        Theme: string().required("Theme is required").nonNullable()
});


export interface ISettingsForm extends InferType<typeof settingsValidators> {}
