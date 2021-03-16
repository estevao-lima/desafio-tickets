import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.png'
import gugale from '../assets/gugale.png'


const Home = () => {
    return(
        <PageContainer>
            <HeaderContainer>
                <img className="logo1" src={ gugale } alt="logo-left"/>
                <img className="logo2" src={ logo } alt="logo-right"/>
            </HeaderContainer>
            <TicketsContainer>
                <p>Seus tickets</p>
            </TicketsContainer>
        </PageContainer>
    )

}

const PageContainer = styled.div`
  background: #FFFFFF;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
`
const HeaderContainer = styled.div`
        position: absolute;
        width: 1440px;
        height: 100px;
        left: 0px;
        top: 0px;   
        background: #FFFFFF;

    img:first-child{
        position: absolute;
        width: 141.75px;
        height: 50px;
        left: 40px;
        top: 25px;
    }

    img:last-child{
        position: absolute;
        width: 50px;
        height: 50px;
        left: 1350px;
        top: 25px;
    }

`
const TicketsContainer = styled.div`
    position: absolute;
    width: 980px;
    height: 700px;
    left: 230px;
    top: 162px;

    background: #FFFFFF;
    border-radius: 8px;
`



export default Home;