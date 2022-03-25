import React, { useState } from "react";

export default function AppOne() {

    const [input, setInput] = useState('');


    return (
        <div>
            <h2>App One</h2>
            <input type="text" onChange={(e) => setInput(e.target.value)} />
            <h3>{input}</h3>
        </div>
    )
}