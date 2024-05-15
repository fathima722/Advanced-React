import { useEffect } from "react";

//This custom hook created here can be reused by multiple components just by passing a different argument to the useConsoleLog hook.
function useConsoleLog(varName) {
  useEffect(() => {
     console.log(varName);
  }, [varName]);
}

export default useConsoleLog;