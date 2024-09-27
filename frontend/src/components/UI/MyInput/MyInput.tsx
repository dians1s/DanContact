import React from "react";
import classes from "./MyInput.module.scss"

interface MyInputProps {
    [x: string]: any;
}

const MyInput: React.FC<MyInputProps> = ({...props}) => {

    return(
        <input className={classes.input} {...props} />
    )
}

export default MyInput;