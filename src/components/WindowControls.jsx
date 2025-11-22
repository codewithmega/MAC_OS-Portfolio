import useWindowStore from '#store/window'
import React from 'react'

const WindowControls = ({target}) => {

    const {closeWindow} = useWindowStore();


  return <div style={{ display: "flex", gap: "8px" }}>
  <div style={{ width: 14, height: 14, borderRadius: "50%", background: "#FF605C", cursor: "default" }} onClick={() => closeWindow(target)}></div>
  <div style={{ width: 14, height: 14, borderRadius: "50%", background: "#FFBD44", cursor: "default" }}></div>
  <div style={{ width: 14, height: 14, borderRadius: "50%", background: "#00CA4E", cursor: "default" }}></div>
</div>
  
}

export default WindowControls