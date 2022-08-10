import {IUser} from "../types/userType";
import {IErrorTypes} from "../types/validateErrorTypes";

export const messageValidate = (value: IUser): IErrorTypes => {
    const errors = {} as IErrorTypes;


    if (!value.message) {
        errors.message = 'Message is required!';
    } else if (value.message.length < 10) {
        errors.message = 'The message must consist of 10 letters!';
    } else if (value.message.length > 300) {
        errors.message = 'The maximum number of letters is 300!';
    }
    else  {
        delete errors.message
    }

    return errors;
}