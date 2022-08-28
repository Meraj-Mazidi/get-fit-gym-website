import React, { useState } from "react";
import "./testimonials.css";
import { testimonialsData } from "../../data/testimonialsData"
import leftArrow from "../../assets/leftArrow.png"
import rightArrow from "../../assets/rightArrow.png"
import { motion } from 'framer-motion'

const Testimonials = () => {
    const [selected, setSelected] = useState(0)
    const tLength = testimonialsData.length - 1
    const transition = { type: 'spring', duration: 3 }

    return (
        <section className="Testimonials" id="testimonials">
            <div className="left-t">
                <span>Testimonials</span>
                <span className="stroke-text">What they</span>
                <span>say about us</span>
                <motion.span
                    key={selected}
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 100 }}
                    transition={transition}
                >
                    {testimonialsData[selected].review}
                </motion.span>
                <span>
                    <span style={{ color: 'var(--orange)' }}>
                        {testimonialsData[selected].name}
                    </span> {" "}
                    - {testimonialsData[selected].status}
                </span>
            </div>
            <div className="right-t">
                <motion.div
                    initial={{ opacity: 0, x: -600 }}
                    transition={transition}
                    whileInView={{ opacity: 1, x: 0 }}
                ></motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 400 }}
                    transition={transition}
                    whileInView={{ opacity: 1, x: 0 }}
                ></motion.div>
                <motion.img
                    key={selected}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={transition}
                    src={testimonialsData[selected].image} alt="customer image" />
                <div className="arrows">
                    <img src={leftArrow} alt="arrow icon" onClick={() => (
                        selected === 0 ? setSelected(tLength - 1) : setSelected(prev => prev - 1)
                    )} />
                    <img src={rightArrow} alt="arrow icon" onClick={() => (
                        selected === tLength ? setSelected(0) : setSelected(prev => prev + 1)
                    )} />
                </div>

            </div>
        </section>
    );
}

export default Testimonials;
