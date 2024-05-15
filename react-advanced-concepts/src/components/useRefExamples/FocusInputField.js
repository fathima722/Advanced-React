import React from 'react';

export default function FocusInputField(){
    const focusInputRef = React.useRef(null);


    return (
        <div>
            <h1>Using useRef to access underlying DOM</h1>
            <input ref={focusInputRef} type="text"/>
            <button onClick={() => focusInputRef.current.focus()}>Focus on Input Field</button>
        </div>
    )
}