import React, { useEffect, useState } from "react";

export default function UpdateBrowserTab() {
    const [toggle,setToggle] = useState(false);

    const clickHandler = () => {
        setToggle(!toggle);
    }

    useEffect(() => {
        console.log("something")
        document.title = toggle ? "Welcome to Cafe Barbara" : "Example of the useEffect Hook"
    });

    // useEffect(() => {
    //     document.title = toggle ? "Welcome to Cafe Barbara" : "Example of the useEffect Hook"
    // },[]); // Will run this hook only once when the app is rendered

    return (
        <>
            <h1>Browser tab title change</h1>
            <button onClick={clickHandler}>Toggle Me!</button>
            {toggle && <h2>Welcome to Cafe Barbara</h2>}
        </>
    )
}