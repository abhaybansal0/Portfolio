import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// Add ambient light and directional light
const ambientLight = new THREE.AmbientLight(0x404040, 1); // Soft light
scene.add(ambientLight);

const directionalLight_1 = new THREE.DirectionalLight(0xffffff, 5); // Bright white light
directionalLight_1.position.set(600, 500, 600); // Position the light                       ////////// LIGHTS
scene.add(directionalLight_1);

const directionalLight_2 = new THREE.DirectionalLight(0xffffff, 2); // Bright white light
directionalLight_2.position.set(-600, -500, -600); // Position the light
scene.add(directionalLight_2);

// const helper_1 = new THREE.DirectionalLightHelper(directionalLight_1, 1);
// scene.add(helper_1);                                                            //////// LIGHT HELPERS
// const helper_2 = new THREE.DirectionalLightHelper(directionalLight_2, 1);
// scene.add(helper_2);

camera.position.set(3, 10, 400);

const container = document.getElementById('model');
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(container.clientWidth, container.clientHeight);
renderer.setPixelRatio(window.devicePixelRatio);                                ////////////// RENDERER
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1;
renderer.outputEncoding = THREE.sRGBEncoding;
container.appendChild(renderer.domElement);

// Load HDR environment map
// const rgbeLoader = new RGBELoader();
// rgbeLoader.load(`https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/zwartkops_pit_1k.hdr`, function (texture) {
//     texture.mapping = THREE.EquirectangularReflectionMapping;
//     scene.environment = texture;
//     // scene.background = texture;
// });

// Set up orbit controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.enableZoom = false;

// Load GLTF model
const loader = new GLTFLoader()
let model;

loader.load(
    `../3D Model/scene.gltf`,
    function (gltf) {
        model = gltf.scene;        
        scene.add(model);
        console.log("Model Was Added");
    });
    // model.scale(0.5, 0.5, 0.5);
    
// Handle window resize
window.addEventListener('resize', () => {
    renderer.setSize(container.clientWidth, container.clientHeight);
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
});

// Animation loop
function animate() {
    window.requestAnimationFrame(animate);
    renderer.render(scene, camera);
    
    model.rotation.x += 0.0036;
    model.rotation.y += 0.0036;
    model.rotation.z += 0.0036;
    controls.update();

}
animate();
