import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, RoundedBox, useGLTF } from "@react-three/drei";
import { CircleGeometry, TextureLoader } from 'three'
import { STLLoader } from "three/examples/jsm/Addons.js";


import WorkerModel from "../assets/WorkerStudentAnimation/animated_worker_doll_in_blue_overalls_and_white.glb?url";
import TableChairModel from "../assets/WorkerStudentAnimation/anime_boy_room_table.glb?url";
import ComputerModel from "../assets/WorkerStudentAnimation/computer.glb?url";
import GitHubModel from "../assets/WorkerStudentAnimation/github_octocat.glb?url";
import GitModel from "../assets/WorkerStudentAnimation/git_logo.glb?url";
import ReactModel from "../assets/WorkerStudentAnimation/react_logo.glb?url";



import Ground from "../assets/texturaTierra.webp?url";




export const WorkerStudentAnimation = () => {
    

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

      function Worker() {
          const { scene } = useGLTF(WorkerModel , true); 
        
          return (  <> 
          <primitive object={scene}
           position={[30, 25, 10]} 
           rotation={[0, 1, 0]} // Gira el objeto
        
           scale={52} />

           
        
        
          </>  
        ); }

        function TableChair() {
          const { scene } = useGLTF(TableChairModel , true); 
        
          return (  <> 
          <primitive object={scene}
           position={[-15, -5, -20]} 
           rotation={[0, 4.3, 0]} // Gira el objeto
        
           scale={30} />

           
        
        
          </>  
        ); }

        function Computer() {
          const { scene } = useGLTF(ComputerModel , true); 
        
          return (  <> 
          <primitive object={scene}
          position={[-15,28, -20]} 

           rotation={[0, 1, 0]} // Gira el objeto
        
           scale={1.5} />

           
        
        
          </>  
        ); }

        function Git() {
          const { scene } = useGLTF(GitModel , true); 
        
          return (  <> 
          <primitive object={scene}
          position={[-20, 58, -47]} 

           rotation={[0, 1.3, 0]} // Gira el objeto
        
           scale={15} />
          </>  
        ); }

        function React() {
          const { scene } = useGLTF(ReactModel , true); 
        
          return (  <> 
          <primitive object={scene}
          position={[-20, 58, -5]} 

           rotation={[0, 1.3, 0]} // Gira el objeto
        
           scale={3.8} />
          </>  
        ); }

        function GitHub() {
          const { scene } = useGLTF(GitHubModel , true); 
        
          return (  <> 
          <primitive object={scene}
          position={[-20, 50, -14]} 

           rotation={[0, 1.3, 0]} // Gira el objeto
        
           scale={1.7} />
          </>  
        ); }
    



    return (
        <>

        <Canvas  camera={{ position: [65, 35, -35], fov: 100 }}>
      {/* Iluminación */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />

      <Box/>
      <Box2/>
      <Box3/>
      <Worker/>
      <TableChair/>
      <Computer/>
      <React/>
      <Git/>
      <GitHub/>

    

      {/* Controles de la cámara */}
      <OrbitControls />
    </Canvas>
      
    

        </>

    )
}