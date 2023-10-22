import React from "react";

export default function ButtonPrimary(props) {
  return (
    <button type="submit" className={`btn btn--primary ${props.className}`}>
      {props.name}
    </button>
  );
}
