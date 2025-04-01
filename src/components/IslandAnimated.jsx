import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, RoundedBox, useGLTF } from "@react-three/drei";
import { TextureLoader } from 'three'
import { STLLoader } from "three/examples/jsm/Addons.js";


import sandOclusion from "../assets/Ground080_1K-JPG/Ground080_1K-JPG_AmbientOcclusion.jpg";
import sandColor from "../assets/Ground080_1K-JPG/Ground080_1K-JPG_Color.jpg"
import sandDisplacement from "../assets/Ground080_1K-JPG/Ground080_1K-JPG_Displacement.jpg"
import sandRoughness from "../assets/Ground080_1K-JPG/Ground080_1K-JPG_Roughness.jpg"
import sandNormal from "../assets/Ground080_1K-JPG/Ground080_1K-JPG_NormalGL.jpg"

import rockOclusion from "../assets/Rocks001_1K-JPG/Rocks001_1K-JPG_AmbientOcclusion.jpg";
import rockColor from "../assets/Rocks001_1K-JPG/Rocks001_1K-JPG_Color.jpg"
import rockDisplacement from "../assets/Rocks001_1K-JPG/Rocks001_1K-JPG_Displacement.jpg"
import rockRoughness from "../assets/Ground080_1K-JPG/Ground080_1K-JPG_Roughness.jpg"
import rockNormal from "../assets/Rocks001_1K-JPG/Rocks001_1K-JPG_NormalGL.jpg"

import waterOclusion from "../assets/water/others_0020_ao_1k.jpg";
import waterColor from "../assets/water/others_0020_color_1k.jpg";
import waterRoughness from "../assets/water/others_0020_roughness_1k.jpg"
import waterHeight from "../assets/water/others_0020_height_1k.png"
import waterNormal from "../assets/water/others_0020_normal_opengl_1k.png"

import soraModel from "../assets/chibi_sora_from_kingdom_hearts.glb?url";
import HeartlessModel from "../assets/shadow_-_kingdom_hearts_ii.glb?url";
import PalmModel from "../assets/palm_trees.glb?url";
import GumiModel from "../assets/highwind_gummi_ship.glb?url";
import RocksModel from "../assets/desert_rocks.glb?url";
import ChestModel from "../assets/low_poly_treasure_chest.glb?url";
import BridgeModel from "../assets/low_poly_dock_bridge.glb?url";
import KingdomKeyModel from "../assets/kingdom_key.glb?url";
import OathKeeperKeyModel from "../assets/oathkeeper_keyblade.stl?url";





export const IslandAnimated = () => {
  

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
    const { scene } = useGLTF(PalmModel , true); 
  
    return (  <> 
    <primitive object={scene}
     position={[-23, 6, 20]} 
     scale={2} />

    </>  
 ); }

function Chest() {
  const { scene } = useGLTF(ChestModel, true); 

  return (  <> 
  <primitive object={scene}
   position={[0, 6, -10]} 
   scale={0.05} />


  </>  
); }
function Rocks() {
  const { scene } = useGLTF(RocksModel , true); 

  return (  <> 
  <primitive object={scene}
   position={[18, 14, 10]} 
   rotation={[0, Math.PI / 1, 0]} // Gira el objeto

   scale={15} />


  </>  
); }

 function Sora() {
  const { scene } = useGLTF(soraModel , true); // Asegúrate de poner la ruta correcta


  return (  <> 
  <primitive object={scene} position={[20, 3, -33]} 
   rotation={[0, Math.PI / 1, 0]} // Gira el objeto
   scale={1} />

  </>  
); }
 
  function Bridge() {
    const { scene } = useGLTF(BridgeModel , true);  
  
    return (  <> 
    <primitive object={scene} 
    position={[20,  1, -37]}  
    scale={0.01} 
    />
    </>  
 ); }

 function Key() {
  // Carga el archivo STL
  const geometry2 = useLoader(STLLoader, OathKeeperKeyModel); 
  return (
    <>
    <mesh geometry={geometry2}
     position={[25,  48, -5]}  
     rotation={[0, Math.PI / 10, 3]}  >
    <meshStandardMaterial color="white" /> 
  </mesh>
    </>
    
  );
}

function Key2() {
    const { scene } = useGLTF(KingdomKeyModel , true);  
  
    return (  <> 
    <primitive object={scene} 
    position={[- 15,  13, 20]}  
    scale={4} 
    rotation={[0, 0, -Math.PI / -2]} // Rota el objeto 90 grados alrededor del eje X para que mire hacia abajo
    />
    </>  
 ); }


function Heartless() {
  const { scene } = useGLTF(HeartlessModel , true);  

  return (  <> 
  <primitive object={scene} 
  position={[0,  6, 5]}  
  rotation={[0, Math.PI / 1, 0]}
  scale={10} 
  />
  </>  
); }

function Gumi() {
  const { scene } = useGLTF(GumiModel , true);  

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
      <Canvas antialias={false} camera={{ position: [15, 15, -50], fov: 100 }}>
      {/* Iluminación */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />


      <Box/>
      <Water/>
      <SandIsland/>

       
      <Palm/>
      <Bridge/>
      <Sora/>
      <Key/>
      <Key2/>
      <Heartless/>
      <Gumi/>
      <Chest/>
      <Rocks/>
      <RockIsland/>

      {/* Controles de la cámara */}
      <OrbitControls />
    </Canvas>
      
    </>
  );
}
