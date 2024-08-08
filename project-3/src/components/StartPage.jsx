import React from 'react';
import styled from 'styled-components';
import Button from '../styled/Button';

const StartPage = ({toggle}) => {
  return (
    <HomePage>
      <div>
        <img src="/dice-image.png" alt="dice image" />
      </div>
      <DiceGame>
        <h1>DICE GAME</h1>
        <Button onClick={toggle}>Play Now</Button>
      </DiceGame>
    </HomePage>
  );
};

export default StartPage;

const HomePage = styled.div`
  height: 100vh;
  display: flex;
  max-width: 1180px;
  margin: 0 auto;
  align-items: center;
`;

const DiceGame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;

  h1 {
    font-size: 96px;
    font-weight: 800;
    white-space: nowrap;
    line-height: 0;
  }
`;
