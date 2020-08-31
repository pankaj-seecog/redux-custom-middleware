
let iniState = {
  runs : 0
}
console.log('Inside the cricket reducer');
let cricketReducer = (state=iniState,action) =>{
if(action.type=="FOUR"){
console.log('Four runs',state);  
return {
  ...state,
  runs : state.runs + 4
}
}
if(action.type=="SIX"){
return {
  ...state,
  runs : state.runs + 6
}
}
return state;
}
export default cricketReducer;