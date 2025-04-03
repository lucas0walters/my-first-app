import React from "react";
import { formatDate, formatCurrency } from "./Utils";

function Greeting({name}) {
    return (
    <div>
        <h2>Hello {name}, from the Greeting Component!</h2>
        <p>This is your first custom component in React.</p>
        <p>Today's date is: {formatDate(new Date())}</p>
        <p>Your balance is: {formatCurrency(1234.56)}</p>
        <p>Goodbye {name}, from the Greeting Component!</p>
    </div>
    );
}

export default Greeting