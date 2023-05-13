import * as React from "react";
import { ElementsType } from "./model";

import TextTileComponent from "./components/TextTileComponent";
import VerticalSplitterComponent from "./components/VerticalSplitterComponent";
import HorizontalSplitterComponent from "./components/HorizontalSplitterComponent";
import ImageTileComponent from "./components/ImageTileComponent";
import ButtonTileComponent from "./components/ButtonTileComponent";

// Returns component based on a "type" value in an object
export function getType(element: ElementsType) {
  switch (element.type) {
    case "verticalSplitter":
      return (
        <VerticalSplitterComponent key={element.elementKey} {...element} />
      );

    case "horizontalSplitter":
      return (
        <HorizontalSplitterComponent key={element.elementKey} {...element} />
      );

    case "textTile":
      return <TextTileComponent key={element.elementKey} {...element} />;

    case "imageTile":
      return <ImageTileComponent key={element.elementKey} {...element} />;

    case "buttonTile":
      return <ButtonTileComponent key={element.elementKey} {...element} />;
  }
}
