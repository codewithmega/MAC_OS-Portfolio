import DomeGallery from "#components/DomeGallery";
import WindowControls from "#components/WindowControls";
import WindowWrapper from "#hoc/WindowWrapper";
import { PanelLeft } from "lucide-react";
import React from "react";

const Gallery = () => {
  return (
    <>
      <div
        className="w-full h-full mb-0 gap-0 grid grid-flow-row auto-rows-max"
        style={{ backgroundColor: "#fff", overflowY: "hidden", width: "100%" }}
      >
        <div className="border-b border-gray-300 bg-white flex flex-row window-header p-0 mb-10 w-full fixed top-0 left-0 z-5">
          <div>
            <WindowControls target="gallery" />
          </div>

          <h2 className="window-title text-black">Gallery</h2>
          <PanelLeft className="ml-0 icon" />
        </div>

        <div className="main-gallery z-1" >
            <DomeGallery 
                style={{ width: "500px" }}
                minRadius={200}
                padFactor={0.1}
            />
        </div>
      </div>
    </>
  );
};

const GalleryWindow = WindowWrapper(Gallery, "gallery");

export default GalleryWindow;
