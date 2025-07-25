import * as THREE from 'three';
//*** OBJETS CUBE ***//
const geometry = new THREE.BoxGeometry(1, 1, 1);
const noiseTexture = new THREE.TextureLoader().load('assets/Noise.png'); // Charger la texture de bruit
const material1 = new THREE.MeshPhysicalMaterial({ 
    color: 'gold', 
    metalness: 0.7, 
    roughness: 0.4, 
    map: noiseTexture,
    bumpMap: noiseTexture,
    bumpScale: 1 // Ajuste l’intensité du relief
});
const cube = new THREE.Mesh(geometry, material1);
//emet des ombres
cube.castShadow = true; // Permettre au cube de projeter des ombres
export default cube;