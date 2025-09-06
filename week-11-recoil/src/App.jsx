import { useState } from 'react'
import { RecoilRoot, atom, useRecoilState } from 'recoil';
import './App.css'
import { counterAtom } from './store/atom/counter';

function App() {

  return (
  <>
  <RecoilRoot>
  <Counter />
</RecoilRoot>
  </>
  )
}

function Counter(){
  // const [count, setCount] = useState(0);
  return <div>
     {CurrentCount}
     <Increase setCount= {setCount}/>
     <Decrease setCount= {setCount}/>
  </div>
}

function CurrentCount() {
const count =  useSetRecoilVlaue(counterAtom);

  return <div>
    {count}
  </div>
}

function Increase(){
  const setCount = useSetRecoilState(counterAtom);
  function increase() {
    setCount(c => c + 1);
  }
  return <div>
    <button onClick={increase}>Increase</button>
  </div>
}

function Decrease(){
    const setCount = useRecoilState(counterAtom);

  function decrease() {
    setCount(c => c - 1);
  }
  return <div>
    <button onClick={decrease}>Decrease</button>
  </div>
}

export default App
