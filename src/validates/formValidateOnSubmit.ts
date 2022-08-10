import {IUser} from "../types/userType";
import {IErrorTypes} from "../types/validateErrorTypes";

export const validate = (value: IUser): IErrorTypes => {
    const errors = {} as IErrorTypes;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!value.name) {
        errors.name = 'Name is required!'
    }


    if (!value.email && value.email !== '') {
        errors.email = 'Email is required!';
    } else if (!emailRegex.test(value.email)) {
        errors.email = 'Email is invalid!';
    } else {
        delete errors.email
    }

    if (!value.phone ) {
        errors.phone = 'phone is required!'
    }

    if (!value.birthday) {
        errors.birthday = 'birthday is required!'
    }

    if (!value.message) {
        errors.message = 'message is required!'
    }

    return errors;
}