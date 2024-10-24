import React, { useState } from 'react'
import ChildComponent from './ChildComponet';

const ParentComponent = () => {
    const[message,setMessage]=useState("Hello from the Parent Component!");

    const updateMessage = (newMessage) => {
        setMessage(newMessage)
    } 
  return (
    <div>
      <h1>Parent Component</h1>
      <ChildComponent message={message} updateMessage={updateMessage} />
    </div>
  )
}

export default ParentComponent
