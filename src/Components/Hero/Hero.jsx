import React from 'react';
import Header from '../Header/Header';
import './hero.css'
import hero_image from "../../assets/hero_image.png"
import hero_image_back from "../../assets/hero_image_back.png"
import heart from "../../assets/heart.png"
import calories from "../../assets/calories.png"
import { motion } from 'framer-motion';
import NumberCounter from 'number-counter';

const Hero = () => {
    const transition = { type: 'spring', duration: 3 }
    const mobile = window.innerWidth <= 768 ? true : false
    const tablet = window.innerWidth <= 950 ? true : false

    return (
        <header className='hero' id='home'>
            <div className="blur hero-blur"></div>
            <div className="left-h">
                <Header />
                <div className="the-best-ad">
                    <motion.div
                        initial={{ left: mobile ? "165px" : "238px" }}
                        whileInView={{ left: '8px' }}
                        transition={transition}
                    >
                    </motion.div>
                    <span>The best fitness club in the town!</span>
                </div>

                <div className="hero-text">
                    <div>
                        <span className='stroke-text'>Shape </span>
                        <span>Your</span>
                    </div>
                    <div>
                        <span>Ideal body</span>
                    </div>
                    <div>
                        <span>
                            In here we will help you to shape and build your ideal body and live up your life to the fullest!
                        </span>
                    </div>
                </div>

                <div className="figures">
                    <div>
                        <span>
                            <NumberCounter end={148} delay={1} preFix='+' />
                        </span>
                        <span>expert coaches</span>
                    </div>
                    <div>
                        <span>
                            <NumberCounter start={600} end={997} delay={1} preFix='+' />
                        </span>
                        <span>members joined</span>
                    </div>
                    <div>
                        <span>
                            <NumberCounter end={53} delay={2} preFix='+' />
                        </span>
                        <span>fitness programs</span>
                    </div>
                </div>

                <div className="hero-buttons">
                    <button className='btn'><span>Get Started</span></button>
                    <button className='btn'><span>Learn More</span></button>
                </div>
            </div>

            <div className="right-h">
                <button className='btn btn-join'>Join Now</button>

                <motion.div
                    initial={{ right: '-1rem' }}
                    whileInView={{ right: '4rem' }}
                    transition={transition}
                    className="heart-rate">
                    <img src={heart} alt="heart" />
                    <span>Heart Rate</span>
                    <span>
                        <NumberCounter end={116} delay={4} postFix='bpm' />
                    </span>
                </motion.div>

                <img src={hero_image} alt="hero Image" className='hero-image' />
                <motion.img
                    initial={{ right: '11rem' }}
                    whileInView={{ right: tablet ? '12rem' : '20rem' }}
                    // whileInView={{ right: '20rem' }}
                    transition={transition}
                    src={hero_image_back} alt="background" className='hero-image-back' />

                <motion.div
                    initial={{ right: '37rem' }}
                    whileInView={{ right: '28rem' }}
                    transition={transition}
                    className="calories">
                    <img src={calories} alt="calories" />
                    <div>
                        <span>Calories Burned</span>
                        <span>220 Kcal</span>
                    </div>
                </motion.div>
            </div>
        </header >
    );
}

export default Hero;
