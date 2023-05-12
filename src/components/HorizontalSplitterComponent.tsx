import React from 'react';
import { HorizontalSplitter } from '../model';

import { getType } from '../helpers';

function HorizontalSplitterComponent({ elementKey, elements }: HorizontalSplitter) {
  return(
    <div className='horizontal' key={elementKey}>
        {/* Returns appropriate element (defined by getType function) for each object in "elements" array in splitter object*/}
        {elements.map(element => getType(element))}
    </div>
)
}

export default HorizontalSplitterComponent;