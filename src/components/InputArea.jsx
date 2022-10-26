import React from "react";
import { useState } from "react";

function InputArea(props) {
    const [item, setItem] = useState("");

    function handleChange(event) {
        setItem(event.target.value);
    }

    return (
        <div className="form">
            <input onChange={handleChange} type="text" value={item} />
            <button onClick={() => {
                props.onButton(item);
                setItem("");
                }
            }
            >
                <span>Add</span>
            </button>
        </div>
    );
}

export default InputArea;