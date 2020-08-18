import React, { Fragment, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import axios from "axios";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";
import User from "./components/users/User";

const App = () => {

    const [users, setUsers] = useState([]);
    const [user, setUser] = useState({});
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState(null);

    // state = {
    //   loading: false,
    //   users: [],
    //   user: {},
    //   repos: [],
    //   alert: null
    // }

    // Search Github Users
    searchUsers = async text => {
        this.setState({ loading: true });
        const res = await axios.get(`https://api.github.com/search/users?q=${text}&clinet_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&?clinet_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
        this.setState({ loading: false, users: res.data.items, alert: null })
    }

    // Search Single Github User
    getUser = async username => {
        this.setState({ loading: true });
        const res = await axios.get(`https://api.github.com/users/${username}`);
        this.setState({ loading: false, user: res.data, alert: null })
    }

    // Search Single Github User Repos
    getUserRepos = async username => {
        this.setState({ loading: true });
        const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=8&sort=created:asc`);
        this.setState({ loading: false, repos: res.data, alert: null })
    }

    // Clear Users
    clearUsers = () => {
        this.setState({ users: [], loading: false })
    }

    // Set Alert
    setAlert = msg => {
        this.setState({ alert: { msg } })
        setTimeout(() => this.setState({ alert: null }), 5000)
    }

    return (
        <Router>
            <Fragment>
                <Navbar />
                <Switch>
                    <Route exact path="/" render={props => (
                        <Fragment>
                            <section id="search-form" className="mt-4">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <Alert alert={this.state.alert} />
                                            <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers} showClear={this.state.users.length > 0 ? true : false} setAlert={this.setAlert} />
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section id="main-container" className="mt-4 mb-4">
                                <div className="container">
                                    <Users loading={this.state.loading} users={this.state.users} />
                                </div>
                            </section>
                        </Fragment>
                    )} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/user/:login" render={props => (
                        <Fragment>
                            <User {...props} getUser={this.getUser} loading={this.state.loading} user={this.state.user} getUserRepos={this.getUserRepos} repos={this.state.repos} />
                        </Fragment>
                    )} />
                </Switch>
            </Fragment>
        </Router>
    )
}

export default App;
