import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'


export function PaperScene () {
    return (
        <Canvas camera={{ position: [0, 0, 4]}}>
        {/* Luces */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 3, 4]} intensity={2} />

        {/* La hoja: un cuadrado de 2x2 */}
        <mesh>
        <planeGeometry args={[2, 2]} />
        <meshStandardMaterial color="#2f5df0" side={2} />
        </mesh>
        
        <OrbitControls />
        </Canvas>
    )
}