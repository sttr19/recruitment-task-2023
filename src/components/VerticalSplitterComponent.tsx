import React from 'react';
import { VerticalSplitter } from '../model';

import { getType } from '../helpers';

function VerticalSplitterComponent({ elementKey, elements }: VerticalSplitter) {
  return(
    <div className='vertical' key={elementKey}>
        {/* Returns appropriate element (defined by getType function) for each object in "elements" array in splitter object*/}
        {elements.map(element => getType(element))}
    </div>
    
)
}

export default VerticalSplitterComponent;