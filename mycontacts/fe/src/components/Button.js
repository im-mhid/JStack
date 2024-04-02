import styled, { css } from 'styled-components';

const Button = styled.button`
  /* Add your button styles here */
  height: 52px;
  border: none;
  padding: 0 16px;
  background-color: ${({ theme }) => theme.colors.primary.main};
  color: #fff;
  font-size: 16px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  padding: 10px 20px;
  border-radius: 4px;

  transition: background 0.2s ease-in;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.light};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.primary.dark};
  }

  &:disabled {
    background-color: #ccc;
    cursor: default;
  }

  ${({ theme, danger }) => danger && css`
    background-color: ${theme.colors.danger.main};

    &:hover {
    background-color: ${theme.colors.danger.light};
  }

  &:active {
    background-color: ${theme.colors.danger.dark};
  }
  `}
`;

export default Button;
