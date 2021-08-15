import React from 'react'
import Lottie from 'react-lottie'
import animationData from './stock_market_analysis.json'

export default function Lottie_StockMarketAnalysis() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (<Lottie options={defaultOptions} height={250} width={250}/>)
}