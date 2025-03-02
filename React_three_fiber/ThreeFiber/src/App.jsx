import React, { useRef } from 'react'
import {Canvas, useFrame}  from "@react-three/fiber"
import {OrbitControls, Sparkles} from "@react-three/drei"

const RotatinCube = ()=>{

    const meshRef = useRef()

    useFrame(()=>{
      if(meshRef.current){
        meshRef.current.rotation.y +=0.01
        meshRef.current.rotation.x +=0.01
        // meshRef.current.rotation.z +=0.01
      }
    })
  return (
    <mesh ref={meshRef}>
        <cylinderGeometry args={[1,1,1]}/>
        <meshLambertMaterial color="#468585" emissive="#468585"/>
        <Sparkles count={100} scale={1} size={6} speed={0.0002}    color="Orange"/>
    </mesh>
  )
}

function App() {
  return (
   <Canvas style={{display:"flex", justifyContent:'center', alignItems:'center', height:"100vh", width:'100vw'}}>
   <OrbitControls enableZoom enablePan enableRotate/>
    <directionalLight position={[1,1,1]} intensity={10} color={0x9CDBA6}/>
    <color attach="background" args={['#F0F0F0']}/>
    <RotatinCube/>
   </Canvas>
  )
}

export default App