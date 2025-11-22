import { Dock, Navbar, Welcome } from "#components";
import GlassSurface from "#components/GlassSurface";
import Silk from "#components/Silk";
import Terminal from "#windows/Terminal";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      <Navbar />
      <Silk
        speed={5}
        scale={1}
        color="#5227ff"
        noiseIntensity={1.5}
        rotation={0}
        className="silk-animation"
      />
      <Welcome className="" />
      <Dock />
      <Terminal />
    </main>
  );
};
export default App;
