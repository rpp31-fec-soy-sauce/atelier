import styled, { css } from 'styled-components';

const Button = styled.button`
  background-color: white;
  color: ${({ theme }) => theme.color.primary};
  margin: 1rem;
  padding: 1rem;
  border-radius: 5px;
  border: 2px solid ${({ theme }) => theme.color.primary};
`

export default Button;