import {IUser} from "../types/userType";
import {IErrorTypes} from "../types/validateErrorTypes";

export const validate = (value: IUser): IErrorTypes => {
    const errors = {} as IErrorTypes;

    const phoneNumbers = value.phone.split('').filter(item => Number(item));

    if (!value.name) {
        errors.name = 'Name is required!'
    }

    if (!value.email) {
        errors.email = 'Email is required!';
    }

    if (!value.phone ) {
        errors.phone = 'Phone is required!'
    } else if (phoneNumbers.length < 11) {
        errors.phone = 'Phone is required!'
    }

    if (!value.birthday) {
        errors.birthday = 'Birthday is required!'
    }

    if (!value.message) {
        errors.message = 'Message is required!'
    } else if (value.message.length < 10) {
        errors.message = 'The message must consist of 10 letters!'
    } else if (value.message.length >= 300) {
        errors.message = 'The maximum number of letters is 300!';
    }

    return errors;
}