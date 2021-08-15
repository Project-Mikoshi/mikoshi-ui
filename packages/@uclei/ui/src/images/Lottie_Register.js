import React from 'react'
import Lottie from 'react-lottie'
import animationData from './registration-animation.json'

export default function Lottie_Register() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (<Lottie options={defaultOptions} height={180} width={180}/>)
}