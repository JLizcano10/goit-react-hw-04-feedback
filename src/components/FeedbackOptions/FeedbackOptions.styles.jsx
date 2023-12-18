import styled from 'styled-components';

export const ButtonContainer = styled('div')`
  display: flex;
  gap: 10px;
  padding: 20px 10px;
`;

export const ButtonOption = styled('button')`
  cursor: pointer;
  border: 1px solid grey;
  border-radius: 4px;
  padding: 4px;
  outline: none;
  background-color: white;
  font-weight: 500;

  &:active {
    background-color: rgb(61, 61, 242);
  }
`;
