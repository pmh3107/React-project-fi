import React from "react";

export default function ButtonPrimary(props) {
  return <button className={`btn ${props.className}`}>{props.name}</button>;
}
