import WindowControls from "#components/WindowControls";
import WindowWrapper from "#hoc/WindowWrapper";
import { PanelLeft } from "lucide-react";
import React from "react";
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

const Resume = () => {
  return (
    <>
      <div
        className="w-full h-full mb-0 gap-0 grid grid-flow-row auto-rows-max"
        style={{ backgroundColor: "#fff", overflowY: "hidden", width: "100%" }}
      >
        <div className="border-b border-gray-300 bg-white flex flex-row window-header p-0 mb-10 w-full fixed top-0 left-0 z-5">
          <div>
            <WindowControls target="resume" />
          </div>

          <h2 className="window-title text-black">Resume</h2>
          <PanelLeft className="ml-0 icon" />
        </div>

        <img src="../files/garfield.png" style={{ width: "100%", height: "100%" , position: "relative"}} />

        {/* <Document file="../files/Resume.pdf" style={{ width: "100%" }} onLoadSuccess={console.log("PDF loaded Successfully")}> */}
            {/* <Page size="A4" pageNumber={1} renderTextLayer renderAnnotaionLayer />
        </Document> */}

      </div>
    </>
  );
};

const ResumeWindow = WindowWrapper(Resume, "resume");

export default ResumeWindow;
