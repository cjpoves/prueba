import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, RoundedBox, useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { Water } from "three/examples/jsm/objects/Water2"; 
import { TextureLoader } from 'three'

import sandOclusion from "./assets/Ground080_1K-JPG/Ground080_1K-JPG_AmbientOcclusion.jpg";
import sandColor from "./assets/Ground080_1K-JPG/Ground080_1K-JPG_Color.jpg"
import sandDisplacement from "./assets/Ground080_1K-JPG/Ground080_1K-JPG_Displacement.jpg"
import sandRoughness from "./assets/Ground080_1K-JPG/Ground080_1K-JPG_Roughness.jpg"
import sandNormal from "./assets/Ground080_1K-JPG/Ground080_1K-JPG_NormalGL.jpg"

import rockOclusion from "./assets/Rocks001_1K-JPG/Rocks001_1K-JPG_AmbientOcclusion.jpg";
import rockColor from "./assets/Rocks001_1K-JPG/Rocks001_1K-JPG_Color.jpg"
import rockDisplacement from "./assets/Rocks001_1K-JPG/Rocks001_1K-JPG_Displacement.jpg"
import rockRoughness from "./assets/Ground080_1K-JPG/Ground080_1K-JPG_Roughness.jpg"
import rockNormal from "./assets/Rocks001_1K-JPG/Rocks001_1K-JPG_NormalGL.jpg"

