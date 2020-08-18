import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';


const UserItem = ({ user: { login, id, html_url, avatar_url } }) => {
    return (
        <Fragment>
            <div className="col-md-4 mb-4">
                <div className="card" style={{ width: '100%' }}>
                    <img src={avatar_url} className="card-img-top" alt={login} />
                    <div className="card-body text-center">
                        <h5 className="card-title">{login}</h5>
                        <Link to={`/user/${login}`} className="btn btn-primary btn-sm">View Detail</Link>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}


UserItem.propTypes = {
    user: PropTypes.object.isRequired,
};


export default UserItem;
