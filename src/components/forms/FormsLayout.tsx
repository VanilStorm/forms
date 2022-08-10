import React, {FC} from 'react';
import './style.scss'
import {IUser} from "../../types/userType";
import {IErrorTypes} from "../../types/validateErrorTypes";
import {nameValidate} from "../../validates/nameValidate";

interface Props {
    user: IUser,
    formErrors: IErrorTypes,
    handleNameValidate: any,
    handleChange: any,
    handleSubmit: any,
}

const FormsLayout: FC<Props> = ({user, handleChange, handleSubmit, formErrors, handleNameValidate}) => {

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="form">
                    <div className="field">
                        <div className="label">Name</div>
                        <input
                            type="text"
                            placeholder="Name Surname"
                            name="name"
                            value={user.name}
                            onBlur={handleNameValidate}
                            onChange={handleChange}
                        />

                        <p>{formErrors.name}</p>
                    </div>

                    <div className="field">
                        <div className="label">Email</div>
                        <input
                            type="text"
                            placeholder="Email"
                            name="email"
                            value={user.email}
                            onChange={handleChange}
                        />

                        <p>{formErrors.email}</p>
                    </div>

                    <div className="field">
                        <div className="label">Phone</div>
                        <input
                            type="number"
                            placeholder="Number"
                            name="phone"
                            value={user.phone}
                            onChange={handleChange}
                        />

                        <p>{formErrors.phone}</p>
                    </div>

                    <div className="field">
                        <div className="label">Birthday</div>
                        <input
                            type="date"
                            placeholder="Date"
                            name="birthday"
                            value={user.birthday}
                            onChange={handleChange}
                        />

                        <p>{formErrors.birthday}</p>
                    </div>

                    <div className="field textarea">
                        <textarea placeholder="Enter your massage"
                                  name="message"
                                  value={user.message}
                                  onChange={handleChange}
                        />

                        <p>{formErrors.message}</p>
                    </div>

                    <button className="button">Submit</button>
                </div>
            </form>
        </div>
    )
};

export default FormsLayout;
