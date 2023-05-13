import React from "react";
import { Action, ButtonTile } from "../model";

function ButtonTileComponent({ text, action, elementKey }: ButtonTile) {

  function handleOnClick(action: Action) {
    const elem = document.getElementById(action.referenceElementKey);
    console.log(elem);
    if(action.value.source){elem.setAttribute('src',action.value.source)}
  }

  return (
    <button
      className="button"
      id={elementKey}
      onClick={() => {
        handleOnClick(action);
      }}
    >
      {text}
    </button>
  );
}
export default ButtonTileComponent;
