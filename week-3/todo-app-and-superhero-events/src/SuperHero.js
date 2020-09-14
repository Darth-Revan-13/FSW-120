import React from 'react';

function SuperHero(props) {

    const catchphrase = () => {
        alert(props.catchPhrase)
    }

    return(
        <div>
            <h1 onClick={catchphrase}>{props.name}</h1>
            <p>{props.show}</p>
            <img src={props.imageName} onClick={catchphrase}/>
        </div>
    )
}

export default SuperHero