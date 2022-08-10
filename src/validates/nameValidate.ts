import {IErrorTypes} from "../types/validateErrorTypes";
import {IUser} from "../types/userType";

export const nameValidate = (value: IUser): IErrorTypes => {
    const errors = {} as IErrorTypes;

    if (!value.name) {
        errors.name = 'Name is required!'
    } else if (value.name) {
        let spaceCounter: number = 0;
        let names: number = 0;

        value.name.split('').forEach(char => {
            if (char === ' ') {
                spaceCounter++
            }
        })

        value.name.split(' ').forEach(name => name && names++)

        if (spaceCounter > 1) {
            errors.name = 'Should be only one space!';
        } else if (spaceCounter === 0) {
            errors.name = 'Enter your name & surname!';
        } else if (spaceCounter === 1 && names !== 2) {
            errors.name = 'Enter your name & surname';
        } else if (spaceCounter === 1 && names == 2) {
            delete errors.name
        }
    }

    return errors;
}