import React from 'react';
import "./programs.css"
import { programsData } from "../../data/programsData"
import RightArrow from "../../assets/rightArrow.png"


const Programs = () => {
    return ( 
        <section className='Programs' id='programs'>
            <div className="programs-header">
                <span className='stroke-text'>Explore our</span>
                <span>Programs</span>
                <span className='stroke-text'>to shape you</span>
            </div> 

            <div className="program-categories">
                {programsData.map((program, i) => (
                    <div className="category" key={i}>
                        {program.image}
                        <span>{program.heading}</span>
                        <span>{program.details}</span>
                        <div className='join-now'>
                            <span>Join Now</span>
                            <img src={RightArrow} alt="right arrow" className='right-arrow' />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Programs;
