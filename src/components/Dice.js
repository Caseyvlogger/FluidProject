import React from 'react'
import OneDot from './OneDot'
import TwoDot from './TwoDot'
import ThreeDot from './ThreeDot'
import FourDot from './FourDot'
import FiveDot from './FiveDot'
import SixDot from './SixDot'

const Dice = (props) => {
    return (
        props.number == 1 ? (
            <OneDot />
        ) : props.number == 2 ? (
            <TwoDot />
        ) : props.number == 3 ? (
            <ThreeDot />
        ) : props.number == 4 ? (
            <FourDot />
        ) : props.number == 5 ? (
            <FiveDot />
        ) : (
            <SixDot />
        )
    )
}

export default Dice