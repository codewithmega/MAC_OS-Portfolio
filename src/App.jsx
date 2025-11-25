import { Dock, Navbar, Welcome } from "#components";
import { TerminalContextProvider } from "react-terminal";
import GlassSurface from "#components/GlassSurface";
import Silk from "#components/Silk";
import Terminal from "#windows/TerminalBox";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { Finder, Resume, Socials, Text } from "#windows";
import Home from "#components/Home";

gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      <Home className="z-99" />

      <Navbar />
      <Welcome className="" />
      <Dock className="" />
      <TerminalContextProvider>
        <Terminal />
      </TerminalContextProvider>
      <Socials />
      <Resume />
      <Finder />
      <Text />
      <Silk
        speed={5}
        scale={1}
        color="#5227ff"
        noiseIntensity={1.5}
        rotation={0}
        className="silk-animation"
      />
    </main>
  );
};
export default App;
