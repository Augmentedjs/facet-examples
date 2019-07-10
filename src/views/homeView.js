import { DirectiveView } from "presentation-decorator";
import FacetView from "./facetView.js";
import { PANEL } from "../messages.js";

const MOUNT_POINT = "#main";

class HomeView extends DirectiveView {
  constructor() {
    super({
      "el": MOUNT_POINT,
      "name": "homeview",
      "style": "view",
      "template": `
        <div id="facet"></div>
      `
    });
    this._example = new FacetView();
  };

  async render() {
    await super.render();
    await this._example.render();
    await this.mediator.observeColleagueAndTrigger(this._example, PANEL, this._example.name);
    return this;
  };

  async remove() {
    await this.mediator.dismissColleagueTrigger(this._example, PANEL, this._example.name);
    await this._example.remove();
    return await super.remove();
  };
};

export default HomeView;
