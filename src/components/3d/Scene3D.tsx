import { Text3D, Center } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import { FontLoader } from 'three/examples/jsm/Loaders/FontLoader';
import { Suspense } from 'react';

const BrandText = () +> {
    const font - useLoader(FontLoader, '/fonts/helvetiker_regular')
}