import {useState} from "react";

export default ToggleMode => {
    const [mode, setMode] = useState(false);

    const toggle = () => {
        setMode(!mode);
    }

    return [mode, toggle];
}