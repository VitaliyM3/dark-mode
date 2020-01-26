import React, { useEffect } from "react";
import {useLocalStorage} from "../hooks/useLocalStorage";
import { visitFunctionBody } from "typescript";


export const useDarkMode = (key) => {
//Set up state
const [value, setValue] = useLocalStorage(key);
// if value is true, then add  class name dark mode to the body. if value is false remove dark mode class  form the body
useEffect(() => {
    const body = document.querySelector('body');
    if(value) {
        body.className = "dark-mode";
    }
    else {
        body.className = "";
    }
}, [value]);

return [value, setValue];
};

// value needs to go into dep array to trigger toggle;
// darkmode will return value and setvalue;