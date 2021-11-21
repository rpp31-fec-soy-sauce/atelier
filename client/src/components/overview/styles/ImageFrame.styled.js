import styled from "styled-components";

const ImageFrame = styled.div`
  background-image: url(${({ url }) => url});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  display: flex;
`
export default ImageFrame;