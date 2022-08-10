import React, {useEffect, useState} from 'react';
import {FC} from "react";
import FormsLayout from "./FormsLayout";
import {IUser} from "../../types/userType";
import {IErrorTypes} from "../../types/validateErrorTypes";
import {validate} from "../../validates/formValidateOnSubmit";
import {nameValidate} from "../../validates/nameValidate";

const FormsContainer: FC = () => {

    const [user, setUser] = useState<IUser>({
        name: '',
        email: '',
        phone: '',
        birthday: '',
        message: '',
    });

    const [formErrors, setFormErrors] = useState<IErrorTypes>({});
    const [isSubmit, setIsSubmit] = useState<Boolean>(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const {name, value} = e.target;

        if (name === 'name') {
            setUser({...user, [name]: value.toUpperCase() })

            return;
        }

        setUser({...user, [name]: value })
    }

    const handleSubmit = (e :React.SyntheticEvent): void => {
        e && e.preventDefault();

        setFormErrors(validate(user));
    }

    const handleNameValidate = (): void => setFormErrors(nameValidate(user));

    // useEffect(()=> {
    //     setFormErrors(validate(user));
    // }, [formErrors])

    return (
        <FormsLayout user={user}
                     handleChange={handleChange}
                     handleSubmit={handleSubmit}
                     formErrors={formErrors}
                     handleNameValidate={handleNameValidate}
        />
    );
};

export default FormsContainer;