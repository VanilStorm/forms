import React, { useState } from 'react';
import {FC} from "react";
import FormsLayout from "./FormsLayout";
import {IUser} from "../../types/userType";

const FormsContainer: FC = () => {

    const [user, setUser] = useState<IUser>({
        name: '',
        email: '',
        phone: '',
        birthday: '',
        message: '',
    })

    const changeUserName = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setUser({...user, name: `${e.target.value}` })
    }

    const changeEmail = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setUser({...user, email: `${e.target.value}`})
    }

    const changePhone = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setUser({...user, phone: `${e.target.value}`})
    }

    const changeBDay = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setUser({...user, birthday: `${e.target.value}`})
    }

    const changeMessage = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setUser({...user, message: `${e.target.value}`})
    }

    console.log(user)

    return (
        <FormsLayout user={user}
                     changeUserName={changeUserName}
                     changeEmail={changeEmail}
                     changePhone={changePhone}
                     changeBDay={changeBDay}
                     changeMessage={changeMessage}
        />
    );
};

export default FormsContainer;