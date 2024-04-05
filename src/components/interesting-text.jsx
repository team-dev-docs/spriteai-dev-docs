import React, { useRef, useEffect } from 'react';
import * as THREE from "three";

const InterestingText = ({ text }) => {
  const containerRef = useRef(null);

  useEffect(() => {

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);

    // Center the cube
    cube.position.set(0, 0, 0);

    scene.add(cube);

    // Adjust the camera position to center the cube
    camera.position.z = 5;
    camera.position.x = 3;
    camera.position.y = -2;

function animate() {
	requestAnimationFrame( animate );

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	renderer.render( scene, camera );
}

animate();
   
  
  }, [text]);

  return (<div style={{maxWidth: "100%", maxHeight: "50vh", overflow: "hidden"}}>
      <h1>{text}</h1>
      <div ref={containerRef} />
  </div>
  )
};

export default InterestingText;