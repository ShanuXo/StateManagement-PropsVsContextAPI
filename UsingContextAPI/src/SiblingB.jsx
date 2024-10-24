import React, { useContext } from 'react'
import ThemeContext from './ThemeContext';

const SiblingB = () => {
    const { theme } = useContext(ThemeContext);
    console.log("Sibling Component B " , theme);
  return (
    <div>
      <h1>
        Sibling Component B
      </h1>
    </div>
  )
}

export default SiblingB
