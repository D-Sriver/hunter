import * as THREE from 'three';
//*** PLANE GEOMETRY (exportée pour réutilisation) ***//
export const planeGeometry = new THREE.PlaneGeometry(500, 500);
//*** PLANE VISIBLE ***//
const visibleMaterial = new THREE.MeshPhysicalMaterial({ color: 'grey', metalness: 0.8, roughness: 0.5 });
const visiblePlane = new THREE.Mesh(planeGeometry, visibleMaterial);
visiblePlane.position.y = -0.6;
visiblePlane.rotation.x = -Math.PI / 2;

//*** PLANE OMBRE ***//
const shadowMaterial = new THREE.ShadowMaterial({ opacity: 0.5 });
const shadowPlane = new THREE.Mesh(planeGeometry, shadowMaterial);
shadowPlane.position.y = visiblePlane.position.y + 0.1; // Légèrement au-dessus du visible
shadowPlane.rotation.x = -Math.PI / 2;
shadowPlane.receiveShadow = true;

//** Plane mirror ***//

export default [visiblePlane, shadowPlane];