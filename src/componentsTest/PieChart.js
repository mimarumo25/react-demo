import React, { useRef } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import * as THREE from 'three';

const PieChart = ({ data }) => {
  const mesh = useRef();

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.x += 0.01;
      mesh.current.rotation.y += 0.01;
    }
  });

  const generatePieGeometry = () => {
    const geometry = new THREE.ShapeGeometry(generatePieShape(data));
    return geometry;
  };

  const generatePieShape = (data) => {
    const shape = new THREE.Shape();
    const radius = 1;
    let thetaStart = 0;

    for (let i = 0; i < data.length; i++) {
      const thetaLength = (Math.PI * 2 * data[i]) / 100;
      shape.absarc(0, 0, radius, thetaStart, thetaStart + thetaLength, false);
      thetaStart += thetaLength;
    }

    return shape;
  };

  return (
    <mesh ref={mesh} geometry={generatePieGeometry()} material={new THREE.MeshBasicMaterial({ color: 0x00ff00, side: THREE.DoubleSide })} />
  );
};

const AppPie = () => {
  const pieChartData = [30, 40, 20, 10];

  return (
    <div style={{ height: '100vh' }}>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <PieChart data={pieChartData} />
      </Canvas>
    </div>
  );
};

export default AppPie;
