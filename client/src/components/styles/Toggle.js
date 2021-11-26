import styled from 'styled-components';
import React, { useState } from 'react';

const StyledToggle = styled.div`

.toggle {
  height: 50px;
  width: 100px;
  border-radius: 50px;
  margin: auto;
  background-image: linear-gradient(#E1EBEE, skyblue);
  position: relative;
  cursor: pointer;
}

.toggle.night {
  background-image: linear-gradient(midnightblue, rebeccapurple);
}

.notch {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background: yellow;
  position: absolute;
  top: 5px;
  left: 5px;
  box-shadow: 0 0 5px yellow;
  z-index: 1;
  transition: all 0.3s ease;
}

.notch > .crater {
  background: burlywood;
  border-radius: 50%;
  position: absolute;
  opacity: 0;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.4) inset;
}
.night .crater {
  opacity: 0.4;
}

.crater:first-child {
  left: 5px;
  top: 15px;
  height: 15px;
  width: 35px;
  transform: rotate(-45deg);
}

.crater:last-child {
  right: 10px;
  top: 15px;
  height: 15px;
  width: 25px;
  transform: rotate(45deg);
}

.night > .notch {
  background: whitesmoke;
  box-shadow: 0 0 5px whitesmoke;
  transform: translate(50px, 0);
}

.shape {
  position: absolute;
  background: whitesmoke;
  border-radius: 50%;
  transition: all 0.3s ease;
}

.shape.sm {
  height: 5px;
  width: 20px;
  top: 50%;
  left: 80%;
}

.shape.md {
  height: 10px;
  width: 35px;
  top: 20%;
  left: 60%;
  z-index: 2;
  opacity: 0.6;
}

.shape.lg {
  height: 15px;
  width: 50px;
  bottom: 20px;
  left: 35%;
  opacity: 0.8;
}

.night .shape {
  background: lightgray;
  box-shadow: 0 0 10px 2px violet;
}

.night .shape.sm {
  height: 5px;
  width: 5px;
  transform: translate(-40px, 0);
}

.night .shape.sm:first-of-type {
  transform: translate(-70px, -10px);
}

.night .shape.md {
  height: 10px;
  width: 10px;
  transform: translate(-15px, 0);
}

.night .shape.lg {
  height: 15px;
  width: 15px;
  transform: translate(-10px, 0);
}


`


export default function Toggle({ toggled, onClick }) {
  return (
    <StyledToggle>

      <div onClick={onClick} className={`toggle${toggled ? " night" : ""}`}>
        <div className="notch">
          <div className="crater" />
          <div className="crater" />
        </div>
        <div>
          <div className="shape sm" />
          <div className="shape sm" />
          <div className="shape md" />
          <div className="shape lg" />
        </div>
      </div>
    </StyledToggle>
  );
}

// export default Toggle;