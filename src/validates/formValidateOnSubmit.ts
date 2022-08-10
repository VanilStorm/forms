import {IUser} from "../types/userType";
import {IErrorTypes} from "../types/validateErrorTypes";

export const validate = (value: IUser): IErrorTypes => {
    const errors = {} as IErrorTypes;

    if (!value.name) {
        errors.name = 'Name is required!'
    }

    if (!value.email) {
        errors.email = 'Email is required!';
    }

    if (!value.phone ) {
        errors.phone = 'Phone is required!'
    }

    if (!value.birthday) {
        errors.birthday = 'Birthday is required!'
    }

    if (!value.message) {
        errors.message = 'Message is required!'
    }

    return errors;
}