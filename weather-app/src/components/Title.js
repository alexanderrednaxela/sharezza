import React from 'react';


const Title = ({ cityName }) => {
    return(
        <h1 className="title">
            This is the weather in <span>{cityName}</span>
        </h1>
    );
}

export default Title;
