import { DirectiveView } from "presentation-decorator";
import FacetView from "./facetView.js";

const MOUNT_POINT = "#main";

class HomeView extends DirectiveView {
  constructor() {
    super({
      "el": MOUNT_POINT,
      "name": "homeview",
      "style": "view",
      "template": `
        <h1>A nice Facet Example Component</h1>
        <div id="facet"></div>
      `
    });
    this._example = new FacetView();
  };

  render() {
    super.render();
    this._example.render();
    return this;
  };

  remove() {
    this._example.remove();
    return super.remove();
  };
};

export default HomeView;
