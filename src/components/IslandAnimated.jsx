import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, RoundedBox, Text, useGLTF } from "@react-three/drei";
import { TextureLoader } from 'three'
import { STLLoader, TextGeometry } from "three/examples/jsm/Addons.js";
import { Text3D } from "@react-three/drei";

import soraModel from "../assets/chibi_sora_from_kingdom_hearts.glb?url";
import HeartlessModel from "../assets/shadow_-_kingdom_hearts_ii.glb?url";
import PalmModel from "../assets/palm_trees.glb?url";
import GumiModel from "../assets/highwind_gummi_ship.glb?url";
import RocksModel from "../assets/desert_rocks.glb?url";
import ChestModel from "../assets/low_poly_treasure_chest.glb?url";
import BridgeModel from "../assets/low_poly_dock_bridge.glb?url";
import KingdomKeyModel from "../assets/kingdom_key.glb?url";
import OathKeeperKeyModel from "../assets/oathkeeper_keyblade.stl?url";

import Ground from "../assets/texturaTierra.webp?url";
import RockTexture from "../assets/texturaRoca.webp?url";
import WaterTexture from "../assets/TexturaAgua.webp?url";






export const IslandAnimated = () => {
  

  //Añadimos texto con funcion que dirigue a seccion de la pagina
  function TextoMiHistoria() {
    const handleClickMiHistoria = () => {
      const element = document.getElementById("MiHistoria");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };
  
    return (
      <>
      

      <Text3D
        font="/fonts/helvetiker_regular.typeface.json"
        size={2}
        height={0.2}
        curveSegments={12}
        bevelEnabled
        bevelThickness={0.02}
        bevelSize={0.02}
        bevelSegments={5}
        position={[26, 12, -32]}
        rotation={[0, 3.2, 0]} // Gira el objeto
        onClick={handleClickMiHistoria}
      >
        Mi Historia
        <meshStandardMaterial color="white" />
      </Text3D>
      </>
      
      
    );
  }

  function TextoExperiencia() {
    const handleClickMiHistoria = () => {
      const element = document.getElementById("Experiencia");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };
  
    return (
      <>
      

      <Text3D
        font="/fonts/helvetiker_regular.typeface.json"
        size={2}
        height={0.2}
        curveSegments={12}
        bevelEnabled
        bevelThickness={0.02}
        bevelSize={0.02}
        bevelSegments={5}
        position={[-2, 7.5, -32]}
        rotation={[0, 2.5, 0]} // Gira el objeto
        onClick={handleClickMiHistoria}
      >
        Experiencia
        <meshStandardMaterial color="#fbfbfb" />
      </Text3D>
      </>

      
    );
  }


  function TextoTecnologias() {
    const handleClickTecnologias = () => {
      const element = document.getElementById("TecnologiasYProyectos");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };
  
    return (
      <>
      

      <Text3D
        font="/fonts/helvetiker_regular.typeface.json"
        size={2}
        height={0.2}
        curveSegments={12}
        bevelEnabled
        bevelThickness={0.02}
        bevelSize={0.02}
        bevelSegments={5}
        position={[-5, 18, -8]}
        rotation={[0, 2.5, 0]} // Gira el objeto
        onClick={handleClickTecnologias}
      >
        Tecnologias y Proyectos
        <meshStandardMaterial color="white" />
      </Text3D>
      </>
      
      
    );
  }

  function TextoContacto() {
    const handleClickMiHistoria = () => {
      const element = document.getElementById("Contacto");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };
  
    return (
      <>
      

      <Text3D
        font="/fonts/helvetiker_regular.typeface.json"
        size={4}
        height={0.2}
        curveSegments={12}
        bevelEnabled
        bevelThickness={0.02}
        bevelSize={0.02}
        bevelSegments={5}
        position={[32, 24, 13]}
        rotation={[0, 3.2, 0]} // Gira el objeto
        onClick={handleClickMiHistoria}
      >
       Contacto
        <meshStandardMaterial color="white" />
      </Text3D>
      </>
      
      
    );
  }


  function Box() {
    
    const color = useLoader(TextureLoader, Ground);
   
    return (
      <mesh
      position={[0, -4, 0]}>
      <boxGeometry args={[90, 4, 90]} /> {/* Tierra clara con mayor tamaño */}
      <meshStandardMaterial
          map={color} // Color base
          color={"#FFDFAF"} // Arena mas oscura
          />
      </mesh>
    );
  }


  
  function Water() {
    
    const color = useLoader(TextureLoader, WaterTexture);
  
    return (
      
      <RoundedBox args={[90, 4, 90]} radius={1}>
      <meshStandardMaterial
        map={color} // Color base
        color={"#DFFAFE"} 
        transparent={true} // Hace que tenga transparencia
        opacity={0.8} // Nivel de opacidad 
      />
    </RoundedBox>
  
    );
  }

  function SandIsland() {
    const color = useLoader(TextureLoader, Ground);
  
    return (
      <mesh position={[0, 4, 0]}>
        
        <RoundedBox args={[60, 4, 60]} radius={1} smoothness={4}>
        
        <meshStandardMaterial 
          map={color}  
          color={"#F7E1AF"} 
        />
        </RoundedBox>

      </mesh>
    );
  }

  function RockIsland() {
    const color = useLoader(TextureLoader, RockTexture);
  
    const handleClick = () => {
      const element = document.getElementById("Experiencia"); 
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };

    return (
      <>
      <mesh position={[-10, 2, -35]}
      onClick={handleClick}>
        
        <icosahedronGeometry args={[5, 0]} />
        
        <meshStandardMaterial 
          
          map={color} // Color base  
        />
      </mesh>

      </>
      
    );
  }

  function Palm() {
    const { scene } = useGLTF(PalmModel); 
    const handleClick = () => {
      const element = document.getElementById("Experiencia"); 
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };


    return (  <> 
    <primitive object={scene}
     position={[-23, 6, 20]} 
     scale={2}
     onClick={handleClick} />

    </>  
 ); }

function Chest() {
  const { scene } = useGLTF(ChestModel); 

  return (  <> 
  <primitive object={scene}
   position={[0, 6, -10]} 
   scale={0.05} />


  </>  
); }
function Rocks() {
  const { scene } = useGLTF(RocksModel); 
  
  const handleClick = () => {
    const element = document.getElementById("Contacto"); 
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (  <> 
  <primitive object={scene}
   position={[18, 14, 10]} 
   rotation={[0, Math.PI / 1, 0]} // Gira el objeto
   scale={15} 
   onClick={handleClick}/>


  </>  
); }

 function Sora() {
  const { scene } = useGLTF(soraModel); // Asegúrate de poner la ruta correcta

  const handleClick = () => {
    const element = document.getElementById("MiHistoria"); 
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };


  return (  <> 
  <primitive object={scene} position={[20, 3, -33]} 
   rotation={[0, Math.PI / 1, 0]} // Gira el objeto
   scale={1} 
  onClick={handleClick}
  />

  </>  
); }



 
  function Bridge() {
    const { scene } = useGLTF(BridgeModel);  
  
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
    const { scene } = useGLTF(KingdomKeyModel);  
  
    return (  <> 
    <primitive object={scene} 
    position={[- 15,  13, 20]}  
    scale={4} 
    rotation={[0, 0, -Math.PI / -2]} // Rota el objeto 90 grados alrededor del eje X para que mire hacia abajo
    />
    </>  
 ); }


function Heartless() {
  const { scene } = useGLTF(HeartlessModel);  

  return (  <> 
  <primitive object={scene} 
  position={[0,  6, 5]}  
  rotation={[0, Math.PI / 1, 0]}
  scale={10} 
  />
  </>  
); }

function Gumi() {
  const { scene } = useGLTF(GumiModel);  

// Funcion para hacer scroll hasta una seccion de la pagina si pinchas sobre el
const handleClick = () => {
  const element = document.getElementById("TecnologiasYProyectos"); 
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};


  return (  <> 
  <primitive object={scene} 
  position={[-15,  10, -20]}  
  rotation={[0, Math.PI / 2, 0]}
  scale={1.5} 
  onClick={handleClick}

  />
  </>  
); }



  return (
    <>
      <Canvas  camera={{ position: [15, 15, -50], fov: 120 }}>
      {/* Iluminación */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={1} />


      <Box/>
      <Water/>
      <SandIsland/>

      <Palm/>
      <Bridge/>
      <Sora/>
      
      <TextoMiHistoria/>
      <TextoTecnologias/>
      <TextoExperiencia/>
      <Key/>
      <Key2/>
      <Heartless/>
      <Gumi/>
      <Chest/>
      <Rocks/>
      <RockIsland/>
      <TextoContacto/>
      {/* Controles de la cámara */}
      <OrbitControls />
    </Canvas>
      
    </>
  );
}
