import React, { useContext } from 'react';
import { PortContext } from '../App';
import hari from '../image/hari.jpg';
const Portfolio = () => {
    const { content } = useContext(PortContext);
    return (
        <>
            <div className='image'>
                <div className='Aboutme'>
                    <p className='content'><b>About Me</b></p><hr></hr>
                    <p className='content'>{content[0]}</p><br />
                    <p className='content'><b>Project</b></p><hr />
                    <p className='content'>{content[1]}</p><br />
                    <p className='content'><b>Project Link</b></p><hr />
                    <a href='https://ghariprasath1024.github.io/HtmlAndCssProject/' className="fooder1">To view the  Project </a>
                </div>
                <div className='Aboutme1'>
                    <img src={hari} alt="hari" className='hari' />
                </div>
            </div>
        </>
    );
}
export default Portfolio;