import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense } from "react";

function Model({ url, scale }) {
	const gltf = useGLTF(url); // загружает модель
	return <primitive object={gltf.scene} scale={scale} position={[0, -1, 0]} />; // вставляем в сцену
}

function Box() {
	return (
		<mesh position={[1, 0, 0]}>
			<boxGeometry args={[1, 1, 1]} />

			<meshStandardMaterial color="orange" />
		</mesh>
	);
}

function Scene3D({ url, scale = 1 }) {
	return (
		<Canvas style={{ width: "500px", height: "500px" }}>
			<ambientLight intensity={1} />
			<pointLight position={[10, 10, 10]} />
			<Suspense fallback={null}>
				<Model url={url} scale={scale} />
			</Suspense>
			<OrbitControls />
		</Canvas>
	);
}

export default Scene3D;
