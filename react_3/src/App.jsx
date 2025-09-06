import React from "react"

function App() {

  return <div style={{display: "flex", background: "black"}}>
    <Card>
      <div style={{color: "green", }}>
       what do you want post <br />
       <input type="text" />
      </div>
    </Card>
    <Card>
      hi there
    </Card>
  </div>
}

// function Card({ innerContent }) {
//   return  <span style={{background: "black", borderRadius: 10, color: "white", padding: 10, margin: 10}}>
//     {innerContent}
//   </span>

// }

function Card({ children }) {
  return  <span style={{ background: "white", borderRadius: 10, color: "", padding: 10, margin: 10}}>
    {children}
  </span>

}

export default App
