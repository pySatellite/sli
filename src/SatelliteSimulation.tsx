import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import * as Satellite from 'satellite.js';
const SatelliteSimulation = () => {
    const containerRef = useRef();

    useEffect(() => {
        // Set up scene
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        containerRef.current.appendChild(renderer.domElement);

        // Create a satellite
        const satrec = Satellite.twoline2satrec(
            '1 25544U 98067A   03124.96183528  .00007246  00000+0  63990-4 0  3220',
            '2 25544  51.6361  13.7980 0004256  45.6675  16.0423 15.58778559250029'
        );

        // Update satellite position
        const updateSatellitePosition = () => {
            const now = new Date();
            const positionAndVelocity = Satellite.propagate(satrec, now);
            const position = positionAndVelocity.position;
            const x = position.x / 1000; // Convert to kilometers
            const y = position.y / 1000;
            const z = position.z / 1000;

            satelliteMesh.position.set(x, y, z);
        };

        // Create satellite mesh
        const satelliteGeometry = new THREE.SphereGeometry(1, 32, 32);
        const satelliteMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        const satelliteMesh = new THREE.Mesh(satelliteGeometry, satelliteMaterial);
        scene.add(satelliteMesh);

        // Set camera position
        camera.position.z = 5;

        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);

            updateSatellitePosition();

            renderer.render(scene, camera);
        };

        animate();

        // Handle window resize
        const handleResize = () => {
            const newWidth = window.innerWidth;
            const newHeight = window.innerHeight;

            camera.aspect = newWidth / newHeight;
            camera.updateProjectionMatrix();

            renderer.setSize(newWidth, newHeight);
        };

        window.addEventListener('resize', handleResize);

        // Clean up
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return <div ref={containerRef} />;
};

export default SatelliteSimulation;
