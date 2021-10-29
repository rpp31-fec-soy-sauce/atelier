import styled from "styled-components";

const Gallery = styled.div`
  background-image: url(${({ url }) => url});
  background-size: cover;
  width: 100%;
  height: 100%;
`
export default Gallery;