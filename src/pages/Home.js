import React, { useState }from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.png'
import gugale from '../assets/gugale.png'
import CreateTicketModal from './CreateTicketModal.js'
import GlobalStyle from '../styles/globalStyles'
import { FiEdit, FiEye } from 'react-icons/fi'
import {IconContext} from "react-icons";



const Home = () => {

    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(prev => !prev)
    }

    return(
        <>
        <PageContainer>
            <HeaderContainer>
                <img src={ gugale } alt="logo-left"/>
                <img src={ logo } alt="logo-right"/>
            </HeaderContainer>
            <TicketsContainer>
            <CreateTicketModal showModal={ showModal } setShowModal= { setShowModal }/>
            <TicketsTop>
                <p>Seus tickets</p>
                <button onClick={openModal}>Novo ticket</button>
            </TicketsTop>
            <TicketTitles>
                <p>ID</p>
                <p>Título</p>
                <p>Status</p>
            </TicketTitles>
            <TicketsInfo>
                <p className="id">#5079</p>
                <p className="titles">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p className="status">Não Iniciado</p><button><FiEdit className="icon"/></button>
                <p className="id">#5079</p>
                <p className="titles">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p className="status">Não Iniciado</p><button><FiEdit className="icon"/></button>
                <p className="id">#5079</p>
                <p className="titles">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p className="status">Não Iniciado</p><button><FiEdit className="icon"/></button>
                <p className="id">#5079</p>
                <p className="titles">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p className="statusAnd">Não Iniciado</p><button><FiEdit className="icon"/></button>
                <p className="id">#5079</p>
                <p className="titles">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p className="statusAnd">Não Iniciado</p><button><FiEdit className="icon"/></button>
                <p className="id">#5079</p>
                <p className="titles">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p className="statusFnsh">Não Iniciado</p><button className="btnFnsh"><FiEye className="icon-fnsh"/></button>
                <p className="id">#5079</p>
                <p className="titles">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p className="statusFnsh">Não Iniciado</p><button className="btnFnsh"><FiEye className="icon-fnsh"/></button>
            </TicketsInfo>
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
        font-family: Solomon Black;

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
        float: right;
        cursor: pointer;
        width: 200px;
        height: 50px;
        left: 970px;
        top: 0px;
        border: none;
        outline: none;

        background: #ED1651;
        border-radius: 8px;

        font-family: Solomon Black;
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
        font-family: Roboto Black;
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
const TicketsInfo = styled.div`
    position: absolute;
    width: 980px;
    height: 60px;
    background: #F2F2F2;
    font-family: Roboto-Regular;

    p{
        display: inline-block;
        color: #000000;
    }

    .id{
        margin-left: 30px;
    }

    .titles{
        margin-left: 30px;
    }

    .status{
        margin-left: 255px;
        font-family: Solomon Black;
        font-style: normal;
        font-weight: 900;
        line-height: 12px;
        color: #FF4444;
    }

    .statusAnd{
        margin-left: 255px;
        font-family: Solomon Black;
        font-style: normal;
        font-weight: 900;
        line-height: 12px;
        color: #EDE02D;
    }

    .statusFnsh{
        margin-left: 255px;
        font-family: Solomon Black;
        font-style: normal;
        font-weight: 900;
        line-height: 12px;
        color: #00A115;    
    }

    button{
        margin-left: 88px;
        width: 30px;
        height: 30px;
        background: #33B5E5;
        border-radius: 8px;
        font-size: 14px;
        border: none;
        cursor: pointer;
        outline: none;
    }

    .icon{
        padding-top:3px;
        padding-left: 1px;
        color: #FFFFFF;
    }

    .btnFnsh{
        margin-left: 88px;
        width: 30px;
        height: 30px;
        background: #00A115;
        border-radius: 8px;
        font-size: 14px;
        border: none;
        cursor: pointer;
        outline: none;
    }

    .icon-fnsh{
        padding-top: 3px;
        color: #FFFFFF;
    }
`

export default Home;    