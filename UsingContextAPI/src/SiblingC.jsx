import React, { useContext } from 'react'
import ThemeContext from './ThemeContext';

const SiblingC = () => {
    const { theme } = useContext(ThemeContext);
    console.log("Sibling Component C " , theme);
  return (
    <div>
      <h1>
        Sibling Component C
      </h1>
    </div>
  )
}

export default SiblingC