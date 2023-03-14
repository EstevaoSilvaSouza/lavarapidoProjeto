import React from "react";

const Container: React.FC<{ children: JSX.Element | JSX.Element[] }> = ({
  children,
}) => {
  return (
    <div style={{ display: "flex", width: "", height: "auto" }}>{children}</div>
  );
};

export default Container;
