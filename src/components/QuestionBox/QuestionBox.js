import React from "react";
import SubQuestions from "../SubQuestions/SubQuestions";
import Auxiliarry from "../../hoc/Auxiliarry";
import { Radio, RadioGroup } from "@material-ui/core";


const QuestionBox = (props) => {
  return (
    <Auxiliarry>
      {props.questions.map((question) => (
        
        <RadioGroup
          key={question.id}
          name="questions"
          onChange={props.handleChange}
        >
          <p>
            {question.label}
            {question.questionTitle}
          </p>

          <label>
            <Radio
              id={question.label + "yes"}
              value="5342"
              name={question.label}
            
            />
            NAI
          </label>
          <label>
            <Radio
              value="5341"
              id={question.label + "no"}
              name={question.label}
            />
            OXI
          </label>

          {question.subQuestions.map((subquestion) => (
            <SubQuestions
              key={subquestion.subId}
              subTitle={subquestion.subTitle}
              subLabel={subquestion.subLabel}
            />
          ))}
        </RadioGroup>
      ))}
    </Auxiliarry>
  );
};

export default QuestionBox;
