import React, { useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { darkModeVar } from '../apollo';

const LoadingContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin-top: 200px;
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
  font-size: 18px;
  font-weight: bold;
  left: 15px;
  position: relative;
  top: -21px; 
`

const LoadingMsg = styled.div`
    width: 100% ;
    font-size: 22px;
    margin-top: 20px;
    display: flex;
    justify-content: flex-end;
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
  return (<><LoadingContainer>
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