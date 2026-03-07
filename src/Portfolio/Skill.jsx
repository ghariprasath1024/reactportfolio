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
                        <a href='https://skills024.netlify.app/'>skills024.netlify.app</a>
                    </div>
                    <div className='Foodercontent2'>
                        <h3>Project Fin-AI</h3><hr />
                        <a href='#'>To be continued</a>
                    </div>
                </div>
                <Fooder />
            </>
        </FooderContext.Provider>
    )
}
export default Skill;