import * as THREE from 'three';

//*** SCÈNE ***//
const scene = new THREE.Scene();

//*** RENDERER ***//
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//*** CAMÉRA ***//
const camera = new THREE.PerspectiveCamera(32, window.innerWidth / window.innerHeight, 0.1, 1000);

//*** POSITIONNEMENT CAMÉRA ***//
camera.position.z = 15; //reculer la camera du point 0 de la scène
camera.position.y = 4; // Relever la caméra pour mieux voir le cube
camera.rotation.x = -0.3; // Incliner la caméra pour mieux voir le cube

//*** PLANE ***//
const planeGeometry = new THREE.PlaneGeometry(10, 10);
const planeMaterial = new THREE.MeshLambertMaterial({ color: 'green', side: THREE.DoubleSide });
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.position.y = -0.5; // Légèrement en dessous de l'origine pour éviter les problèmes de profondeur
plane.rotation.x = -Math.PI / 2; // Rotation du plan pour qu'il soit horizontal

//*** LUMIÈRES ***//

//lumiére anbiante 
const ambientLight = new THREE.AmbientLight("white", 0.6); // Lumière ambiante douce
// lumière directionnelle
const directionalLight = new THREE.DirectionalLight("red", 1); // Lumière directionnelle
directionalLight.position.set(5, 3, 6); // Position de la lumière

//*** OBJETS 3D ***//
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material1 = new THREE.MeshLambertMaterial({ color: 'red' });
const cube1 = new THREE.Mesh(geometry, material1);


//*** HELPERS ***//
const lightHelper = new THREE.DirectionalLightHelper(directionalLight, 1, 0xffff00); // taille 1, couleur jaune

//*** AJOUT LES ELEMENTS À LA SCÈNE ***//
scene.add(ambientLight);
scene.add(directionalLight);
scene.add(plane);
scene.add(cube1);
//debug
scene.add(lightHelper);

//*** INTERACTIONS CLAVIER ***//
document.addEventListener('keydown', (event) => {
    switch(event.key) {
        case 'ArrowLeft':
            cube1.position.x -= 0.1;
            break;
        case 'ArrowRight':
            cube1.position.x += 0.1;
            break;
        case 'ArrowUp':
            cube1.position.z -= 0.1;
            break;
        case 'ArrowDown':
            cube1.position.z += 0.1;
            break;
        case 'a':
            cube1.rotation.y -= 0.1; 
            break;
        case 'e':
            cube1.rotation.y += 0.1; 
            break;
    }
    renderer.render(scene, camera);
});

//*** RENDU FINAL ***//
renderer.render(scene, camera);
