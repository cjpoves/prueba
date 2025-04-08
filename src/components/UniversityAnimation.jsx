import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, RoundedBox, useGLTF } from "@react-three/drei";
import { CircleGeometry, TextureLoader } from 'three'
import { STLLoader } from "three/examples/jsm/Addons.js";


import UniversityModel from "../assets/UniversityAnimation/low-poly_university.glb?url";
import GabelModel from "../assets/UniversityAnimation/judges_gavel.glb?url";
import JusticeModel from "../assets/UniversityAnimation/angel_of_justice.glb?url";



import Grass from "../assets/texturaHierba.webp?url";



export const UniversityAnimation = () => {
    

  function University() {
    const { scene } = useGLTF(UniversityModel); 
  
    return (  <> 
    <primitive object={scene}
     position={[0, 0, -15]} 
     rotation={[0, 1, 0]} // Gira el objeto
  
     scale={1.5} />
  
  
    </>  
  ); }

   function Box() {
      
      const color = useLoader(TextureLoader, Grass);
     
      return (
        <mesh
        position={[0, -4, -3]}  >
        <RoundedBox args={[80, 4, 80]} 
        rotation={[0, 20, 0]}
          radius={1}> {/* Tierra clara con mayor tamaño */}
        <meshStandardMaterial
            map={color} // Color base
            color={"#FFDFAF"} // Arena mas oscura
             rotation={[50, 0, 0]} // Gira el objeto

            />
            </RoundedBox>
        </mesh>
      );
    }

    function Gabel() {
      const { scene } = useGLTF(GabelModel); 
    
      return (  <> 
      <primitive object={scene}
       position={[30, 0, -25]} 
       rotation={[0, 1, 0]} // Gira el objeto
    
       scale={20} />
    
    
      </>  
    ); }

    
    function Justice() {
      const { scene } = useGLTF(JusticeModel); 
    
      return (  <> 
      <primitive object={scene}
       position={[0, 0, -45]} 
       rotation={[0, 2, 0]} // Gira el objeto
    
       scale={7} />
    
    
      </>  
    ); }




    return (
        <>

        <Canvas  camera={{ position: [20, 10, -55], fov: 100 }}>
      {/* Iluminación */}
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 5]} intensity={1} />

      <University/>
      <Box/>
      <Gabel/>
      <Justice/>

      {/* Controles de la cámara */}
      <OrbitControls />
    </Canvas>
      
    

        </>

    )
}