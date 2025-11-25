import WindowControls from '#components/WindowControls';
import WindowWrapper from '#hoc/WindowWrapper';
import useWindowStore from '#store/window';
import { ChevronLeft, ChevronRight, PanelLeft } from 'lucide-react';
import React from 'react'

const Text = () => {

    const { windows } = useWindowStore();
    const data = windows.txtfile?.data;

    if(!data) return null;

    const { name, image, subtitle, description } = data;

  return (
    <>
      <div
        className="w-full h-full mb-0 gap-0 grid grid-flow-row auto-rows-max"
        style={{ backgroundColor: "#fff", overflowY: "auto" }}
      >
        <div className="border-b border-gray-300 bg-white flex flex-row window-header p-0 mb-10 w-full fixed top-0 left-0 z-5">
          <div>
            <WindowControls target="txtfile" />
          </div>
          <PanelLeft className="ml-0 icon" />

          <h2 className="window-title text-black">{name}</h2>

          <div className="flex items-center gap-1 ml-5">
            <ChevronLeft className="icon" />
            <ChevronRight className="icon" />
          </div>
        </div>
        <div className="mt-12 z-0 mx-auto">

        {image ? (
            <>
            <div className="w-full"> 
                <img src={image} alt={name} className="w-full h-auto rounded" />
            </div>
            </>
        ) : null}


        {subtitle ? (
            <>
            <div className="w-full"> 
                <h3 className="text-lg p-4">
                    {subtitle}
                </h3>
            </div>
            </>
        ) : null}

        </div>
      </div>
    </>
  );
};

const TextWindow = WindowWrapper(Text, "txtfile");

export default TextWindow;
