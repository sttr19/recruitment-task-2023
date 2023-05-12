

import { getType } from '../helpers';
import { ElementsType } from "../model";
//import VerticalSplitterComponent from "./VerticalSplitterComponent";

/*const tileTypes = {
  verticalSplitter: VerticalSplitterComponent,
  textTile: TextTileComponent,
};*/



export default function LayoutBlock(element: ElementsType) {
  
  return getType(element);
}
