// import {  useState } from 'react'

// import './App.css'

// //custom hooks

// function useCounter() {
//   const [count, setCount] = useState(0);

//   function increaseCount () {
//     setCount( count + 1);

//   }
//   return {
//       count: count,
//       increaseCount: increaseCount,
//     }

// }

// function App() {
//   const {count, increaseCount} = useCounter();

//   return (
//   <div>
//       <button onClick={increaseCount}> Increase {count}
//       </button>
//     </div>
//   )
// }

// export default App

 //////////////////////////////////////////////////////// USE-Fetch hai/////////////////////////
 ////////////////////// USE-Fetch and new libary like swr and other also have go search in chat-gpt and search-engine

// import { useState, useEffect, use } from "react";
// import { useFetch, usePostTitle } from "./hooks/useFetch";
// import "./App.css";

// function App() {
//   const [currentPost, setCurrentPost] = useState(1);
//   const { finalData, loading, error } = useFetch(
//     "https://jsonplaceholder.typicode.com/posts/2" + currentPost,
//     10
//   ); //polling timeout maybe they ask in interview to do polling timeout like asking i want hit ya fetch the arrgument in every 10sec

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   // react swr, tanstack query is all libary using in company external libary
//   return (
//     <div>
//       <button
//         onClick={() => setCurrentPost(1)}
//         style={{
//           backgroundColor: currentPost === 1 ? "blue" : "black",
//           color: "white",
//         }}
//       >
//         1
//       </button>

//       <button
//         onClick={() => setCurrentPost(2)}
//         style={{
//           backgroundColor: currentPost === 2 ? "blue" : "black",
//           color: "white",
//         }}
//       >
//         2
//       </button>

//       <button
//         onClick={() => setCurrentPost(3)}
//         style={{
//           backgroundColor: currentPost === 3 ? "blue" : "black",
//           color: "white",
//         }}
//       >
//         3
//       </button>
//       {JSON.stringify(finalData)}
//     </div>
//   );
// }

// export default App;


///////////////////////////////////////////////////////  UsePrev ka code hai //////////////

// import React from 'react';
// import { useState } from 'react'
// import { usePrev} from "./hooks/usePrev"

// function App() {
//   const [state, setState] = useState(0)
//   const prev = usePrev(state);
  
  

//   return (
//    <>
//      <p>
//        {state}
//      </p>
//      <button onClick= {() => {
//        setState((curr) => curr + 1);
//      }}>
//        Clike me 
//      </button>
//     <p>
//       previous value  wass {prev}
//     </p>
//    </>
//   )
// }

// export default App


////////////////////////////////// USE-DEBOUNCE //////////////////////////////////////////////

import React, { useEffect } from 'react';
import { useState } from 'react'
// import { usePrev} from "./hooks/use-prev"

const useDebounce = ( value, delay) => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };

  }, [value, delay]);
  
  return debounceValue;
};

 function App() {
  const [inputVal, setInputVal] = useState("");
  const debounceValue = useDebounce(inputVal, 200)

  function change(e) {
    setInputVal(e.target.value)
  }

  useEffect(() => {
  // expensive operation
  // fetch
  console.log("expensive operation");
  
  } ,[debounceValue])

  return (
    <>
    <input id="input" type="text" onChange={change} />
    </>
  );
 }
export default App;