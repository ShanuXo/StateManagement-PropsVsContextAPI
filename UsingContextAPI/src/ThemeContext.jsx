//create a ThemeContext.jsx file, importing the createContext function from React, and setting the default value of the context to the default theme.

import { createContext } from "react";

const ThemeContext = createContext({
    theme:"light",
});

export default ThemeContext;

