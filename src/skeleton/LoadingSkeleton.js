import React from "react";

const LoadingSkeleton = ({ width, height, children, marginBottom = 0 }) => {
  return (
    <div
      className="skeleton"
      style={{ width: width, height: height, marginBottom: marginBottom }}
    >
      {children}
    </div>
  );
};

export default LoadingSkeleton;
