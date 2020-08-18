import React, { Fragment, useContext } from 'react';
import AlertContext from "../../context/alert/alertContext";

const Alert = () => {

    const alertContext = useContext(AlertContext);

    const { alert } = alertContext;

    return (
        alert !== null && (
            <Fragment>
                <div className="alert alert-primary" role="alert">
                    {alert.msg}
                </div>
            </Fragment>
        )
    )
}

export default Alert;
