import UserContext from "./UserContext";
import { useState } from "react";

const UserState = (props) => {
    const [value, setValue] = useState({}); 
    // loading bar
    const [progress, setProgress] = useState(0);
    // dark-light mode

    return (
        <UserContext.Provider value={{ value, setValue,progress ,setProgress}}>
            {props.children}
        </UserContext.Provider>
    )
}
export default UserState;