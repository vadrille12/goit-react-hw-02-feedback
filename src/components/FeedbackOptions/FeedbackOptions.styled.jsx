import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;

  list-style: none;
`;

export const Button = styled.button`
  padding: 7px 14px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 700;
  transform: scale(1);
  cursor: pointer;

  transition: all 250ms ease-in-out;

  &:hover {
    border: 2px solid #f0c60c;
    transform: scale(1.1);
  }
`;
