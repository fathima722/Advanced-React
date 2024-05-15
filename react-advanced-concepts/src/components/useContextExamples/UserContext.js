import { createContext, useState, useContext} from "react";

// createContext is the function the gives the new context object back
const UserContext = createContext(undefined);

// creating a provider component
export const UserProvider = ({children}) => {

    const [user] = useState({
        name: "Abc",
        email: "abc@email.com",
        dob: "01/01/1000"
    })
    // UserContext.Provider components allows consuming components to subscribe to context changes. This component accepts value props that we be passed to consuming/descendent components
    // Here we are rendering the UserContext.Provider component and hooking up the state to the value prop
    return <UserContext.Provider value={{user}}>{children}</UserContext.Provider>
}

// Providing a way for components to subscribe to the context - For that we are creating a custom hook that wraps the useContext hook which is the way to consume a context value
export const useUser = () => useContext(UserContext);