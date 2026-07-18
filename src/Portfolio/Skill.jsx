import React, { useState, createContext} from 'react';
import Fooder from './Fooder';
export const FooderContext = createContext();
const Skill = () => {
    const [social] = useState(["Social Media", "Linkedin", "Github", "Mobile", "Gmail"]);
    return (
        <FooderContext.Provider value={{ social }}>
            <>
                <p className='Skill1'>Skills & Project Fin-AI</p>
                <div className='Foodercontent1'>
                    <div className='Foodercontent2'>
                        <h3>Skill Sets</h3><hr />
                        <a href='https://skills024.netlify.app/'>netlify.app</a>
                    </div>
                    <div className='Foodercontent2'>
                        <h3>Projects</h3><hr />
                        <a href='https://example.com'>projects024.netlify.app</a>
                    </div>
                    <div className='Foodercontent2'>
                        <h3>AI Portfolio</h3><hr />
                        <a href='https://ghariprasath1024.github.io/Portfolio-ai/'>Portfolio-ai</a>
                    </div>
                </div>
                <Fooder />
            </>
        </FooderContext.Provider>
    )
}
export default Skill;