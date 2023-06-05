import "./app.css";
import * as dat from "dat.gui";
import { viewer } from "./main";
import { createTileset, flyTileset } from "./tileset";
//@ts-ignore;
import tileset from "./tileset.js";

let urlPrefix =
  "https://storage.googleapis.com/ogc-3d-tiles/ayutthaya/tiledWithSkirts";

let urls: any = []

function getTilesUrl(tileObject: any) {
  tileObject.children.forEach((child: any) => {
    if (child?.content?.url) {
      let url = `${urlPrefix}/${child.content.url}`;
      urls.push(url);
      if (child?.children && child.children.length > 0) {
        getTilesUrl(child);
      }
    }
  });
}

getTilesUrl(tileset.root);

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
    "./static/3DTiles-DaYanTa/tileset.json",
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
