import {useState} from "react";

function GoalForm(props) {
    const [formData, setFormData] = useState({goal:"",by:""})
    function changeHandler(e) {
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    function submitHandler(e){
        e.preventDefault();
        props.onAdd(formData);
        setFormData({goal:"", by:""})
    }

    return (
        <div>
            <h1>Cafe Barbara</h1>
            <form onSubmit={submitHandler}>
                <input type="text" name="goal" value={formData.goal} onChange={changeHandler}/>
                <input type="text" name="by" value = {formData.by} onChange={changeHandler}/>
                <button>Submit</button>
            </form>
        </div>
    )
}

function ListOfGoals(props) {
    return (
        <ul>
            {props.allGoals.map((eachGoal) => (
                <li key={eachGoal.goal}>
                    <span>My goal is to {eachGoal.goal}, by {eachGoal.by}</span>
                </li>
            ))}
        </ul>
    )
}

export default function SimpleForm() {
    const [allGoals,updateAllGoals] = useState([]);

    function addGoal(goal) {
        updateAllGoals([...allGoals,goal]);
    }
    return (
        <div>
            <GoalForm onAdd={addGoal}/>
            <ListOfGoals allGoals={allGoals}/>
        </div>
    )
}