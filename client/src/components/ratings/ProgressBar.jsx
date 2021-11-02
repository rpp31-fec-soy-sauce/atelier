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
    backgroundColor: '#4d4d4d',
  }

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
      </div>
    </div>
  );
};

export default ProgressBar;