import { Application as BaseApplication } from "presentation-application";
import * as CONSTANTS from "../constants.js";
import AboutDialog from "../components/aboutDialog.js";

class Application extends BaseApplication {
  constructor(storage) {
    super(CONSTANTS.APP_NAME);
  };

  about() {
    const view = new AboutDialog();
    view.render();
  };
};

const app = new Application();

export default app;
