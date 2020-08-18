import React, { useEffect, useContext } from 'react';
import Spinner from "../layout/Spinner";
import GithubContext from "../../context/github/githubContext";

const User = ({ match }) => {

    const githubContext = useContext(GithubContext);
    const { loading, user, getUser, repos, getUserRepos } = githubContext;

    useEffect(() => {
        getUser(match.params.login);
        getUserRepos(match.params.login)
        // eslint-disable-next-line
    }, [])


    const { name, avatar_url, location, bio, blog, login, html_url, followers, following, public_repos, public_gists, hireable } = user;

    if (loading) return <Spinner />;

    return (
        <section id="main-container" className="mt-5 mb-5">
            <div className="container">
                <div className="row" id="profile">
                    <div className="col-md-3">
                        <img src={avatar_url} alt={name} style={{ width: '80%', borderRadius: '100%' }} />
                        <h4 className="mt-3">{name} {hireable ? (<i className="fa fa-check-circle"></i>) : (<i className="fa fa-times-circle"></i>)}</h4>
                        <p>@{login}</p>
                        <p className="bio">{bio}</p>
                        <a href={html_url} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-block">View Github Profile</a>
                        <div className="meta mt-3">
                            {location && (
                                <small className="d-block"><i className="fa fa-map"></i> {location}</small>
                            )}
                            {blog && (
                                <small className="d-block"><i className="fa fa-globe"></i> <a href={blog} target="_blank" rel="noopener noreferrer">Website</a></small>
                            )}
                        </div>
                    </div>

                    <div className="col-md-9">
                        <h5>Popular repositories</h5>
                        <hr />
                        <div className="mt-2 mb-4">
                            <span className="btn btn-danger" id="badge">
                                Followers: {followers}
                            </span> &nbsp;
                                <span className="btn btn-success" id="badge">
                                Following: {following}
                            </span> &nbsp;
                                <span className="btn btn-primary" id="badge">
                                Public Repos: {public_repos}
                            </span> &nbsp;
                                <span className="btn btn-dark" id="badge">
                                Public Gists: {public_gists}
                            </span>
                        </div>
                        <div className="row row-cols-1 row-cols-md-2 g-4" id="repos">
                            {repos.map(repo => (
                                <div className="col" key={repo.id}>
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title"><a href={repo.html_url} target="_blank" rel="noopener noreferrer" >{repo.name}</a></h5>
                                            <p className="card-text">{repo.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default User;
