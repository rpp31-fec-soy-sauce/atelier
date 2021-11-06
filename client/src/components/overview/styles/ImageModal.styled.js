import styled from "styled-components";

const ImageModal = styled.div`
  position: fixed;
  width: 80vw;
  height: 80vh;
  top: 50vh;
  left: 50vw;
  transform: translate(-50%, -50%);
  border-radius: 0.5rem;
  z-index: 10;
  background-image: url(${({ url }) => url});
  background-size: cover;
`

export default ImageModal;