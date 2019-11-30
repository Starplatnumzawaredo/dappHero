import React, { useRef, useEffect, Fragment } from "react";
import ReactDOM from "react-dom";
import $ from "jquery";

function Web3Balance(props) {
  const { balance, domElement } = props;

  $(domElement).text(Number(balance).toFixed(2));
  return <Fragment></Fragment>;
  //return ReactDOM.createPortal(<Fragment>{Number(balance).toFixed(2)}</Fragment>, domElement);
}
export default Web3Balance;