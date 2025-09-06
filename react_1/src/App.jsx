import {  useEffect, useState } from "react";


// condition rendering (its help to learn about dependency array) 

//useEffect , dependency array, cleanup
 function App() {
  const [count1, setCount1] =  useState(0);
  const [count2, setCount2] =  useState(0);

  function increase() {
    setCount1(c => c + 1);

  }

  function decrease() {
    setCount2  (c => c - 1);
  }
  
  return <div>
    <Counter count1={count1}  count2={count2} />
    <button onClick={increase}>Home</button>
    <button onClick={decrease}>Notification</button>
  </div>
}
 
function Counter(props) {

    useEffect(function() {
      console.log("mount");

      return function() {
        console.log("unmount");
        
      }
      
    }, []);
    
  
useEffect(function() {
  console.log("count has changed");

  return function() {
    console.log("cleanup inside second effect");
    
  }
  
}, [props.count1, props.count2])

return <div>
  Counter1 {props.count1} <br />
  Counter2 {props.count2} <br />
  </div>

}
export default App; 
 