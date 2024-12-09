import { useEffect } from "react";
import * as THREE from "three";

const EngagingBackground = ({ targetRef }) => {
  useEffect(() => {
    // Setup Three.js scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });

    if (targetRef.current) {
      // Create a container for the canvas inside the target reference container
      const canvasContainer = document.createElement('div');
      canvasContainer.classList.add('canvas-container');
      targetRef.current.appendChild(canvasContainer); // Append canvas container

      // Set renderer size and append to canvas container
      renderer.setSize(targetRef.current.clientWidth, targetRef.current.clientHeight);
      canvasContainer.appendChild(renderer.domElement);
    }

    // Create particle system
    const particleCount = 5000;
    const particles = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 2); // 3 values (x, y, z) per particle

    // Randomize particle positions
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = Math.random() * 10 - 8; // x position
      positions[i * 3 + 1] = Math.random() * 10 - 8; // y position
      positions[i * 3 + 2] = Math.random() * 10 - 8; // z position
    }

    particles.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    // Create a basic material with a small point (dot) for each particle
    const material = new THREE.PointsMaterial({
      color: 0x44aa88, // Color of the particles
      size: 0.1, // Size of each particle
    });

    // Create a point cloud with particles
    const particleSystem = new THREE.Points(particles, material);
    scene.add(particleSystem);

    // Camera positioning
    camera.position.z = 10;

    // Animate particles (to make them move)
    const animate = () => {
      requestAnimationFrame(animate);

      // Update particles (move them)
      const positions = particles.attributes.position.array;
      for (let i = 0; i < positions.length; i += 3) {
        // Move particles in a sine wave pattern
        positions[i] += Math.sin(i * 0.01); // x
        positions[i + 1] += Math.cos(i * 0.01); // y
        positions[i + 2] += Math.sin(i * 0.01); // z
      }

      particles.attributes.position.needsUpdate = true;

      // Rotate the scene for a nice 3D effect
      scene.rotation.y += 0.001;

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resizing
    const onResize = () => {
      if (targetRef.current) {
        const width = targetRef.current.clientWidth;
        const height = targetRef.current.clientHeight;

        renderer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
      }
    };

    window.addEventListener("resize", onResize);

    // Clean up when the component unmounts
    return () => {
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      scene.dispose();
    };
  }, [targetRef]);

  return null;
};

export default EngagingBackground;
