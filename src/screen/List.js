import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import Nav from '../components/Nav';
import { coffee } from '../psyTestData';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  max-width: 500px;
`

const Title = styled.span`
  width:100%;
  text-align: center;
  margin-top: 50px;
  font-size: 50px;
  font-weight: 600;
`

const CoffeeContainer = styled.div`
  margin-top: 50px;
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

const List = ({ imgs }) => {
  const coffeeList = coffee

  return (<><Container>
    <Title>NOMADCOFFEE LIST</Title>
    {coffeeList.map((coffee, index) => {
      return <CoffeeContainer key={index}>
        <CoffeeName>
          <FontAwesomeIcon icon={faCoffee} />
          {coffee?.EName}
        </CoffeeName>
        <CoffeeImg src={imgs[index].currentSrc} />
        <CoffeeContents>
          {coffee?.contents.map((item, index) =>
            <CoffeeContent key={index}>
              <FontAwesomeIcon icon={faCoffee} />
              {item}
            </CoffeeContent>
          )}
        </CoffeeContents>
      </CoffeeContainer>
    })}
    <Nav />
  </Container>
    {/* <Footer /> */}
  </>);
}

export default List;