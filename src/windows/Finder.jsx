import WindowControls from "#components/WindowControls";
import { locations } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper";
import useLocationStore from "#store/location";
import useWindowStore from "#store/window";
import clsx from "clsx";
import { ChevronLeft, ChevronRight, PanelLeft, Search } from "lucide-react";
import React from "react";

const Finder = () => {
  const { openWindow } = useWindowStore();
  const { activeLocation, setActiveLocation } = useLocationStore();

  const openItem = (item) => {
    if(item.fileType === 'pdf') return openWindow("resume"); 
    if(item.kind === 'folder') return setActiveLocation(item); 
    if(["fig", "url"].includes(item.fileType) && item.href) return window.open(item.href, "_blank");

    openWindow(`${item.fileType}${item.kind}`, item);
  };


  const renderList = (name, items) => (
    <>
      <h3 className="text-white">{name}</h3>
      <ul className="block mt-3">
        {items.map((item) => (
          <li
            key={item.id}
            onClick={() => {
              setActiveLocation(item);
            }}
            className={`sidebar_sidelinks mb-3 ${clsx(
              item.id === activeLocation.id ? "active" : "not-active"
            )}`}
            onClickCapture={() => {
              openItem(item);
            }}
          >
            <img
              src={item.icon}
              className="w-7 mt-1 h-7 mx-3"
              alt={item.name}
            />
            <p className="text-sm font-medium truncate mt-2 no-underline hover:no-underline">
              {item.name}
            </p>
          </li>
        ))}
      </ul>
    </>
  );

  return (
    <>
      <div
        className="w-full h-full mb-0 gap-0 grid grid-flow-row auto-rows-max finder-window"
        style={{ overflow: "hidden" }}
      >
        <div className="flex flex-row window-header p-0 mb-10 w-full fixed top-0 left-0 z-5">
          <div>
            <WindowControls target="finder" />
          </div>

          <h2 className="window-title text-black">Finder</h2>

          <div className="flex items-center gap-1 ml-5">
            <Search className="ml-0 icon" />
          </div>
        </div>

        <div className="flex">
          <div className="sidebar block mt-10 p-5">
            <div className="mb-5 block">
              {renderList("Favorites", Object.values(locations))}
              {renderList("Work", Object.values(locations.work.children))}
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>

            </div>
          </div>

          <ul className="mt-10 p-5 ml-62 bg-white w-128 max-w-128 file-view">
            {activeLocation?.children.map((item) => (
              <li
                key={item.id}
                className={`w-34 mt-10 ml-62 absolute no-underline hover:no-underline ${item.position}`}
                onClick={() => {
                  openItem(item);
                }}
              >
                <center>
                  <img
                    src={item.icon}
                    alt={item.name}
                    width="60"
                    className=""
                  />
                  <p className="text-wrap font-semibold">{item.name}</p>
                </center>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

const FinderWindow = WindowWrapper(Finder, "finder");

export default FinderWindow;
