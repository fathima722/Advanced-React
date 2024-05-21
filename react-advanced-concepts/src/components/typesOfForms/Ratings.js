import { useState } from "react";

export default function Ratings() {
    const [score,setScore] = useState("10");
    const [comment,setComment] = useState("");
    let isDisabled;

    const handleSubmit = (e) => {
        e.preventDefault();
        if(Number(score) <= 5 && comment.length <= 10){
            isDisabled = true;
            alert("Please provide a comment");
            return;
        }
        setScore("10");
        setComment("");
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <h2>Feedback Form</h2>
                    <div>
                        <label>Score: {score} ★</label>
                        <input type="range" min="0" max="10" value={score} onChange={(e)=>setScore(e.target.value)}/>
                        <div className="Field">
                            <label>Comments:</label>
                            <textarea value={comment} onChange={e=>setComment(e.target.value)}></textarea>
                        </div>
                    </div>
                    <button type="submit" disabled={isDisabled}>Submit</button>
                </fieldset>
            </form>
        </div>
    )
}