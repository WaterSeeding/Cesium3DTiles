import "./app.css";
import * as dat from "dat.gui";
import { viewer } from "./main";
import { createModel, flyModel } from "./model";

let targetRef: any = {
  getValue: (): any => {
    return null;
  },
};

const gui = new dat.GUI({ name: "Cesium GUI", width: 450, autoPlace: true });
gui.domElement.id = "gui";

let guiParams: { [key: string]: any } = {};

guiParams["Add a Cesium_Air"] = () => {
  let modelEntity = targetRef.getValue();
  if (modelEntity) {
    viewer.entities.removeAll();
  }
  createModel(
    viewer,
    "./static/CesiumAir/Cesium_Air.glb",
    5000.0,
    guiParams,
    targetRef
  );
};

guiParams["Fly to Cesium_Air"] = () => {
  let modelEntity = targetRef.getValue();
  if (modelEntity) {
    flyModel(viewer, modelEntity);
  }
};

gui.add(guiParams, "Add a Cesium_Air");
gui.add(guiParams, "Fly to Cesium_Air");
