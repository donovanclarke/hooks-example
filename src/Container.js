import React, { Fragment, useState } from "react";
import TextArea from "./Textarea.js";

const Container = () => {
  const [isValue, setIsValue ] = useState(null);

  const handleSubmit = () => {
    console.log('dispatch this value to redux: ', isValue);
  }

  const handleDispatch = note => {
    setIsValue(note);
  }

  return (
    <Fragment>
      <TextArea value={isValue} dispatchValue={handleDispatch} />
      <button onClick={handleSubmit}>Done</button>
    </Fragment>
  )
}

export default Container;
