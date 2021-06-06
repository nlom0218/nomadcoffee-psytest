import { useReactiveVar } from '@apollo/client';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import { scoreVar } from '../apollo';
import Nav from '../components/Nav';
import { coffeeInfo } from "../utils"
import NotFound from './NotFound';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  max-width: 500px;
`

const CoffeeContainer = styled.div`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 30px solid ${props => props.theme.resultBorderColor};
  border-left: 15px solid ${props => props.theme.resultBorderColor};
  border-right: 15px solid ${props => props.theme.resultBorderColor};
  background-color: ${props => props.theme.resultBorderColor};
  color: ${props => props.theme.resultColor};
  box-shadow: ${props => props.theme.resultBoxShadow};
`

const CoffeeName = styled.span`
  width: 100%;
  font-weight: 600;
  font-size: 40px;
  svg {
    margin-right: 15px;
  }
`

const CoffeeImg = styled.img`
  width: 500px;
  max-width: 500px;
  height: 300px;
  border-top: 30px solid ${props => props.theme.resultBorderColor};;
  margin-bottom: 20px;
`

const CoffeeContents = styled.ul``

const CoffeeContent = styled.li`
  display: flex;
  font-size: 18px;
  margin: 10px;
  line-height: 23px;
  svg {
    margin-right: 10px;
  }
`

const Result = ({ imgs }) => {
  const score = useReactiveVar(scoreVar)
  const coffee = coffeeInfo(score)
  return (<>
    {coffee === null ? <NotFound /> : <Container>
      <CoffeeContainer>
        <CoffeeName>
          <FontAwesomeIcon icon={faCoffee} />
          {coffee?.EName}
        </CoffeeName>
        <CoffeeImg src={imgs[coffee?.id - 1].currentSrc} />
        <CoffeeContents>
          {coffee?.contents.map((item, index) =>
            <CoffeeContent key={index}>
              <FontAwesomeIcon icon={faCoffee} />
              {item}
            </CoffeeContent>
          )}
        </CoffeeContents>
      </CoffeeContainer>
      <Nav />
    </Container>
    }</>);
}

export default Result;