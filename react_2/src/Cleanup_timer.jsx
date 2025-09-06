import { useEffect, useState } from "react";

function App() {
    const [showTimer, setShowTimer] = useState(true);
    
    useEffect(() => {
        setInterval(function() {
            setShowTimer(currentValue => !currentValue);
        }, 5000);
    }, [])
    
    return <div>
    { showTimer && <Timer />} 
   </div>
}

const Timer = function() {
    const [second, setSecond] = useState(0);

    useEffect(function() {
     let clock = setInterval(function() {
            console.log("from inside clock");
            
            setSecond(prev => prev + 1);
        }, 1000);

        //cleanup fuction come into picture 

        return function() {
            clearInterval(clock);
        }
    }, []);

    return <div>{second} second elasped</div>
}

export default App