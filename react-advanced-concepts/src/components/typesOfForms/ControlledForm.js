import React from "react";
import { useState } from "react";

function ControlledForm() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    console.log('Submit is clicked');
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Personal</legend>
          <label htmlFor="name">Name:</label>
          <input id="name" type="text" placeholder="Name" value={name} name="name" onChange={e => setName(e.target.value)}/>
          <button type="submit" disabled={!name}>Submit</button>
        </fieldset>
      </form>
    </div>
  );
}

export default ControlledForm;
