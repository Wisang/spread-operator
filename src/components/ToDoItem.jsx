import React from "react";
import { useState } from "react";

function ToDo(props) {
    const [clicked, setClick] = useState(false);

    function handleClick() {
        setClick((prevValue) => {
            return !prevValue;
        });
    }

    return (
        <div
            style={{
                textDecoration: clicked ? "line-through" : ""
            }}
            onClick={handleClick}
        >
            <li>{props.text}</li>
        </div>
    );
}

export default ToDo;