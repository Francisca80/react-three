import ReactDOM from 'react-dom/client'
import './style.css'
import { Canvas } from '@react-three/fiber'
import Scene from './Scene'


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Canvas
    camera={{
      fov: 45,
      near: 0.01,
      far: 100,
    }}>
      <Scene/>
    </Canvas>
  </>
);
