import styled from "styled-components";

const Rules = () => {
  return (
    <RulesContainer>
      <h2>How to play dice game</h2>
      <div className="p_tags">
      <p>Select any number</p>
      <p>Click on dice image</p>
      <p>
        after click on dice if selected number is equal to dice number you will
        get same point as dice
      </p>
      <p>if you get wrong guess then 2 point will be dedcuted </p>
      </div>
      
    </RulesContainer>
  );
};

export default Rules;

const RulesContainer = styled.div`
    max-width: 795px;
    margin: 0 auto;
    background-color: #FBF1F1;
    padding: 20px;
    border-radius: 5px;
    margin-top: 30px;
    margin-bottom: 50px;
    display: flex;
    flex-direction: column;
h2{
 font-size: 24px;
 font-weight: 700;
}
.p_tags p{
  font-size: 16px;
  font-weight: 600;
 line-height: 10px;
}
`