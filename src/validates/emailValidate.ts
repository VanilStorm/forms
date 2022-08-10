import {IUser} from "../types/userType";
import {IErrorTypes} from "../types/validateErrorTypes";

export const emailValidate = (value: IUser): IErrorTypes => {
    const errors = {} as IErrorTypes;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!value.email) {
        errors.email = 'Email is required!';
    } else if (!emailRegex.test(value.email)) {
        errors.email = 'Email is invalid!';
    } else {
        delete errors.email
    }

    return errors;
}