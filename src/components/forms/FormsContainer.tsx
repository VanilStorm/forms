import React, {useState} from 'react';
import {FC} from "react";
import FormsLayout from "./FormsLayout";
import {IUser} from "../../types/userType";
import {IErrorTypes} from "../../types/validateErrorTypes";
import {validate} from "../../validates/formValidateOnSubmit";
import {nameValidate} from "../../validates/nameValidate";
import {emailValidate} from "../../validates/emailValidate";
import {messageValidate} from "../../validates/messageValidate";
import {birthdayValidate} from "../../validates/birthdayValidate";

const FormsContainer: FC = () => {

    const [user, setUser] = useState<IUser>({
        name: '',
        email: '',
        phone: '+7(___)___-__-__',
        birthday: '',
        message: '',
    });

    const [formErrors, setFormErrors] = useState<IErrorTypes>({});
    const [isSubmit, setIsSubmit] = useState<Boolean>(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const {name, value} = e.target;

        switch (name) {
            case 'name': {
                setUser({...user, [name]: value.toUpperCase()});
                handleNameValidate();

                break;
            }

            case 'email': {
                setUser({...user, [name]: value });
                handleEmailValidate();

                break;
            }

            case 'message': {
                setUser({...user, [name]: value });
                handleMessageValidate();

                break;
            }

            case 'birthday': {
                setUser({...user, [name]: value });
                handleBirthdayValidate();

                break;
            }

            case 'phone': {
                const number = value.split('').pop();

                if (Number(number) || number === '0') {
                    let mask = user.phone.split('');
                    const numbers = number?.split('');

                    const int = mask.map((item, i) => {
                        if (item === '_' && numbers?.length) {
                            return numbers?.pop()
                        }
                        return item;
                    }).join('');

                    setUser({...user, [name]: int})
                }

            }

        }
    }

    const handleSubmit = (e :React.SyntheticEvent): void => {
        e && e.preventDefault();

        setFormErrors(validate(user));
    }

    const handleNameValidate = (): void => setFormErrors(nameValidate(user));
    const handleEmailValidate = (): void => setFormErrors(emailValidate(user));
    const handleMessageValidate = (): void => setFormErrors(messageValidate(user));
    const handleBirthdayValidate = (): void => setFormErrors(birthdayValidate(user));
    const handleDelete = (e: React.KeyboardEvent) => {
        if (e.key === "Backspace") {
            setUser({...user, phone: '+7(___)___-__-__'})
        }
    }

    return (
        <FormsLayout user={user}
                     handleChange={handleChange}
                     handleSubmit={handleSubmit}
                     formErrors={formErrors}
                     handleNameValidate={handleNameValidate}
                     handleEmailValidate={handleEmailValidate}
                     handleMessageValidate={handleMessageValidate}
                     handleDelete={handleDelete}
        />
    );
};

export default FormsContainer;