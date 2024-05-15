import { UserProvider,useUser } from "./UserContext";

const LoggedInUser = () => {
    const {user} = useUser();
    return (
        <p>Hello <span>{user.name}</span></p>
    )
}

const Header = () => {
    return (
        <header>
            <h2>Blog App</h2>
            <LoggedInUser/>
        </header>
    )
}

function Blog(){
    const {user} = useUser();
    return (
        <div>
            <Header/>
            <h2>What is Lorem Ipsum?</h2>
            <p>Whatever</p>
            <p>Written By {user.name}</p>
        </div>
    )
}

export default function Root() {
    return <UserProvider><Blog/></UserProvider>
}