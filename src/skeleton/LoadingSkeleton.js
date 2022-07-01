import React from "react";

const LoadingSkeleton = ({ width = "100%", height, marginBottom = 0 }) => {
  return (
    <div
      className="skeleton"
      style={{ width: width, height: height, marginBottom: marginBottom }}
    ></div>
  );
};

export default LoadingSkeleton;
