import { useState } from "react";
import './Functionality.scss'

const API_URL = "https://api.github.com";

async function fetchResult(query) {
    try {
        const response = await fetch(`${API_URL}/search/users?q=${query}`)
        const json = await response.json();
        return json.items || [];
    } catch (e) {
        throw new Error(e);
    }
}

const Functionality = () => {
    const [query, setQuery] = useState("");
    const [result, setResult] = useState([]);

    function onSearchChange(e) {
        setQuery(e.target.value)
    }

    async function onSearchSubmit(e) {
        e.preventDefault();
        const results = await fetchResult(query);
        setResult(results)
    }

    return (
        <div className="gh">
            <Form
                onChange={onSearchChange}
                onSubmit={onSearchSubmit}
                value={query}
            />
            <h3>Results</h3>
            <div id="results">
                <div>
                    {result.map((user) => (
                       <User
                        key={user.login}
                        avatar={user.avatar_url}
                        url={user.html_url}
                        username={user.login}
                    />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Functionality;

function User({ avatar, url, username }) {
  return (
    <div className="user">
      <img src={avatar} alt="Profile" width="50" height="50" />
      <a href={url} target="_blank" rel="noopener noreferrer">
        {username}
      </a>
    </div>
  );
}

function Form({ onSubmit, onChange, value }) {
  return (
    <form className="search-form" onSubmit={onSubmit}>
      <input
        id="search"
        type="text"
        placeholder="Enter username or email"
        onChange={onChange}
        value={value}
      />
      <button type="submit">Search</button>
    </form>
  );
}