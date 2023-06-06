import "./app.css";
import * as dat from "dat.gui";
import { viewer } from "./main";
import { createTileset, flyTileset } from "./tileset";

let targetRef: any = {
  getValue: (): any => {
    return null;
  },
};

const gui = new dat.GUI({ name: "Cesium GUI", width: 450, autoPlace: true });
gui.domElement.id = "gui";

let guiParams: { [key: string]: any } = {};

guiParams["Add a Cesium_3D_Tiles"] = () => {
  let tileset = targetRef.getValue();
  if (tileset) {
    viewer.entities.removeAll();
  }
  createTileset(
    viewer,
    "./static/output/tileset.json",
    guiParams,
    targetRef
  );
};

guiParams["Fly to Cesium_3D_Tiles"] = () => {
  let tileset = targetRef.getValue();
  if (tileset) {
    flyTileset(viewer, tileset);
  }
};

gui.add(guiParams, "Add a Cesium_3D_Tiles");
gui.add(guiParams, "Fly to Cesium_3D_Tiles");
