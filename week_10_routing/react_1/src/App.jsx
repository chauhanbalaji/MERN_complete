import './App.css'
import { BrowserRouter, Routes, Route, href} from "react-router-dom";

function App() {
  <a href="/">Allen</a>
  |
  <a href="neet/online-coaching-class-11"> Class11</a>
  |
  <a href="/neet/online-coaching-class-12">Class12</a>
  return <div>
    <BrowserRouter>
    <Routes>
      <Route path="/neet/online-coaching-class-11" element={<Class11Program/>}/>
      <Route path="/neet/online-coaching-class-12" element={<Class12Program/>}/>
      <Route path="/" element={<Landing/>}/>

      </Routes>
    </BrowserRouter>
  </div>
}

function Landing() {
  return <div>
    Welcome to allen
  </div>
}

function Class11Program() {
  return <div>
  Class11
  </div>
}
function Class12Program() {
  return <div>
 Class12
  </div>
}
export default App
