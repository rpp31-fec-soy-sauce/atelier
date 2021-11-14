import styled, { css } from 'styled-components';

export const Button = styled.button`
  background-color: white;
  color: ${({ theme }) => theme.color.primary};
  padding: 1rem;
  border-radius: 5px;
  border: 2px solid ${({ theme }) => theme.color.primary};
  cursor: pointer
`

export const InlineButton = styled.button`
  display: inline;
  color: ${({ theme }) => theme.color.primary};
  padding: 1rem;
`

export default Button;


