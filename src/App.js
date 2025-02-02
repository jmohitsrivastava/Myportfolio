import logo from './logo.svg';
import './App.css';
import styled, { ThemeProvider } from 'styled-components'
import { darkTheme } from './utils/Themes';
import Skills from './components/Skills';
import Education from './components/Education';
import Herro from './components/HeroSection/Hero';
import Navbar from './components/Navbar/navbar';
import {BrowserRouter as Router} from "react-router-dom"


function App() {

  const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`
const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
` 

  return (
    <div className="App">
       <ThemeProvider theme={darkTheme}>
        <Router>
        <Navbar/>
        <Body>
          <Herro/>
          <Wrapper>
            <Skills/>
            <Education/>
          </Wrapper>
        </Body>
        </Router>
       </ThemeProvider>
    </div>
  );
}

export default App;
