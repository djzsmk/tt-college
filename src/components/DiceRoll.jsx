import { useState } from "react";


export default function DiceRoll () {

    const [selectedDie,setSelectedDie]=useState(20)
    const [seeResult, setSeeResult]=useState(1)
    const dice= [4,6,8,10,12,20,100]

    const handleRoll = () => {
            const newValue = Math.floor(Math.random ()*selectedDie+1)
            setSeeResult(newValue)
    };
    
    return (
     <>   
     {dice.map((option)=>(
        <button
        key={option}
        onClick={() =>setSelectedDie(option)}>{option}</button>
     ))}
    <button onClick={handleRoll}>"Roll"</button>
    </>
)
}

