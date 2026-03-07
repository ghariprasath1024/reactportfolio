import React, { createContext, useState } from 'react';
import Portfolio from './Portfolio/Portfolio';
import Skill from './Portfolio/Skill';
export const PortContext = createContext();
function App() {
  const [content] = useState(["I am currently learning HTML, CSS, JavaScript, Reactjs, Python, Django to build modern web applications. I enjoy exploring both frontend and backend development and aim to become skilled full stack developer.", "The Finance Management System (FinAI) is a secure, digital platform designed to help users track, analyze, and manage their personal finances. It provides a user-friendly interface for recording transactions, setting budgets, and receiving AI-driven financial insights. "]);
  return (
    <>
      <PortContext.Provider value={{ content }}>
        <div>
          <Portfolio />
          <Skill />
        </div>
      </PortContext.Provider>
    </>
  );
}
export default App;