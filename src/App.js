import React from "react";
import "./style.css";
import { connect } from "react-redux";
import myAction from "./actions/cricket.action";
const App = (props) => {
  return (
    <div>
      <h1>Runs Again : {props.pRuns}</h1>
      <p>
      <button onClick={props.pFour}>4 Runs</button> | 
        <button onClick={props.fetchUsers}>Fetch Users</button>
        <table>
          <thead>
            <th>Name</th>
            <th>Email</th>
          </thead>
          <tbody>
            {props.pUsers.map((user, i) => {
              return (
                <tr key={i}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </p>
    </div>
  );
};

let mapStateToProps = (state) => {
  return {
    pRuns: state.runs,
    pUsers: state.users,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    pFour: () => {
      dispatch({type : "FOUR"});
    },
    fetchUsers : ()=>{
      dispatch(myAction());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
