import styled from "styled-components";
import SelectNumber from "./SelectNumber";
import TotalScore from "./TotalScore";
import DiceRole from "./DiceRole";
import { useState } from "react";
import Button, { Outline } from "../styled/Button";
import Rules from "./Rules";

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [isSelectedNumber, setIsSelctedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");
  const [rules, setRules] = useState(false);

  const generateRandomNumber = (max, min) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roleDice = () => {
    if (!isSelectedNumber) {
      setError("You Have not selected any number");
      return;
    }

    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice((prev) => randomNumber);

    if (isSelectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }

    setIsSelctedNumber(undefined);
  };

  const resetScore = () => {
    setScore(0);
  };
  
  return (
    <GamePlayContainer>
      <div className="topContainer">
        <TotalScore score={score} />
        <SelectNumber
          error={error}
          setError={setError}
          isSelectedNumber={isSelectedNumber}
          setIsSelectedNumber={setIsSelctedNumber}
        />
      </div>
      <DiceRole currentDice={currentDice} roleDice={roleDice} />

      <div className="btns">
        <Outline onClick={resetScore}>Reset</Outline>
        <Button onClick={() => setRules((prev) => !prev)}>
          {rules ? "Hide" : "Show"} Rules
        </Button>
      </div>
      {rules && <Rules />}
    </GamePlayContainer>
  );
};

export default GamePlay;

const GamePlayContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  .topContainer {
    display: flex;
    justify-content: space-between;
    align-items: end;
  }
  .btns {
    display: flex;
    flex-direction: column;
    gap: 24px;
    justify-content: center;
    align-items: center;
  }
`;
