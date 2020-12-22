import React, { Component } from "react";
// import Auxiliary from "../../hoc/Auxiliarry";
import questionApi from "../../questions";
import QuestionBox from "../../components/QuestionBox/QuestionBox";
import "./Questionnaire.css";

class Questionnaire extends Component {
  state = {
    questionBank: [],
    values: [],
    defaultValue: "5341",
    fieldValues: [],
  };

  getQuestions = () => {
    questionApi.then((question) => {
      this.setState({ questionBank: question });
    });
  };

  componentDidMount() {
    this.getQuestions();
  }

  handleChangeEvent = (event) => {
    const newelement = { id: event.target.id, name: event.target.name };
    const a = this.state.fieldValues
    if(this.state.fieldValues.length){
    a.forEach(function (item, i) {
      if (item.name === event.target.name) {
        a[i] = newelement;
        return (
          this.setState({fieldValues : a})
        );
      } else {
        return this.setState((prevState) => ({
          fieldValues: [...prevState.fieldValues, newelement],
        }));
      }
    });
  } else {
    return this.setState((prevState) => ({
      fieldValues: [...prevState.fieldValues, newelement],
    }));
  }
}

  render() {
    return (
      <div className="container">
        <QuestionBox
          questions={this.state.questionBank}
          defaultValue={this.state.defaultValue}
          handleChange={(event) => this.handleChangeEvent(event)}
          selected={this.state.selected}
          childComponentRef={(n) => (this.childComponentRef = n)}
          // label={question.label}
          //  subQuestions={question.subQuestions}
          // key={question.id}
          // ref={(inputEl) => {this.inputEl = inputEl}}
        />
      </div>
    );
  }
}
export default Questionnaire;
