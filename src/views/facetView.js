import { DirectiveView } from "presentation-decorator";
import BaseFacetView from "presentation-facets";
import Logger from "../logger/logger.js";
import MessageDialog from "../components/messageDialog.js";
import frog from "../images/frogHead.png";

const MOUNT_POINT = "#facet";
const NAME = "filterview";
const FACETS = [
  { "identifier": "characters",
    "name": "Characters",
    "data": [
      { "name": "Xzar", "value": "xzar" },
      { "name": "Montaron", "value": "montaron" },
      { "name": "Noober", "value": "noober" }
    ]
  },
  {
    "identifier": "locations",
    "name": "Locations",
    "data": [
      { "name": "Candlekeep", "value": "candlekeep" },
      { "name": "Cloakwood", "value": "cloakwood" },
      { "name": "Nashkel", "value": "nashkel" }
    ]
  },
  {
    "identifier": "creatures",
    "name": "Creatures",
    "data": [
      { "name": "Carrion Crawler", "value": "carrioncrawler" },
      { "name": "Ankheg", "value": "ankheg" },
      { "name": "Ogre", "value": "ogre" },
      { "name": "Ettercap", "value": "ettercap" },
      { "name": "Gnoll", "value": "gnoll" },
      { "name": "Skeleton", "value": "skeleton" },
      { "name": "Ogre Mage", "value": "ogremage" },
      { "name": "Black Bear", "value": "blackbear" },
      { "name": "Polar bear", "value": "polarbear" },
      { "name": "Kobold", "value": "kobold" },
      { "name": "Wolf", "value": "wolf" }
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
      { "name": "frog", "value": "frog", "image": frog }
    ],
    "type": "image"
  }
];

class FacetView extends BaseFacetView {
  constructor(options) {
    super({
      "el": MOUNT_POINT,
      "name": NAME,
      "style": "view",
      "title": "Balder's Gate",
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
