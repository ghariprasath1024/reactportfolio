import React, { useContext } from 'react';
import { PortContext } from '../App';
import hari from '../image/hariprasath.jpeg';
const Portfolio = () => {
    const { content } = useContext(PortContext);
    return (
        <>
            <div className='image'>
                <div className='Aboutme'>
                    <p className='content'><b>This is Hariprasath</b></p>
                    <h5><p className='content'><b>Creative Developing</b></p></h5><br />
                    <p className='content'><b>About Me</b></p><hr></hr>
                    <p className='content'>{content[0]}</p><br />
                    <p className='content'><b>UG Project Fin-AI</b></p><hr />
                    <p className='content'>{content[1]}</p><br />
                </div>
                <div className='Aboutme1'>
                    <img src={hari} alt="hari" className='hari' />
                </div>
            </div>
        </>
    );
}
export default Portfolio;