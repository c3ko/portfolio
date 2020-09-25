import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import VisibilitySensor from 'react-visibility-sensor'

function AnimationWrapper({ children }) {
    
    const [{ y, opacity }, set] = useSpring(() => ({ config: { duration: 450}, y: 8, opacity: 0 }))

    function onChange(isVisible) {
        if (isVisible){
            set({ y: 0, opacity: 1 })
        }

    }

    return (
        <VisibilitySensor 
            partialVisibility={true}
            onChange={onChange}>
            <animated.div style={{ 
                opacity ,
                transform: y.interpolate(v => `translateY(${v}%)`)
                }}>
                {children}
            </animated.div>  
        </VisibilitySensor>
    )
}

export default AnimationWrapper;
