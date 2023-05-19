import React from "react";
import { Action, ButtonTile} from "../model";

function ButtonTileComponent({ text, action, elementKey }: ButtonTile) {
  function handleOnClick(action: Action) {
    const elem = document.getElementById(action.referenceElementKey);
    const listOfClasses=elem.classList;
    const itemOfClasses=listOfClasses.item(listOfClasses.length-1);
    console.log(listOfClasses);
    if (action.value.source) {
      elem.setAttribute("src", action.value.source);
    }
    if (action.value.color) {
      elem.classList.remove(itemOfClasses);
      elem.classList.add(`textTile__tile_${action.value.color}`);
    }
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
