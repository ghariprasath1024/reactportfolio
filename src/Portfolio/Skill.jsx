import React, { useState, createContext, useContext } from 'react';
import { PortContext } from '../App';
import Fooder from './Fooder';
import img from '../image/html.jpeg';
import css from'../image/css.jpg';
import js from'../image/js.png';
import jsx from'../image/jsx.png';
import figma from'../image/FIGMA.png';
export const FooderContext = createContext();
const Skill = () => {
    const { skills } = useContext(PortContext);
    const [social, setSocial] = useState(["Social Media", "Linkedin", "Github", "Mobile", "Gmail"]);
    return (
        <FooderContext.Provider value={{ social }}>
            <>
                <p className='Skill1'>Skills</p>
                <div className='Skill'>
                    <div>
                        <img src={img} alt="HTML logo" />
                        <p>{skills[0]}</p>
                    </div>
                    <div>
                        <img src={css} alt="css logo" />
                        <p>{skills[1]}</p>
                    </div>
                    <div>
                        <img src={js} alt="javascript logo" />
                        <p>{skills[2]}</p>  
                    </div>
                    <div>
                        <img src={jsx} alt="" />    
                        <p>{skills[3]}</p>
                    </div>
                    <div>
                        <img src={figma} alt="" />
                        <p>{skills[4]}</p>
                    </div>
                </div>
                <Fooder />
            </>
        </FooderContext.Provider>
    )
}
export default Skill;