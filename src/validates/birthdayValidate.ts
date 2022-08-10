import {IUser} from "../types/userType";
import {IErrorTypes} from "../types/validateErrorTypes";

export const birthdayValidate = (value: IUser): IErrorTypes => {
    const errors = {} as IErrorTypes;

    if (!value.birthday) {
        errors.message = 'Birthday is required!';
    } else {
        delete errors.message
    }

    return errors;
}