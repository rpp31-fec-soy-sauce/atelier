import styled from 'styled-components';

const Avatar = styled.div`
  width: 4rem;
  height: 4rem;
  border: 2px solid ${({ theme }) => theme.color.primary};
  border-radius: 50%;
  background-image: url(${({ url }) => url});
  background-size: cover;
`

export default Avatar;