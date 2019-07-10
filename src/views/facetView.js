import { DirectiveView } from "presentation-decorator";
import BaseFacetView from "presentation-facets";
import { DISPLAY_MESSAGE } from "../messages.js";
import FACETS from "../data.js";

const MOUNT_POINT = "#facet";
const NAME = "filterview";

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
    this.sendMessage(DISPLAY_MESSAGE, "submit: " + JSON.stringify(this.selections));
    return this;
  };
};

export default FacetView;
