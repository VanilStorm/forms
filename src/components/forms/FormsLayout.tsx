import React, {FC} from 'react';
import './style.scss'
import {IUser} from "../../types/userType";

interface Props {
    user: IUser,
    changeUserName: any,
    changeEmail: any,
    changePhone: any,
    changeBDay: any,
    changeMessage: any,
}

const FormsLayout: FC<Props> = ({user, changeUserName, changeEmail,
                                    changePhone, changeBDay, changeMessage}) => {

    return (
        <div className="container">
            <form>
                <div className="form">
                    <div className="field">
                        <div className="label">Name</div>
                        <input
                            type="text"
                            placeholder="Name Surname"
                            value={user.name}
                            onChange={changeUserName}
                        />

                        <p>error</p>
                    </div>

                    <div className="field">
                        <div className="label">Email</div>
                        <input
                            type="text"
                            placeholder="Email"
                            value={user.email}
                            onChange={changeEmail}
                        />

                        <p>error</p>
                    </div>

                    <div className="field">
                        <div className="label">Phone</div>
                        <input
                            type="number"
                            placeholder="Number"
                            value={user.phone}
                            onChange={changePhone}
                        />

                        <p>error</p>
                    </div>

                    <div className="field">
                        <div className="label">Birthday</div>
                        <input
                            type="date"
                            placeholder="Date"
                            value={user.birthday}
                            onChange={changeBDay}
                        />

                        <p>error</p>
                    </div>

                    <div className="field textarea">
                        <textarea placeholder="Enter your massage"
                                  value={user.message}
                                  onChange={changeMessage}
                        />

                        <p>error</p>
                    </div>

                    <button className="button">Submit</button>
                </div>
            </form>
        </div>
    )
};

export default FormsLayout;
