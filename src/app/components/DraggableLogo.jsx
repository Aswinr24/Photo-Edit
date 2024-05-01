'use client'
import { motion } from 'framer-motion'

const DraggableLogo = ({ logoPosition, setLogoPosition }) => {
  return (
    <motion.img
      src="/logo.png"
      alt="logo"
      style={{ position: 'absolute', cursor: 'grab' }}
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragElastic={false}
      onDrag={(event, info) => {
        setLogoPosition({ x: info.point.x, y: info.point.y })
      }}
      initial={{ x: 0, y: 0 }}
      animate={{ x: logoPosition.x, y: logoPosition.y }}
    />
  )
}

export default DraggableLogo
