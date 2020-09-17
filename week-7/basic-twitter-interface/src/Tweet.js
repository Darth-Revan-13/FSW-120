import React from 'react';

// function handleRemove(id) {
//     console.log(id);
// }

function Tweet (props) {
    return(
        // <span key={props.tweetList}>
        //     {
        //         props.tweetList
        //     }
        // </span>
        <ul>
            {
                props.tweetLists.map(tweetList => <li key={tweetList}>
                    {tweetList}
                    {/* <button type="button" onClick={() => handleRemove(props.id)}>Delete</button> */}
                </li>)
            }
        </ul>
    )
}

export default Tweet