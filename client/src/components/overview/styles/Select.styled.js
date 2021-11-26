import styled from 'styled-components';

// TODO: Inherit style from Button
const Select = styled.select`
  // background-color: white;
  color: ${({ theme }) => theme.color.primary};
  background-color: ${({ theme }) => theme.color.secondary};
  padding: 1rem;
  border-radius: 5px;
  border: 2px solid;
  font-size: 1.5rem;
`;

export default Select;
