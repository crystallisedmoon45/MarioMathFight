// script.js
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Basic floor
const floorGeometry = new THREE.PlaneGeometry(100, 100);
const floorMaterial = new THREE.MeshBasicMaterial({ color: 0xcccccc });
const floor = new THREE.Mesh(floorGeometry, floorMaterial);
floor.rotation.x = -Math.PI / 2;
scene.add(floor);

// Walls
function createWall(x, y, z, width, height, depth) {
    const geometry = new THREE.BoxGeometry(width, height, depth);
    const material = new THREE.MeshBasicMaterial({ color: 0x888888 });
    const wall = new THREE.Mesh(geometry, material);
    wall.position.set(x, y, z);
    scene.add(wall);
    return wall;
}

// Example walls (simplified representation)
createWall(0, 5, -50, 100, 10, 1); // Back wall
createWall(0, 5, 50, 100, 10, 1); // Front wall
createWall(-50, 5, 0, 1, 10, 100); // Left Wall
createWall(50, 5, 0, 1, 10, 100); // Right Wall

// Navigation
const controls = {
    forward: false,
    backward: false,
    left: false,
    right: false,
};

document.addEventListener('keydown', (event) => {
    switch (event.code) {
        case 'KeyW': controls.forward = true; break;
        case 'KeyS': controls.backward = true; break;
        case 'KeyA': controls.left = true; break;
        case 'KeyD': controls.right = true; break;
    }
});

document.addEventListener('keyup', (event) => {
    switch (event.code) {
        case 'KeyW': controls.forward = false; break;
        case 'KeyS': controls.backward = false; break;
        case 'KeyA': controls.left = false; break;
        case 'KeyD': controls.right = false; break;
    }
});

function updateCameraPosition() {
    const speed = 0.5; // Increased speed for testing
    if (controls.forward) camera.position.z -= speed;
    if (controls.backward) camera.position.z += speed;
    if (controls.left) camera.position.x -= speed;
    if (controls.right) camera.position.x += speed;
}

// Random Spawn
function randomSpawn(){
    camera.position.x = Math.random() * 80 - 40;
    camera.position.z = Math.random() * 80 - 40;
    camera.position.y = 5; // Ensure camera is above the floor
}

randomSpawn();

// Camera setup
camera.position.y = 5; // Ensure the camera is above the floor
camera.lookAt(0, 0, 0);

function animate() {
    requestAnimationFrame(animate);
    updateCameraPosition();
    renderer.render(scene, camera);
}
animate();
