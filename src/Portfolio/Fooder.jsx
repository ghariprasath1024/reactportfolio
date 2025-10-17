import React, { useContext } from "react";
import { FooderContext } from "./Skill";
const Fooder = () => {
    const { social } = useContext(FooderContext);
    return (
        <>
            <div className='Foodercontent'>
                <div><b>{social[0]}</b></div>
                <div className="Fooder">
                    <p><b>{social[1]}</b><a href="http://www.linkedin.com/in/hari-prasath-g-a073b6292" className="fooder1">hari-prasath</a></p>
                    <p><b>{social[2]}</b><a href="https://github.com/ghariprasath1024" className="fooder1">Hariprasath</a></p>
                    <p><b>{social[3]}</b><a href="tel:6379831125">6379831125</a></p>
                    <p><b>{social[4]}</b><a href="mailto:ghariprasath@gmail.com" className="fooder1" >ghariprasath1024@gmail.com</a></p>
                </div>
            </div>
        </>
    )
}
export default Fooder;