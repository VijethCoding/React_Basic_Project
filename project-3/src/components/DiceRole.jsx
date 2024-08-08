import { useState } from "react";
import styled from "styled-components"

const DiceRole = ({
    currentDice, roleDice
}) => {



  return (
    <DiceDiv>
      <div className="diceImage" onClick={roleDice}>
        <img src={`/images/dice_${currentDice}.png`} alt="dice Image" />
      </div>
      <p>Click on Dice to roll</p>
    </DiceDiv>
  )
}

export default DiceRole;

const DiceDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 48px;

p{
    font-size: 24px;
    font-weight: 600;
}
.diceImage{
    cursor: pointer;
}
    
`
