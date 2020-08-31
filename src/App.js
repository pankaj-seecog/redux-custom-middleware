import React from "react";
import "./style.css";
import {connect} from 'react-redux';
const App = (props) => {
  return (
    <div>
      <h1>Runs Again : {props.pRuns}</h1>
      <p>
      <button onClick={props.pFour}>Four Runs</button>
      </p>
    </div>
  );
}

let mapStateToProps = (state)=>{
  return {
    pRuns : state.runs
  }
}

let mapDispatchToProps = (dispatch)=>{
  return {
    pFour : ()=>{
      dispatch({type : "FOUR"})
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
