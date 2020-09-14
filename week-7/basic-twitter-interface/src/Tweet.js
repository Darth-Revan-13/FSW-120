import React from 'react';

function Tweet (props) {
    return(
        <span key={props.tweetList}>
            {
                props.tweetList
            }
        </span>
    )
}

export default Tweet