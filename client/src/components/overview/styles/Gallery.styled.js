import styled from "styled-components";

const Gallery = styled.div`
  background-image: url(${({ url }) => url});
  background-size: cover;
`
export default Gallery;