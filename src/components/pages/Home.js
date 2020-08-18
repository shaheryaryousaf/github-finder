import React, { Fragment } from 'react';
import Users from "../users/Users";
import Alert from "../layout/Alert";
import Search from "../users/Search";

const Home = () => {
    return (
        <Fragment>
            <section id="search-form" className="mt-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <Alert />
                            <Search />
                        </div>
                    </div>
                </div>
            </section>

            <section id="main-container" className="mt-4 mb-4">
                <div className="container">
                    <Users />
                </div>
            </section>
        </Fragment>
    );
}

export default Home;
