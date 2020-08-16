import React from 'react'
import { useSpring, animated } from 'react-spring'
import VisibilitySensor from 'react-visibility-sensor'

function AnimationWrapper({ children }) {
    
    const [{ y, opacity }, set] = useSpring(() => ({ y: 0, opacity: 0 }))

    function onChange(isVisible) {
        if (isVisible)
            set({ y: 5, opacity: 1 })
        else
            set({ y: 0, opacity: 0 })
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
