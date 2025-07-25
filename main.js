import ambientMirror from './light/AmbientMirror.js';
import * as THREE from 'three';
import camera from './camera.js';
import cube from './model/cube.js';
import plane from './model/plane.js';
import mouvement from './interact/mouvement.js';
import SpotlighLine from './light/SpotlighLine.js';
//*** SCÈNE ***//
const scene = new THREE.Scene();

//*** RENDERER ***//
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true; // Activer les ombres
document.body.appendChild(renderer.domElement);

//*** HELPERS ***//

//*** AJOUT LES ELEMENTS À LA SCÈNE ***//
SpotlighLine.forEach(s => scene.add(s));

scene.add(plane[0]); // sol visible
scene.add(plane[1]); // sol ombre
scene.add(cube);
scene.add(ambientMirror);



//*** INTERACTIONS CLAVIER ***//
mouvement(scene, camera, renderer, cube);

//*** RENDU FINAL ***//
renderer.render(scene, camera);
