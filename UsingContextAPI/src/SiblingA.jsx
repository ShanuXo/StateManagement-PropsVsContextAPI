import React, { useContext } from 'react'
import ThemeContext from './ThemeContext';

const SiblingA = () => {
    const { theme } = useContext(ThemeContext);
    console.log("SiblingA", theme);

  return (
    <div>
      <h1>
        Sibling Component A
      </h1>
    </div>
  )
}

export default SiblingA
