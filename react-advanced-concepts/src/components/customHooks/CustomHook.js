import { useState } from "react";
import useConsoleLog from "./useConsoleLog";

function CustomHook() {
  const [count, setCount] = useState(0);
  //custom hook that we created in a seperate file.
  useConsoleLog(count);

  function increment() {
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <div>
       <h1>Count: {count}</h1>
       <button onClick={increment}>Increment the count</button>
      {" "}
    </div>
  );
}

export default CustomHook;
