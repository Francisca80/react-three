import { OrbitControls } from "@react-three/drei"
import Particles from "./components/particles"

const Scene = () => {

  return (
    <>
      <OrbitControls />
      <Particles />
    </>
  );
};

export default Scene;