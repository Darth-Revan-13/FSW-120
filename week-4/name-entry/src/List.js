import React from "react"
function List (props) {
    return(
    <ol>
        {
            props.notlists.map(notlist => <li key={notlist}>
                {notlist}
            </li>)
        }
    </ol>
    );
}

export default List;