import React, { useState } from 'react'
import { motion } from 'framer-motion'
const Box1 = () => {
    const [isAnimating, setAnimating] = useState(false)
    return (
        <div className='box-container'>
            <motion.div className="box"
                animate={{
                    x: isAnimating ? 550 : 0,
                    opacity: isAnimating ? 1 : 0.5,
                    backgroundColor: "blue",
                    rotate: isAnimating ? 360 : 0
                }}
                initial={{
                    opacity: 0.5,
                }}
                transition={{
                    duration: 2
                }}
                onClick={() => setAnimating(!isAnimating)}
            >
            </motion.div>
        </div>
    )
}

export default Box1