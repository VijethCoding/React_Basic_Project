import styled from "styled-components";

const SelectNumber = ({
    isSelectedNumber,
    setIsSelectedNumber,
  error,
  setError,
}) => {
  const arrNumber = [1, 2, 3, 4, 5, 6];

  const NumberHandeler = (value) => {
    setIsSelectedNumber(value);
    setError("");
  };

  return (
    <SelectNumberContainer>
      <p className="error">{error}</p>
      <div className="boxSection">
        {arrNumber.map((value, i) => (
          <Box
            isSelected={value === isSelectedNumber}
            key={i}
            onClick={() => NumberHandeler(value)}>
            {value}
          </Box>
        ))}
      </div>
      <p>Selcet Number</p>
    </SelectNumberContainer>
  );
};

export default SelectNumber;

const SelectNumberContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;

  .boxSection {
    display: flex;
    gap: 24px;
  }
  p {
    font-size: 24px;
    font-weight: 700;
  }
  .error {
    color: red;
  }
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 2px solid black;
  
  font-size: 24px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.isSelected? "black" : "white")};
  color: ${(props) => (!props.isSelected ? "black" : "white")};
`;