import waterOclusion from "./assets/water/others_0020_ao_1k.jpg";
import waterColor from "./assets/water/others_0020_color_1k.jpg";
import waterRoughness from "./assets/water/others_0020_roughness_1k.jpg"
import waterHeight from "./assets/water/others_0020_height_1k.png"
import waterNormal from "./assets/water/others_0020_normal_opengl_1k.png"
import { STLLoader } from "three/examples/jsm/Addons.js";
import { IslandAnimated } from "./components/IslandAnimated";
function App() {
  

  function Box() {
    
  
    const [colorMap, aoMap, displacementMap, roughnessMap, normalMap] = useLoader(TextureLoader, [
      sandColor, // Color base
      sandOclusion, // Oclusión ambiental
      sandDisplacement, // Mapa de desplazamiento
      sandRoughness, // Rugosidad
      sandNormal, // Normal Map
    ]);
  
    return (
      <mesh
      position={[0, -4, 0]}>
      <boxGeometry args={[90, 4, 90]} /> {/* Tierra clara con mayor tamaño */}
      <meshStandardMaterial
          map={colorMap} // Color base
          color={"#FFDFAF"} // Arena mas oscura
          aoMap={aoMap} // Oclusión ambiental
          normalMap={normalMap} // Mapa de normales
          roughnessMap={roughnessMap} />
      </mesh>
    );
  }

  function Water() {
    
  
    const [colorMap, aoMap, displacementMap, roughnessMap, normalMap] = useLoader(TextureLoader, [
      waterColor, // Color base del agua
      waterOclusion, // Oclusión ambiental
      waterHeight, // Mapa de altura (para relieve del agua)
      waterRoughness, // Rugosidad del agua
      waterNormal, // Normal Map (para efecto de ondas)
    ]);
  
    return (
     
      <RoundedBox args={[90, 4, 90]} radius={1}>
      <meshStandardMaterial
        map={colorMap} // Color base
        aoMap={aoMap} // Oclusión ambiental
        normalMap={normalMap} // Mapa de normales (efecto de olas)
        roughnessMap={roughnessMap} // Rugosidad del agua
        transparent={true} // Hace que tenga transparencia
        opacity={0.5} // Nivel de opacidad 
      />
    </RoundedBox>
  
    );
  }

  function SandIsland() {
    const [colorMap, aoMap, displacementMap, roughnessMap, normalMap] = useLoader(TextureLoader, [
      sandColor,        // Color base
      sandOclusion,     // Oclusión ambiental
      sandDisplacement, // Mapa de desplazamiento (relieve)
      sandRoughness,    // Rugosidad
      sandNormal,       // Normal Map
    ]);
  
    return (
      <mesh position={[0, 4, 0]}>
        
        <RoundedBox args={[60, 4, 60]} radius={1} smoothness={4}>
        
        <meshStandardMaterial 
          map={colorMap} // Color bases
          aoMap={aoMap} // Oclusión ambiental
          normalMap={normalMap} // Mapa de normales
          roughnessMap={roughnessMap} // Rugosidad
        />
        </RoundedBox>

      </mesh>
    );
  }

  function RockIsland() {
    const [colorMap, aoMap, displacementMap, roughnessMap, normalMap] = useLoader(TextureLoader, [
      rockColor, // Color base
      rockOclusion, // Oclusión ambiental
      rockDisplacement, // Mapa de desplazamiento
      rockRoughness, // Rugosidad
      rockNormal, // Normal Map
    ]);
  
    return (
      <>
      
      <mesh position={[-33, 2, -34]}>
        
        <cylinderGeometry args={[2, 6, 8, 20]} /> 
        
        <meshStandardMaterial 
          
          map={colorMap} // Color base
          aoMap={aoMap} // Oclusión ambiental
          normalMap={normalMap} // Mapa de normales
          roughnessMap={roughnessMap}
          roughness={0.8} 
          metalness={0.2}  
        />
      </mesh>

      <mesh position={[-10, 2, -35]}>
        
        <icosahedronGeometry args={[5, 0]} />
        
        <meshStandardMaterial 
          
          map={colorMap} // Color base
          aoMap={aoMap} // Oclusión ambiental
          normalMap={normalMap} // Mapa de normales
          roughnessMap={roughnessMap}
          roughness={0.8} 
          metalness={0.2}  
        />
      </mesh>

      <mesh position={[37, 2, -10]}>
        
        <icosahedronGeometry args={[5, 0]} />
        
        <meshStandardMaterial 
          
          map={colorMap} // Color base
          aoMap={aoMap} // Oclusión ambiental
          normalMap={normalMap} // Mapa de normales
          roughnessMap={roughnessMap}
          roughness={0.8} 
          metalness={0.2}  
        />
      </mesh>
      

      <mesh position={[-35, 2, 15]}>
        
        <icosahedronGeometry args={[5, 0]} />
        
        <meshStandardMaterial 
          
          map={colorMap} // Color base
          aoMap={aoMap} // Oclusión ambiental
          normalMap={normalMap} // Mapa de normales
          roughnessMap={roughnessMap}
          roughness={0.8} 
          metalness={0.2}  
        />
      </mesh>
      
      <mesh position={[-35, 2, 35]}>
        
        <icosahedronGeometry args={[5, 0]} />
        
        <meshStandardMaterial 
          
          map={colorMap} // Color base
          aoMap={aoMap} // Oclusión ambiental
          normalMap={normalMap} // Mapa de normales
          roughnessMap={roughnessMap}
          roughness={0.8} 
          metalness={0.2}  
        />
      </mesh>

      <mesh position={[35, 2, 36]}>
        
        <icosahedronGeometry args={[5, 0]} />
        
        <meshStandardMaterial 
          
          map={colorMap} // Color base
          aoMap={aoMap} // Oclusión ambiental
          normalMap={normalMap} // Mapa de normales
          roughnessMap={roughnessMap}
          roughness={0.8} 
          metalness={0.2}  
        />
      </mesh>
      <mesh position={[0, 2, 36]}>
        
        <icosahedronGeometry args={[5, 0]} />
        
        <meshStandardMaterial 
          
          map={colorMap} // Color base
          aoMap={aoMap} // Oclusión ambiental
          normalMap={normalMap} // Mapa de normales
          roughnessMap={roughnessMap}
          roughness={0.8} 
          metalness={0.2}  
        />
      </mesh>
      </>
      
      
    );
  }

  function Palm() {
    const { scene } = useGLTF("/palm_tree.glb"); 
  
    return (  <> 
    <primitive object={scene}
     position={[-25, 4, 20]} 
     scale={0.13} />

    </>  
 ); }

 function Palm2() {
  const { scene } = useGLTF("/palm_tree2.glb"); 

  return (  <> 
  <primitive object={scene}
   position={[0, 20, 20]} 
   scale={15} />

  </>  
); }
function Chest() {
  const { scene } = useGLTF("/public/low_poly_treasure_chest.glb"); 

  return (  <> 
  <primitive object={scene}
   position={[0, 6, -10]} 
   scale={0.05} />


  </>  
); }
function Rocks() {
  const { scene } = useGLTF("/public/desert_rocks.glb"); 

  return (  <> 
  <primitive object={scene}
   position={[18, 14, 10]} 
   rotation={[0, Math.PI / 1, 0]} // Gira el objeto

   scale={15} />


  </>  
); }

 function Sora() {
  const { scene } = useGLTF("/chibi_sora_from_kingdom_hearts.glb"); // Asegúrate de poner la ruta correcta


  return (  <> 
  <primitive object={scene} position={[20, 4, -33]} 
   rotation={[0, Math.PI / 1, 0]} // Gira el objeto
   scale={1} />

  </>  
); }
 
  function Bridge() {
    const { scene } = useGLTF("/wood_bridge.glb");  
  
    return (  <> 
    <primitive object={scene} 
    position={[20,  4, -30]}  
    scale={0.006} 
    />
    </>  
 ); }

 function Key() {
  // Carga el archivo STL
  const geometry = useLoader(STLLoader, 'public/oblivion_keyblade.stl'); 
  const geometry2 = useLoader(STLLoader, 'public/oathkeeper_keyblade.stl'); 
  return (
    <>
    <mesh geometry={geometry} 
    position={[1,  23, 20]} 
     rotation={[0, Math.PI / 1, 3]}  >
      <meshStandardMaterial color="black" /> {/* Cambia el color */}
    </mesh>
    <mesh geometry={geometry2}
     position={[25,  48, -5]}  
     rotation={[0, Math.PI / 10, 3]}  >
    <meshStandardMaterial color="white" /> 
  </mesh>
    </>
    
  );
}

function Heartless() {
  const { scene } = useGLTF("/shadow_-_kingdom_hearts_ii.glb");  

  return (  <> 
  <primitive object={scene} 
  position={[0,  6, 5]}  
  rotation={[0, Math.PI / 1, 0]}
  scale={10} 
  />
  </>  
); }

function Gumi() {
  const { scene } = useGLTF("/highwind_gummi_ship.glb");  

  return (  <> 
  <primitive object={scene} 
  position={[-15,  10, -20]}  
  rotation={[0, Math.PI / 2, 0]}
  scale={1.5} 
  />
  </>  
); }

  return (
    <>
      <h1>Hola</h1>
      <h1>Hola</h1>
      <h1>Hola</h1>

      <IslandAnimated/>
      
    </>
  );
}

export default App;
