import { DirectiveView } from "presentation-decorator";
import BaseFacetView from "presentation-facets";
import Logger from "../logger/logger.js";
import MessageDialog from "../components/messageDialog.js";
import jean1 from "../images/jean1.jpg";
import jean2 from "../images/jean2.jpg";
import jean3 from "../images/jean3.jpg";

const MOUNT_POINT = "#facet";
const NAME = "filterview";
const FACETS = [
  { "identifier": "legstyle",
    "name": "Leg Style",
    "data": [
      { "name": "Bootcut", "value": "bootcut" },
      { "name": "Skinny", "value": "skinny" },
      { "name": "Strait", "value": "strait" }
    ]
  },
  {
    "identifier": "stars",
    "name": "Stars",
    "data": [
      { "name": "1", "value": "1" },
      { "name": "2", "value": "2" },
      { "name": "3", "value": "3" },
      { "name": "4", "value": "4" },
      { "name": "5", "value": "5" }
    ],
    "type": "star"
  },
  {
    "identifier": "colors",
    "name": "Colors",
    "data": [
      { "name": "Red", "value": "red", "color": "#F44336" },
      { "name": "Green", "value": "green", "color": "#4CAF50" },
      { "name": "Blue", "value": "blue", "color": "#2196F3" }
    ],
    "type": "color"
  },
  {
    "identifier": "sizes",
    "name": "Sizes",
    "data": [
      { "name": "XL", "value": "xl" },
      { "name": "L", "value": "l" },
      { "name": "M", "value": "m" },
      { "name": "S", "value": "s" },
      { "name": "XS", "value": "xs" }
    ],
    "type": "size"
  },
  {
    "identifier": "images",
    "name": "Images",
    "data": [
      { "name": "jean1", "value": "jean1", "image": jean1 },
      { "name": "jean2", "value": "jean2", "image": jean2 },
      { "name": "jean3", "value": "jean3", "image": jean3 }
    ],
    "type": "image"
  },
  {
    "identifier": "price",
    "name": "Price",
    "data": [
      { "name": "$1-$10", "value": "1" },
      { "name": "$11-$20", "value": "11" },
      { "name": "$21-$40", "value": "21" }
    ],
    "type": "price",
    "range": true
  },
];

class FacetView extends BaseFacetView {
  constructor(options) {
    super({
      "el": MOUNT_POINT,
      "name": NAME,
      "style": "view",
      "title": "Woman's Jeans",
      "facets": FACETS,
      "button": "Filter"
    });
  };
  submit(e) {
    e.preventDefault();
    if (this.messageDialog) {
      this.messageDialog.remove();
    }
    this.messageDialog = new MessageDialog({ "title": "Selected", "body": "submit: " + JSON.stringify(this.selections) });
    Logger.info("submit: " + JSON.stringify(this.selections));
    this.messageDialog.render();
    return this;
  };
};

export default FacetView;
