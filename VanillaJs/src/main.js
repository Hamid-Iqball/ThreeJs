import * as THREE from "three";

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
const dodecahedron = new THREE.Mesh(geometry, material);

const boxGeometry = new THREE.BoxGeometry(2, 0.1, 2);
const boxMaterial = new THREE.MeshBasicMaterial({ color: "#B4B4B3" });
const box = new THREE.Mesh(boxGeometry, boxMaterial);
box.position.y = -1.5;

// Add objects to the scene
scene.add(dodecahedron);
scene.add(box);

// 5. Add light (optional for MeshBasicMaterial, but needed for others)
const light = new THREE.SpotLight(0x006769, 100);
light.position.set(1, 1, 1);
scene.add(light);

// 6. Set up the renderer
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);

// 7. Animation loop
function animate() {
  requestAnimationFrame(animate);

  // Rotate the object
  dodecahedron.rotation.y += 0.01;
  dodecahedron.rotation.x += 0.005;

  renderer.render(scene, camera);
}
animate();
