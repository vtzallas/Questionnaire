import './App.css';
import React,{Component} from 'react';
import Auxilliary from './hoc/Auxiliarry';
import Questionnaire from './containers/Questionnaire/Questionnaire'
import 'bootstrap/dist/css/bootstrap.min.css';
<link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
  integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
  crossorigin="anonymous"
/>

class App extends Component {
  render() {
    return (
      <Auxilliary>
        <Questionnaire/>
      </Auxilliary>
    );
  }
}


export default App;
