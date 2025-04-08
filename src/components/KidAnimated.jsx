import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, RoundedBox, useGLTF } from "@react-three/drei";
import { CircleGeometry, TextureLoader } from 'three'
import { STLLoader } from "three/examples/jsm/Addons.js";


import Kid3D from "../assets/KidAnimation/the_title_for_the_image_is_anime_sorrowful_boy.glb?url";
import Emoji from "../assets/KidAnimation/thinking_emoji.glb?url";
import AstronautModel from "../assets/KidAnimation/3december_2021_day_18_astronaut.glb?url";
import CR7Model from "../assets/KidAnimation/cr7_3d_free_no_money_3d_model_free__animation.glb?url";


import Grass from "../assets/texturaHierba.webp?url";

export const KidAnimated = () => {
    
 function Box() {
    
    const color = useLoader(TextureLoader, Grass);
   
    return (
      <mesh
      position={[0, -4, 0]}  >
      <RoundedBox args={[80, 4, 80]} radius={1}> {/* Tierra clara con mayor tamaño */}
      <meshStandardMaterial
          map={color} // Color base
          color={"#FFDFAF"} // Arena mas oscura
          />
          </RoundedBox>
      </mesh>
    );
  }


  function Circle() {
      
    
      return (
        <mesh position={[-4, 18, -35]} rotation={[Math.PI / 2, 0, Math.PI / 12]} >
          
          <RoundedBox args={[40, 4, 20]} radius={3} smoothness={4}>
          
          <meshStandardMaterial 
        
            color={"#FFFFFF"} 
          />
          </RoundedBox>
  
        </mesh>
      );
    }


  function Kid() {
    const { scene } = useGLTF(Kid3D); 
  
    return (  <> 
    <primitive object={scene}
     position={[28, 11, -30]} 
     rotation={[0, Math.PI / 1, 0]} // Gira el objeto
  
     scale={25} />
  
  
    </>  
  ); }

  function ThinkEmoji() {
    const { scene } = useGLTF(Emoji); 
  
    return (  <> 
    <primitive object={scene}
     position={[18, 15, -35]} 
     rotation={[0, Math.PI / 1, 0]} // Gira el objeto
  
     scale={3} />
  
  
    </>  
  ); }

  function Astronaut() {
    const { scene } = useGLTF(AstronautModel); 
  
    return (  <> 
    <primitive object={scene}
     position={[8, 12, -40]} 
     rotation={[0, 2.7, 0]} // Gira el objeto

  
     scale={2.5} />
  
  
    </>  
  ); }

  function CR7() {
    const { scene } = useGLTF(CR7Model); 
  
    return (  <> 
    <primitive object={scene}
     position={[-5, 15, -45]} 
     rotation={[0, 2, 0]} // Gira el objeto

  
     scale={3.5} />
  
  
    </>  
  ); }




    return (
        <>

        <Canvas  camera={{ position: [15, 10, -57], fov: 100 }}>
      {/* Iluminación */}
      <ambientLight intensity={0.8} />
      <directionalLight position={[10, 10, 5]} intensity={1} />


      <Box/>
        <Kid/>
        <Circle/>
        <ThinkEmoji/>
        <Astronaut/>
        <CR7/>
        
      {/* Controles de la cámara */}
      <OrbitControls />
    </Canvas>
      
    

        </>

    )
}