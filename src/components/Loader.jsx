import {Html, useProgress} from '@react-three/drei'

const Loader = () => {
  const {progress} = useProgress()
  return (
    <Html>
      <span className='canvas-load'></span>
      <p className={{
        fontSize: 18,
        color: '#fff',
        fontWeight: 800,
        marginTop: 40,
      }}>{progress.toFixed(1)}%</p>
    </Html>
  )
}

export default Loader