import { Canvas } from "@react-three/fiber"
import { Environment, OrbitControls, Sphere } from "@react-three/drei"
import Options from "../Views/Options"
import Question from "../Views/Question"

// import styles from '../Quiz.scss'

const Quiz = () => {
    return(
        <>
            <Canvas camera={{ position: [0, 4, 16], fov: 50 }}>
            {/* <Sphere receiveShadow={false} castShadow={false} position={[-9, 0, 0]}>
            <meshStandardMaterial color="hotpink" />
          </Sphere> */}
                <ambientLight intensity={0.3}  />
                <OrbitControls/>
                <pointLight position={[10, 8, 0]} color={"white"} />
                {/* <Environment preset="warehouse" background /> */}
                <Options/>
            </Canvas>
            {/* <Question/> */}
        </>
    )
}

export default Quiz;