import React from "react";
import { ButtonTile } from "../model";

function ButtonTileComponent({ text, action, elementKey }: ButtonTile) {
  return (
    
      <button className="button" id={elementKey}>
        {text}
      </button>
    
  );
}
export default ButtonTileComponent;
