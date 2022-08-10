import React, {FC} from 'react';
import './style.scss'
import {IUser} from "../../types/userType";
import {IErrorTypes} from "../../types/validateErrorTypes";

interface Props {
    user: IUser,
    formErrors: IErrorTypes,
    jsonStr: string,
    handleDelete: any,
    handleNameValidate: any,
    handleEmailValidate: any,
    handleMessageValidate: any,
    handleChange: any,
    handleSubmit: any,
}

const FormsLayout: FC<Props> = ({user, handleChange, handleSubmit,
                                    formErrors, handleNameValidate, handleEmailValidate,
                                    handleMessageValidate, handleDelete, jsonStr
}) => {

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
                            onBlur={handleEmailValidate}
                            onChange={handleChange}
                        />

                        <p>{formErrors.email}</p>
                    </div>

                    <div className="field">
                        <div className="label">Phone</div>
                        <input
                            type="text"
                            placeholder="Number"
                            name="phone"
                            value={user.phone}
                            onKeyDown={handleDelete}
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
                                  onBlur={handleMessageValidate}
                                  onChange={handleChange}
                        />

                        <p>{formErrors.message}</p>
                    </div>

                    <button className="button">Submit</button>
                </div>
            </form>

            <pre>{jsonStr}</pre>
        </div>
    )
};

export default FormsLayout;
