import React from "react";

const ProgressBar = (props) => {
  const { starPercentage } = props;

  const containerStyles = {
    height: 10,
    width: '50%',
    backgroundColor: "#e0e0de",
    margin: 5
  }

  const fillerStyles = {
    height: 10,
    width: `${starPercentage}%`,
    backgroundColor: 'darkgreen'
  }

  return (
    <div style={containerStyles}>
      <div data-testid="star-filler" style={fillerStyles}>
      </div>
    </div>
  );
};

export default ProgressBar;