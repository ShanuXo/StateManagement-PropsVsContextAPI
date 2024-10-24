import React from 'react'

const ChildComponet = (props) => {

    const handleChange = (event) => {
        props.updateMessage(event.target.value)
    }

  return (
    <div>
      <h1>Child Component</h1>
      <p>Message from Parent Component: {props.message}</p>
      <input 
      type="text"
      value={props.message}
      onChange={handleChange} 
      />
    </div>
  )
}

export default ChildComponet
