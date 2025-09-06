import { useState } from "react";

function App() { 
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount(count => count+ 1); // safer way using functional update
  }

 setInterval(increaseCount, 1000)

  return (
    <div>
      <div style={{ display: "flex",  }}>
        <div
          style={{
            background: "red",
            borderRadius: "50%",
            width: 30,
            height: 30,
            paddingLeft: 10,
            paddingTop: 5,
            // color: "white",
            // display: "flex",
            // justifyContent: "center",
            // alignItems: "center",
            // fontWeight: "bold"
          }}
        >
          {count}
        </div>

        <img
          style={{ cursor: "pointer" }}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEW3hxg8CWDLn883TaHIoZAMSAjb3BGWX7K6lEJlBbVmvbXFdXHT6W7h8&s"
          width={50}
          height={50}
          alt="icon"
        />
      </div>

      <button onClick={increaseCount} style={{ marginTop: "10px" }}>
        Increase the count
      </button>
    </div>
  );
}

export default App;
