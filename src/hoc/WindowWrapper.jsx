import useWindowStore from "#store/window";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import React, { useLayoutEffect, useRef } from "react";

const WindowWrapper = (Component, windowKey) => {
  const Wrapped = (props) => {
    const { focusWindow, windows, closeWindow, toggleMaximize } =
      useWindowStore();
    const { isOpen, zIndex } = windows[windowKey];
    const ref = useRef(null);

    let isDragging = false;

    useGSAP(() => {
      const el = ref.current;
      if (!el || !isOpen) return;

      el.style.display = "block";
      gsap.fromTo(
        el,
        { scale: 0.8, opacity: 0, y: 40 },
        { scale: 1, opacity: 1, y: 0, duration: 0.2, ease: "power3.out" }
      );
    }, [isOpen]);

    useGSAP(() => {
      const el = ref.current;
      if (!el) return;

      const [instance] = Draggable.create(el,
        {
          type: "x,y",
          throwProps: true,
          allowEventDefault: true, // allow child clicks/right-clicks

          onPress: function (e) {
            // Check mouse button: 0 = left, 2 = right
            if (e.button === 2) {
              this.endDrag(); // Stop Draggable for right-click
              focusWindow(windowKey); // treat right-click as focus
              return; // skip dragging
            }

            // For left-click, start tracking drag
            isDragging = false;
          },

          onDrag: function () {
            isDragging = true;
          },

          onRelease: function (e) {
            // Treat left-click without drag as a "click"
            if (!isDragging && e.button === 0) {
              focusWindow(windowKey);
            }
          },

          onClick: function (e) {
            console.log("Element clicked!", e.button);
          },
        },
        []
      );

      return () => instance.kill();

    }, []);

    useLayoutEffect(() => {
      const el = ref.current;
      if (!el) return;
      el.style.display = isOpen ? "block" : "none";
    }, [isOpen]);

    return (
      <section
        id={windowKey}
        ref={ref}
        style={{ zIndex }}
        className={`absolute window`}
        onMouseDown={() => focusWindow(windowKey)}
      >
        <Component {...props} />
      </section>
    );
  };

  Wrapped.displayName = `WindowWrapper(${
    Component.displayName || Component.name || "Component"
  })`;

  return Wrapped;
};

export default WindowWrapper;
