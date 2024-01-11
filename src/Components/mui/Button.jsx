import React from "react";

function Button(props) {
  const { children, style } = props;
  return (
    <div>
      <button style={style ? style : { background: "red", color: "#fff" }}>
        {children}
      </button>
    </div>
  );
}

export default Button;
