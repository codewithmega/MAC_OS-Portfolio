import { locations } from "#constants";
import useLocationStore from "#store/location";
import useWindowStore from "#store/window";
import { useGSAP } from "@gsap/react";
import clsx from "clsx";
import { Draggable } from "gsap/Draggable";
import React from "react";

const projects = locations.work?.children ?? [];

const Home = () => {

  const { openWindow } = useWindowStore();

  const { setActiveLocation } = useLocationStore();

  const handleOpenProjectFinder = (project) => {
    setActiveLocation(project);
    openWindow("finder");
  }

  useGSAP(() => {
    Draggable.create(".folder");
  }, []);

  return (
    <section className="absolute top-20 z-100">
      <div>
        <ul>
          {projects.map((project, index) => (
            <li key={project.id ?? project.name ?? index} className={`relative ${clsx("group folder", project.windowPosition)}}`} onClick={() => handleOpenProjectFinder(project) }>
              <center>
                <img
                  src={project.icon ?? "/icons/folder.png"}
                  width="40"
                  alt={project.name}
                />
                <p className="text-white">{project.name}</p>
              </center>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Home;
