import React from 'react';
import { ImageTile } from '../model';

function ImageTileComponent({ title, source, elementKey }: ImageTile) {
  return (
    <div className="imageTile__container">
     <img className='image' id={elementKey} src={source} alt=''></img>
    </div>
  );
}
export default ImageTileComponent;
