import { DirectiveView } from "presentation-decorator";
import BaseFacetView from "presentation-facets";
import Logger from "../logger/logger.js";
const MOUNT_POINT = "#facet";
const NAME = "filterview";

class FacetView extends BaseFacetView {
  constructor(options) {
    super({
      "el": MOUNT_POINT,
      "name": NAME,
      "style": "view examples"
    });

    const id = "id",
          name = "name",
          collection = [
            { "name": "Bubba", "value": "sux" },
            { "name": "Noober", "value": "heya" }
          ];
    this.addFilter(id, name, collection);
  };

  render() {
    Logger.debug("FacetView render()");
    return super.render();
  };

  remove() {
    return super.remove();
  };
};

export default FacetView;
