import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const ParticleBackground = () => {
    const points = useMemo(() => {
        const p = new Float32Array(3000 * 3);
        for (let i = 0; i < 3000; i++) {
            p[i * 3] = (Math.random() - 0.5) * 40;
            p[i * 3 + 1] = (Math.random() - 0.5) * 40;
            p[i * 3 + 2] = (Math.random() - 0.5) * 40;
        }
        return p;
    }, []);

    const pointsRef = useRef();

    useFrame((state) => {
        if (!pointsRef.current) return;
        const time = state.clock.getElapsedTime();
        pointsRef.current.rotation.y = time * 0.05;
        pointsRef.current.rotation.x = time * 0.02;
    });

    return (
        <Points ref={pointsRef} positions={points} stride={3} frustumCulled={false}>
            <PointMaterial
                transparent
                color="#facc15"
                size={0.06}
                sizeAttenuation={true}
                depthWrite={false}
                blending={THREE.AdditiveBlending}
                opacity={0.4}
            />
        </Points>
    );
};

const DataNexus = () => {
    const meshRef = useRef();

    useFrame((state) => {
        if (!meshRef.current) return;
        const time = state.clock.getElapsedTime();
        meshRef.current.rotation.x = time * 0.2;
        meshRef.current.rotation.y = time * 0.3;
    });

    return (
        <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
            <mesh ref={meshRef} position={[0, 0, 0]}>
                <dodecahedronGeometry args={[2.5, 0]} />
                <MeshDistortMaterial
                    color="#22c55e"
                    speed={2}
                    distort={0.3}
                    radius={1}
                    emissive="#facc15"
                    emissiveIntensity={0.2}
                    wireframe
                />
            </mesh>
        </Float>
    );
};

const HeroCanvas = () => {
    return (
        <div className="h-full w-full bg-black">
            <Canvas camera={{ position: [0, 0, 12], fov: 45 }} dpr={[1, 2]}>
                <ambientLight intensity={0.2} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} color="#facc15" />
                <pointLight position={[-10, -10, -10]} color="#22c55e" intensity={1} />
                <Suspense fallback={null}>
                    <DataNexus />
                    <ParticleBackground />
                </Suspense>
            </Canvas>
        </div>
    );
};

export default HeroCanvas;
