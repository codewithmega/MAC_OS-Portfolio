import WindowControls from "#components/WindowControls";
import { ChevronLeft, ChevronRight, PanelLeft } from "lucide-react";
import React from "react";

const TiktokIframe = () => {
  return (
    <>
      <div
        className="w-full h-full mb-0 gap-0 grid grid-flow-row auto-rows-max"
        style={{ backgroundColor: "#fff", overflowY: "auto" }}
      >
        <div className="border-b border-gray-300 bg-white flex flex-row window-header p-0 mb-10 w-full fixed top-0 left-0 z-5">
          <div>
            <WindowControls target="tiktokiframe" />
          </div>
          <PanelLeft className="ml-0 icon" />

          <h2 className="window-title text-black">Tiktok</h2>

          <div className="flex items-center gap-1 ml-5">
            <ChevronLeft className="icon" />
            <ChevronRight className="icon" />
          </div>
        </div>
        <div className="mt-12 z-0 mx-auto">
          <div className="card border-2 rounded-md py-4 px-9">
            <a href="https://www.youtube.com/@codewithmegaYT/" target="_blank">
              <div className="flex flex-col">
                <img
                  src="../../public/icons/youtube.png"
                  className="socials-icon"
                />
                <h2 className="font-semibold">YouTube</h2>
                <h2 className="font-semibold">@codewithmegaYT</h2>
              </div>
            </a>
          </div>
          <div className="card border-2 rounded-md py-4 px-9">
            <a href="https://github.com/codewithmega" target="_blank">
              <div className="flex flex-col">
                <img
                  src="../../public/icons/github.png"
                  className="socials-icon"
                />
                <h2 className="font-semibold">Github</h2>
                <h2 className="font-semibold">@codewithmega</h2>
              </div>
            </a>
          </div>
          <div className="card border-2 rounded-md py-4 px-9">
            <a href="https://www.tiktok.com/@codewithmega" target="_blank">
              <div className="flex flex-col">
                <img
                  src="../../public/icons/tik-tok.png"
                  className="socials-icon"
                />
                <h2 className="font-semibold">TikTok</h2>
                <h2 className="font-semibold">@codewithmega</h2>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

const TiktokIframeWindow = WindowWrapper(TiktokIframe, "tiktokiframe");

export default TiktokIframeWindow;
