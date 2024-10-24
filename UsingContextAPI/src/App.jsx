import './App.css'
import SiblingA from './SiblingA';
import SiblingB from './SiblingB';
import SiblingC from './SiblingC';
import ThemeProvider from './ThemeProvider';
import ThemeButton from './ThemeButton';


// To ensure that the ThemeContext and its values are accessible to all descendant components within the component tree, import the sibling components in the App component and wrap them with the ThemeProvider component, imported from ThemeContext.
function App() { 

  return (
    <>
      <ThemeProvider>
        <SiblingA />
        <SiblingB />
        <SiblingC />
        <ThemeButton />
      </ThemeProvider>
      
    </>
  )
}

export default App
