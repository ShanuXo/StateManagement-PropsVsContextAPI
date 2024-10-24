//create a provider component which wraps the components you want the values in the context to be available to, using the children prop.
import React , {useState} from "react";
import ThemeContext from "./ThemeContext";

const ThemeProvider = ({childern}) => {
    const[theme,setTheme]=useState("light");

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme == 'light' ? 'dark' : 'light'));
    };


    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {childern}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;