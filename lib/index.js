import { Application } from "stimulus";
window.Stimulus = Application.start();

import ListController from "./controllers/list_controller.js";
window.Stimulus.register("list", ListController);

import EditItemController from "./controllers/edit_item_controller.js";
window.Stimulus.register("edit-item", EditItemController);
