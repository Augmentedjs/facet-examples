import { DirectiveView } from "presentation-decorator";
import BaseFacetView from "presentation-facets";
import Logger from "../logger/logger.js";
const MOUNT_POINT = "#facet";
const NAME = "filterview";
const FILTERS = [
  { "id": "characters",
    "name": "Characters",
    "collection": [
      { "name": "Xzar", "value": "xzar" },
      { "name": "Montaron", "value": "montaron" },
      { "name": "Noober", "value": "noober" }
    ]
  },
  {
    "id": "locations",
    "name": "Locations",
    "collection": [
      { "name": "Candlekeep", "value": "candlekeep" },
      { "name": "Cloakwood", "value": "cloakwood" },
      { "name": "Nashkel", "value": "nashkel" }
    ]
  },
  {
    "id": "creatures",
    "name": "Creatures",
    "collection": [
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
  }
];

class FacetView extends BaseFacetView {
  constructor(options) {
    super({
      "el": MOUNT_POINT,
      "name": NAME,
      "style": "view",
      "title": "Balder's Gate",
      "filters": FILTERS,
      "button": "Filter"
    });
  };
  submit(e) {
    e.preventDefault();
    Logger.info(JSON.stringify(this.selections));
    return this;
  };
};

export default FacetView;
