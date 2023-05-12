import React from 'react';
import { TextTile } from '../model';

function TextTileComponent({ color, text, title, elementKey }: TextTile) {
  return (
    <div className="textTile__container">
      <div
        className={`textTile__tile`}
        id={elementKey}
        key={elementKey}
      >
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
}
export default TextTileComponent;
