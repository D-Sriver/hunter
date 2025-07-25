import * as THREE from 'three';
import cube from './model/cube.js';
//*** CAMÉRA ***//
const camera = new THREE.PerspectiveCamera(32, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(10, 10, 10); // Position isométrique
camera.lookAt(0, 0, 0); // Regarde vers le centre

export default camera;