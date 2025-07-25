import * as THREE from 'three';

const spotLights = [];
const count = 1; // nombre de spots
const spacing = 15; // espacement

for (let i = 0; i < count; i++) {
    // Création et placement du spotlight sur une ligne
    const s = new THREE.SpotLight('orange', 10.0);
    s.position.x = i * spacing; 
    s.position.y = 2;
    s.position.z = 1;
    s.angle = 2;
    s.penumbra = 1;
    s.castShadow = true;
    // La cible est juste sous le spot
    s.target.position.copy(s.position);
    s.target.position.y = 0; // au niveau du sol
    s.target.updateMatrixWorld(); // Met à jour la matrice pour que le spot vise bien la cible
    spotLights.push(s);
}

export default spotLights;
