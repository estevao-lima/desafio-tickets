import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.png'
import gugale from '../assets/gugale.png'
import GlobalStyle from '../styles/globalStyles'



const Home = () => {
    return(
        <>
        <PageContainer>
            <HeaderContainer>
                <img className="logo1" src={ gugale } alt="logo-left"/>
                <img className="logo2" src={ logo } alt="logo-right"/>
            </HeaderContainer>
            <TicketsContainer>
            <TicketsTop>
                <p>Seus tickets</p>
                <button>Novo ticket</button>
            </TicketsTop>
            <TicketTitles>
                <p>ID</p>
                <p>Título</p>
                <p>Status</p>
            </TicketTitles>
            </TicketsContainer>
        </PageContainer>
    <GlobalStyle/> 
    </>
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
const TicketsTop = styled.div`
        p{
        position: relative;
        display: inline-block;
        font-family: Solomon Normal;

        top: -18px;
        left: 0px;
        bottom: 631px;
        right: 812px;
        
        font-style: normal;
        font-weight: 900;
        font-size: 24px;
        line-height: 29px;
    }

    button{
        display: relative;
        float: right;

        width: 200px;
        height: 50px;
        left: 970px;
        top: 0px;

        background: #ED1651;
        border-radius: 8px;

        font-family: Solomon Normal;
        font-style: normal;
        font-weight: 900;
        font-size: 18px;
        line-height: 22px;
        color: #FFFFFF;
    }
`
const TicketTitles = styled.div`
    p{
        display: inline-block;
        font-family: Roboto;
        font-style: normal;
        font-weight: 900;
        font-size: 18px;
        line-height: 21px;
        color: #000000;
    }

    p:first-child{
        width: 18px;
        height: 21px;
        padding-right: 53px;
        margin-left: 30px;
    }

    p:nth-child(2){
        width: 48px;
        height: 21px;
    }

    p:last-child{
        margin-left: 625px;
    }
`


export default Home;