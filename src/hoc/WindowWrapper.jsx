import useWindowStore from "#store/window";
import React, { useRef } from "react";

const WindowWrapper = (Component, windowKey) => {
  const Wrapped = (props) => {
    const { focusWindow, windows, closeWindow, toggleMaximize } = useWindowStore();
    const ref = useRef(null);
    const win = windows?.[windowKey];
    // if window entry is missing or not open, don't render
    if (!win || !win.isOpen) return null;
    const { isOpen, zIndex, isMaximized } = win;

    const handleClose = (e) => {
      e.stopPropagation();
      closeWindow(windowKey);
    };

    const handleMinimize = (e) => {
      e.stopPropagation();
      // minimize = close (for now)
      closeWindow(windowKey);
    };

    const handleMaximize = (e) => {
      e.stopPropagation();
      toggleMaximize(windowKey);
    };

    return (
      <section
        id={windowKey}
        ref={ref}
        style={{ zIndex }}
        className={`absolute window ${isMaximized ? 'maximized' : ''}`}
        onMouseDown={() => focusWindow(windowKey)}
      >
        
        <Component {...props} />
      </section>
    );
  };

  Wrapped.displayName = `WindowWrapper(${Component.displayName || Component.name || "Component"})`;

  return Wrapped;
};

export default WindowWrapper;
