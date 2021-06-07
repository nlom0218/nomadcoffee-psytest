import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router';
import styled from 'styled-components';
import PageTitle from '../components/PageTitle';
import finsihImg from "../img/finish-unsplash.jpg"

const LoadingContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin-top: 50px;
`

const LoadingBar = styled.div`
  width:100%;
  height: 30px;
  border:1px solid #343A40;
  overflow:hidden;
  background-color: ${props => props.theme.loadingBgColor};
  box-shadow: ${props => props.theme.shadow};
`

const BarState = styled.div`
  width:37%;
  height: 30px;
  border-right: 1px solid #343A40;
  background: ${props => props.theme.barState};
`

const BarText = styled.div`
  color: ${props => props.theme.barText};
  font-size: 18px;
  font-weight: bold;
  left: 15px;
  position: relative;
  top: -21px; 
`

const LoadingMsg = styled.div`
    font-weight: 600;
    width: 100% ;
    font-size: 24px;
    margin-top: 20px;
    display: flex;
    justify-content: flex-end;
`

const FinsihImg = styled.img`
  margin-top: 100px;
  width: 600px;
  max-width: 600px;
  height: 400px;
  box-shadow: ${props => props.theme.shadow};
  border-radius: 10px;
`

const Finish = () => {
  const [onload, setOnload] = useState(0)
  const [loadEnd, setLoadEnd] = useState(false)

  useEffect(() => {
    if (onload < 30) {
      setTimeout(() => { setOnload(onload + 1) }, 50)
    } else if (onload < 60) {
      setTimeout(() => { setOnload(onload + 1) }, 30)
    } else if (onload < 100) {
      setTimeout(() => { setOnload(onload + 1) }, 20)
    } else if (onload === 100) {
      setLoadEnd(true)
    }
  }, [onload])
  return (<>
    <PageTitle title="FINISH" />
    <FinsihImg src={finsihImg} />
    <LoadingContainer>
      <LoadingBar>
        <BarState style={{ width: `${onload}%` }}></BarState>
        <BarText>{onload}%</BarText>
      </LoadingBar>
      <LoadingMsg>{loadEnd ? "" : "커피 추출 중... ☕️"}</LoadingMsg>
    </LoadingContainer>
    {loadEnd && <Redirect to="/result" />}
  </>
  );
}

export default Finish;