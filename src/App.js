import { useReactiveVar } from '@apollo/client';
import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import styled, { ThemeProvider } from 'styled-components';
import DarkModeBtn from './components/DarkModeBtn';
import Home from './screen/Home';
import { darkTheme, GlobalStyles, ligthTheme } from "./styles"
import { darkModeVar } from "./apollo"
import Test from './screen/Test';
import Result from './screen/Result';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`

function App() {
  const darkMode = useReactiveVar(darkModeVar)
  return (<ThemeProvider theme={darkMode ? darkTheme : ligthTheme}>
    <GlobalStyles />
    <Router>
      <DarkModeBtn />
      <Container>
        <Route exact path="/"><Home /></Route>
        <Route path="/test"><Test /></Route>
        <Route path="/result"><Result /></Route>
      </Container>
    </Router>
  </ThemeProvider>);
}

export default App;
