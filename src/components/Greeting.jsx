import React from "react";

function Greeting({name}) {
    return (
    <div>
        <h2>Hello {name}, from the Greeting Component!</h2>
        <p>This is your first custom component in React.</p>
    </div>
    );
}

export default Greeting