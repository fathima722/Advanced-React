import {useRef} from "react";

export default function UnControlledForm() {
    const inputRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const inputValue = inputRef.current.value;
        console.log(inputValue);
        inputRef.current.value = null;
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" ref={inputRef}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}