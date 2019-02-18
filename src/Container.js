import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import TextArea from "./Textarea.js";

import { setNote } from "./redux/action/index";

const mapStateToProps = state => {
  return {
    note: state.items.note
  }
};

const mapDispatchToProps = dispatch => {
  return {
    dispatchActionSetNote: payload =>
      dispatch(setNote(payload)),
  }
}

const Container = props => {
  const [isValue, setIsValue ] = useState(null);

  const handleSubmit = () => {
    props.dispatchActionSetNote(isValue);
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
