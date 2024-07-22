import React from 'react';
import ReactDOM from 'react-dom';

const handleClick = () => {
    fetch("/api/login", {
        method: "POST"
    })
};


React.render(<button onClick={handleClick}>login</button>, document.getElementById('root'));
