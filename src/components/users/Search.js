import React, { useState, useContext } from 'react';
import GithubContext from "../../context/github/githubContext";
import AlertContext from "../../context/alert/alertContext";

const Search = () => {

    const githubContext = useContext(GithubContext);
    const alertContext = useContext(AlertContext);

    const [text, setText] = useState('');

    const onChange = (e) => {
        setText(e.target.value)
    }

    const onSubmit = e => {
        e.preventDefault();
        if (text === '') {
            alertContext.setAlert("Please enter a name")
        } else {
            githubContext.searchUsers(text);
            setText('');
        }
    }

    return (
        <div>
            <form onSubmit={e => onSubmit(e)}>
                <div className="mb-2">
                    <input type="text" name="text" className="form-control" value={text} placeholder="Enter Github Username" onChange={e => onChange(e)} />
                </div>
                <div className="mb-2">
                    <button className="btn btn-primary btn-block" type="submit">Search</button>
                    {githubContext.users.length > 0 && (
                        <button className="btn btn-info btn-block" onClick={githubContext.clearUsers}>Clear</button>
                    )}
                </div>
            </form>
        </div>
    );
}

export default Search;
