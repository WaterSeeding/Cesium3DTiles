import * as Cesium from "cesium";

export const createTileset = (
  viewer: Cesium.Viewer,
  url: string,
  guiParams: any,
  targetRef: any
) => {
  let tileset = viewer.scene.primitives.add(
    new Cesium.Cesium3DTileset({
      url: url,
    })
  );
  targetRef.getValue = () => {
    return tileset;
  };
};

export const flyTileset = (viewer: Cesium.Viewer, tileset: Cesium.Cesium3DTileset) => {
  const boundingSphere = tileset.boundingSphere;
  viewer.camera.flyToBoundingSphere(boundingSphere, {
    duration: 1.5,
    offset: new Cesium.HeadingPitchRange(
      Cesium.Math.toRadians(0),
      Cesium.Math.toRadians(-60.0),
      300
    ),
    complete: () => {},
  });
};
