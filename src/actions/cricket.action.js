import axios from "axios";

const myAction = () => {
    console.log("Inside the action creator");
  return (dispatch,getState) => {
    
      axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log("Inside the axios ",res.data);
       dispatch({
          type: "GET",
          users: res.data,
        });
      })
      .catch((err) => {
        console.log("the error is ", err);
      });
  };
};

export default myAction;
