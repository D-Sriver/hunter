
function mouvement(scene, camera, renderer, cube) {
    const keysPressed = {};
    const target = { x: cube.position.x, y: cube.position.y, z: cube.position.z };
    let targetRotationY = cube.rotation.y;
    const moveStep = 0.5;
    const lerpSpeed = 0.1; // 0.1 = doux, 1 = instantané

    document.addEventListener('keydown', (event) => {
        keysPressed[event.key] = true;

        // Diagonales
        if (keysPressed['ArrowUp'] && keysPressed['ArrowLeft']) {
            target.z -= moveStep;
            target.x -= moveStep;
        } else if (keysPressed['ArrowUp'] && keysPressed['ArrowRight']) {
            target.z -= moveStep;
            target.x += moveStep;
        } else if (keysPressed['ArrowDown'] && keysPressed['ArrowLeft']) {
            target.z += moveStep;
            target.x -= moveStep;
        } else if (keysPressed['ArrowDown'] && keysPressed['ArrowRight']) {
            target.z += moveStep;
            target.x += moveStep;
        } else {
            switch(event.key) {
                case 'ArrowLeft':
                    target.x -= moveStep;
                    break;
                case 'ArrowRight':
                    target.x += moveStep;
                    break;
                case 'ArrowUp':
                    target.z -= moveStep;
                    break;
                case 'ArrowDown':
                    target.z += moveStep;
                    break;
                case "a":
                    targetRotationY -= 0.3;
                    break;
                case "e":
                    targetRotationY += 0.3;
                    break;
            }
        }
    });

    document.addEventListener('keyup', (event) => {
        keysPressed[event.key] = false;
    });

    function animate() {
        // Interpolation douce vers la cible
        cube.position.x += (target.x - cube.position.x) * lerpSpeed;
        cube.position.y += (target.y - cube.position.y) * lerpSpeed;
        cube.position.z += (target.z - cube.position.z) * lerpSpeed;
        cube.rotation.y += (targetRotationY - cube.rotation.y) * lerpSpeed;

        // Caméra isométrique qui suit le cube
        camera.position.set(
            cube.position.x + 10,
            cube.position.y + 10,
            cube.position.z + 10
        );
        camera.lookAt(cube.position);
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
    }
    animate();
}

export default mouvement;