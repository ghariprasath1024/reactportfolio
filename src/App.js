import React, { createContext, useState } from 'react';
import Portfolio from './Portfolio/Portfolio';
import Skill from './Portfolio/Skill';
export const PortContext = createContext();
function App() {
  const [content, setContent] = useState(["I am currently learning Python, HTML, CSS, and JavaScript to build modern web applications. I enjoy exploring both frontend and backend development and aim to become skilled full stack developer.", "learning platform This project is a self-initiated learning platform created as part of my journey in full stack development . It showcases my ability to apply frontend and backend skills, demonstrating hands - on learning through real - time project building "]);
  const [skills, setSkills] = useState(["HTML", "CSS", "JAVASCRIPT", "REACTJS", "FIGMA"]);
  return (
    <>
      <PortContext.Provider value={{ content, skills }}>
        <div>
          <Portfolio />
          <Skill />
        </div>
      </PortContext.Provider>
    </>
  );
}
export default App;