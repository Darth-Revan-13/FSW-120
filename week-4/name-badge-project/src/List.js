import React from "react"
function List (props) {
    return(
    <span key={props.badgeList}>
        {
            props.badgeList
        }
    </span>
    );
}

export default List;