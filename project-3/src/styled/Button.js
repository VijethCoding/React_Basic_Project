import styled from 'styled-components';

export const Button = styled.button`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 18px;
  background-color: black;
  color: white;
  min-width: 220px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 5px;
  border: 1px solid transparent;
  transition: background 0.4s ease-in;
  cursor: pointer;

  &:hover {
    background-color: white;
    border: 1px solid black;
    color: black;
    font-weight: 600;
    transition: background 0.3s ease-out;
  }
`;

export const Outline = styled(Button)`
  background-color: white;
  border: 1px solid black;
  color: black;

  &:hover {
    background-color: black;
    border: 1px solid transparent;
    color: white;
  }
`;

export default Button;
