import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, RoundedBox, useGLTF } from "@react-three/drei";
import { CircleGeometry, TextureLoader } from 'three'
import { STLLoader } from "three/examples/jsm/Addons.js";


import DeskModel from "../assets/DeveloperAnimation/work_table_futuristic.glb?url";
import CatModel from "../assets/DeveloperAnimation/the_chonker_gwa_gwa_cat.glb?url";
import KeybladeModel from "../assets/DeveloperAnimation/kingdom_key (2).glb?url";
import RoseModel from "../assets/DeveloperAnimation/beauty_and_the_beast_rose.glb?url";
import CharacterModel from "../assets/DeveloperAnimation/chibi-style_cartoon_character_with_spiky_hair_an.glb?url";


import Ground from "../assets/texturaTierra.webp?url";




export const DeveloperAnimation = () => {
    

   function Box() {
      
      const color = useLoader(TextureLoader, Ground);
     
      return (
        <mesh
        position={[0, -4, -3]}  >
        <RoundedBox args={[80, 4, 80]} 
        rotation={[0, 20, 0]}
          radius={1}> {/* Tierra clara con mayor tamaño */}
        <meshStandardMaterial
            map={color} // Color base
            color={"#FFDFAF"} // Arena mas oscura

            />
            </RoundedBox>
        </mesh>
      );
    }
    function Box2() {
      
        const color = useLoader(TextureLoader, Ground);
       
        return (
          <mesh
          position={[-20, 37, 34]}  >
          <RoundedBox args={[80, 4, 80]} 
          rotation={[0, 20, 4.7]}
            radius={1}> {/* Tierra clara con mayor tamaño */}
          <meshStandardMaterial
              map={color} // Color base
  
              />
              </RoundedBox>
          </mesh>
        );
      }
      function Box3() {
      
        const color = useLoader(TextureLoader, Ground);
       
        return (
          <mesh
          position={[-35, 37, -17]}  >
          <RoundedBox args={[80, 4, 80]} 
          rotation={[0, 21.57, 4.7]}
            radius={1}> {/* Tierra clara con mayor tamaño */}
          <meshStandardMaterial
              map={color} // Color base
  
              />
              </RoundedBox>
          </mesh>
        );
      }

     

        function Desk() {
          const { scene } = useGLTF(DeskModel); 
        
          return (  <> 
          <primitive object={scene}
           position={[0, -2, -10]} 
           rotation={[0, 1.6, 0]} // Gira el objeto
        
           scale={5} />

           
        
        
          </>  
        ); }

        function Cat() {
            const { scene } = useGLTF(CatModel); 
          
            return (  <> 
            <primitive object={scene}
             position={[8, 14, -30]} 
             rotation={[0, 19, 0]} // Gira el objeto
          
             scale={17} />
  
             
          
          
            </>  
          ); }

          function Keyblade() {
            const { scene } = useGLTF(KeybladeModel); 
          
            return (  <> 
            <primitive object={scene}
             position={[-12, 35, 33]} 
             rotation={[0, 2.5, 0]} // Gira el objeto
             scale={9} />
  
             
          
          
            </>  
          ); }
          function Rose() {
            const { scene } = useGLTF(RoseModel); 
          
            return (  <> 
            <primitive object={scene}
             position={[-8, 17, 15]} 
             rotation={[0, 2.5, 0]} // Gira el objeto
             scale={20} />
  
             
          
          
            </>  
          ); }

          function Character() {
            const { scene } = useGLTF(CharacterModel); 
          
            return (  <> 
            <primitive object={scene}
             position={[32, 12, 0]} 
             rotation={[0, 4.5, 0]} // Gira el objeto
             scale={32} />
              
          
                </>  
          ); }

        
   



    return (
        <>

        <Canvas  camera={{ position: [65, 35, -35], fov: 60 }}>
      {/* Iluminación */}
      <ambientLight intensity={0.7} />
      <directionalLight position={[10, 10, 5]} intensity={1} />

      <Box/>
      <Box2/>
      <Box3/>
      <Desk/>
      <Cat/>
      <Keyblade/>
      <Rose/>
      <Character/>
     

    

      {/* Controles de la cámara */}
      <OrbitControls />
    </Canvas>
      
    

        </>

    )
}