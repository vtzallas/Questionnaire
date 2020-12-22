import React from "react";

const subQuestions = (props) => (
  <div key={props.subId} className="form-group">
    <p>{props.subTitle}</p>
    <input
      id={props.subLabel + "yes"}
      type="radio"
      value="5342"
      name={props.subLabel}
      // checked ={props.subLabel}
    />
    <label>ΝΑΙ</label>
    <input
      id={props.subLabel + "no"}
      type="radio"
      value="5341"
      name={props.subLabel}
      // checked ={props.subLabel}
    />
    <label >ΟΧΙ</label>
  </div>
);

export default subQuestions;
