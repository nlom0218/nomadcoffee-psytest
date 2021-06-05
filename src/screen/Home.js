import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { scoreVar } from '../apollo';
import home_img from "../img/home-unsplash.jpg"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 600px;
  max-width: 600px;
`

const MainTitle = styled.h1`
  font-size: 30px;
  font-weight: 600;
`

const SubTitle = styled.h2`
  font-size: 24px;
  margin: 20px 0px;
  svg {
    margin: 0px 5px 0px 10px;
  }
`

const Img = styled.img`
  width: 350px;
  max-width: 350px;
  height: 500px;
  border-radius: 10px;
  box-shadow: ${props => props.theme.shadow};
`

const StartBtn = styled.button`
  margin-top: 30px;
  font-size: 20px;
  padding: 7px 20px;
  font-weight: 600;
  cursor: pointer;
  background-color: #549bb7;
  border-radius: 10px;
  border: none;
  color: #f2f6fc;
  box-shadow: ${props => props.theme.shadow};
`

const HomeMsg = styled.span`
  margin: 30px 0px;
  font-size: 18px;
  font-weight: 300;
  line-height: 20px;
`

const Home = () => {
  return (<Container>
    <MainTitle>
      NOMADCOFFEE PSYCHOLOGICAL TEST
    </MainTitle>
    <SubTitle>당신은 지금
      <FontAwesomeIcon icon={faCoffee} />
    가 마시고 싶다
    </SubTitle>
    <Img src={home_img} />
    <Link to="/test" onClick={() => scoreVar(0)}>
      <StartBtn>START</StartBtn>
    </Link>
    <HomeMsg>
      여행을 떠나기 전 커피 한 잔 어떠나요? 노마드커피 심리 테스를 통해 여행 전 커피를 추천 받아보세요!
      단순히 재미로 즐겨주셨으면 좋겠습니다.
    </HomeMsg>
  </Container>);
}

export default Home;