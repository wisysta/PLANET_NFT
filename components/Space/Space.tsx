import React, { CanvasHTMLAttributes, useContext, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
// import { Stars } from "@react-three/drei";
import dynamic from "next/dynamic";
import { SpaceContext } from "@/contexts";

const Stars = dynamic(
    () => import("@react-three/drei").then((mod) => mod.Stars),
    { ssr: false }
);

const Planet = dynamic(() => import("../Planet").then((mod) => mod.Planet), {
    ssr: false,
});

export const Space = (props: CanvasHTMLAttributes<any>) => {
    const { planet } = useContext(SpaceContext);

    return (
        <Canvas
            onCreated={(state) => state.gl.setClearColor("black")}
            {...props}
        >
            <Stars
                radius={5}
                depth={100}
                count={5000}
                factor={4}
                saturation={1}
                fade
                speed={3}
            />
            <Planet name={planet} position={[0, 1.5, 0]} />
            <ambientLight intensity={0.3} />
            <spotLight
                position={[100, 100, 80]}
                distance={200}
                intensity={20}
                angle={1}
            />
        </Canvas>
    );
};
