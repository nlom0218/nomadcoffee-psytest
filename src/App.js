import { useReactiveVar } from '@apollo/client';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import styled, { ThemeProvider } from 'styled-components';
import DarkModeBtn from './components/DarkModeBtn';
import Home from './screen/Home';
import { darkTheme, GlobalStyles, ligthTheme } from "./styles"
import { darkModeVar } from "./apollo"
import Test from './screen/Test';
import Result from './screen/Result';
import List from './screen/List';
import Info from './screen/Info';
import NotFound from './screen/NotFound';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex: 1;
`

function App() {
  const darkMode = useReactiveVar(darkModeVar)
  return (<ThemeProvider theme={darkMode ? darkTheme : ligthTheme}>
    <GlobalStyles />
    <Router>
      <DarkModeBtn />
      <Container>
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route path="/test"><Test /></Route>
          <Route path="/result"><Result /></Route>
          <Route path="/list"><List /></Route>
          <Route path="/info"><Info /></Route>
          <Route><NotFound /></Route>
        </Switch>
      </Container>
    </Router>
  </ThemeProvider >);
}

export default App;
