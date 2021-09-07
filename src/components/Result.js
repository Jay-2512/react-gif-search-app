import React from 'react';

const Result = (props) => {
    return(
        <img src={props.url} alt="Gif" />
        // <p>{props.url}</p>
    );
}

export default Result;