import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import React from 'react'
import './scroll2.css'

function Scroll2() {
    return (
        <div className='animation'>
        <Parallax pages={2} className="parallax">

    {/* Background */}
    <ParallaxLayer offset={0} speed={0.05}>
        <div className="animated_layer" id="background"></div>
    </ParallaxLayer>

    {/* Far mountains */}
    <ParallaxLayer offset={0} speed={0.1}>
        <div className="animated_layer" id="mountains"></div>
    </ParallaxLayer>

    {/* Jungle back */}
    <ParallaxLayer offset={0} speed={0.2}>
        <div className="animated_layer" id="jungle5"></div>
    </ParallaxLayer>

    <ParallaxLayer offset={0} speed={0.3}>
        <div className="animated_layer" id="jungle4"></div>
    </ParallaxLayer>

    <ParallaxLayer offset={0} speed={0.45}>
        <div className="animated_layer" id="jungle3"></div>
    </ParallaxLayer>

    <ParallaxLayer offset={0} speed={0.6}>
        <div className="animated_layer" id="jungle2"></div>
    </ParallaxLayer>

    <ParallaxLayer offset={0} speed={0.8}>
        <div className="animated_layer" id="jungle1"></div>
    </ParallaxLayer>

    {/* Front objects */}
    <ParallaxLayer offset={0} speed={1}>
        <div className="animated_layer" id="man_on_mountain"></div>
    </ParallaxLayer>

    <ParallaxLayer offset={0} speed={1.2}>
        <div className="animated_layer" id="logo_land"></div>
    </ParallaxLayer>

</Parallax>
        </div>
    )
}

export default Scroll2
