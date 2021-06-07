import { useReactiveVar } from '@apollo/client';
import React, { useEffect } from 'react';
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

import test1Img from "./img/test1-unsplash.jpg"
import test2Img from "./img/test2-unsplash.jpg"
import test3Img from "./img/test3-unsplash.jpg"
import test4Img from "./img/test4-unsplash.jpg"
import test5Img from "./img/test5-unsplash.jpg"
import test6Img from "./img/test6-unsplash.jpg"
import test7Img from "./img/test7-unsplash.jpg"
import test8Img from "./img/test8-unsplash.jpg"
import test9Img from "./img/test9-unsplash.jpg"
import test10Img from "./img/test10-unsplash.jpg"
import coffee1Img from "./img/coffee1-unsplash.jpg"
import coffee2Img from "./img/coffee2-unsplash.jpg"
import coffee3Img from "./img/coffee3-unsplash.jpg"
import coffee4Img from "./img/coffee4-unsplash.jpg"
import coffee5Img from "./img/coffee5-unsplash.jpg"
import coffee6Img from "./img/coffee6-unsplash.jpg"
import coffee7Img from "./img/coffee7-unsplash.jpg"
import homeImg from "./img/home-unsplash.jpg"
import finsihImg from "./img/finish-unsplash.jpg"
import notFoundImg from "./img/notFound-unsplash.jpg"
import infoImg from "./img/info-unsplash.jpg"

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

  const imgsFiles = {
    testImgs: [test1Img, test2Img, test3Img, test4Img, test5Img, test6Img, test7Img, test8Img, test9Img, test10Img],
    coffeeImgs: [coffee1Img, coffee2Img, coffee3Img, coffee4Img, coffee5Img, coffee6Img, coffee7Img],
    homeImgs: [homeImg, finsihImg, notFoundImg, infoImg]
  }

  let testImgsPreLoading = new Array()
  let coffeeImgsPreLoading = new Array()
  let homeImgsPreLoading = new Array()

  imgsFiles.testImgs.forEach((item, index) => {
    testImgsPreLoading[index] = new Image()
    testImgsPreLoading[index].src = item
  })
  imgsFiles.coffeeImgs.forEach((item, index) => {
    coffeeImgsPreLoading[index] = new Image()
    coffeeImgsPreLoading[index].src = item
  })
  imgsFiles.homeImgs.forEach((item, index) => {
    homeImgsPreLoading[index] = new Image()
    homeImgsPreLoading[index].src = item
  })

  return (<ThemeProvider theme={darkMode ? darkTheme : ligthTheme}>
    <GlobalStyles />
    <Router>
      <DarkModeBtn />
      <Container>
        <Switch>
          <Route exact path="/" ><Home /></Route>
          <Route path="/test"><Test imgs={testImgsPreLoading} /></Route>
          <Route path="/result"><Result imgs={coffeeImgsPreLoading} /></Route>
          <Route path="/list"><List imgs={coffeeImgsPreLoading} /></Route>
          <Route path="/info"><Info /></Route>
          <Route><NotFound /></Route>
        </Switch>
      </Container>
    </Router>
  </ThemeProvider >);
}

export default App;
