import * as THREE from "three";
import {OrbitControls} from "three/addons/controls/OrbitControls.js"

// 1. Select the canvas
const canvas = document.getElementById("canvas");

// 2. Create the scene
const scene = new THREE.Scene();
scene.background = new THREE.Color("#F0F0F0");

// 3. Set up the camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// 4. Create objects (Dodecahedron and Box)
const geometry = new THREE.DodecahedronGeometry();
const material = new THREE.MeshBasicMaterial({ color: "#468585" });
const dodecahedron = new THREE.Mesh(geometry, material); // Object 1

const boxGeometry = new THREE.BoxGeometry(2, 0.1, 2);
const boxMaterial = new THREE.MeshBasicMaterial({ color: "#B4B4B3" });
const box = new THREE.Mesh(boxGeometry, boxMaterial); // oBJECT 2
box.position.y = -1.5;

// Add objects to the scene
scene.add(dodecahedron);
scene.add(box);

// 5. Add light (optional for MeshBasicMaterial, but needed for others)
const light = new THREE.SpotLight(0x006769, 100);
light.position.set(1, 1, 1);
scene.add(light);

// 6. Set up the renderer
const renderer = new THREE.WebGLRenderer({ canvas }); //Three Js created the renderer that output the graphics to the canvas
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio)

const controls = new OrbitControls(camera,renderer.domElement)
controls.enableDamping = true
controls.dampingFactor=0.05
controls.enableZoom=true
controls.enablePan=true

// 7. Animation loop
function animate() {
    requestAnimationFrame(animate);
    
    // Rotate the object
    dodecahedron.rotation.x += 0.01;
    dodecahedron.rotation.y += 0.01;
    
    box.rotation.y += 0.005
    
    controls.update()
    renderer.render(scene, camera);
}


// 8) Handle Window sizing
window.addEventListener('resize', ()=>{
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix(); // After changing the aspect ratio of camera we need to uodate the  projections matrix as well
    renderer.setSize(window.innerWidth, window.innerHeight)

} )


animate();
