import React from "react";

const TextArea = ({ value, dispatchValue }) => {
  const setBaseline = note => {
    dispatchValue(note.currentTarget.value);
  }
  
  return (
    <textarea
      defaultValue={value}
      onChange={(e) => setBaseline(e)}
    />
  )
}

export default TextArea;
