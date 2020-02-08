import init from "./init";
import BaseController from "./controllers/base.coffee";
import BaseView from "./views/base.coffee";

const Controllers = { Base: BaseController };
const Views = { Base: BaseView };

export { init, Controllers, Views };
