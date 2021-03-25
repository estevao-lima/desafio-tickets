import React, { useState } from 'react'
import styled from 'styled-components'
import GlobalStyle from '../styles/globalStyles'
import { FiAlertTriangle } from 'react-icons/fi'
import EditTicketModal from './EditTicketModal'


const Background = styled.div`
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background: rgba(64, 64, 64, 0.8);
    border-radius: 8px;
    z-index: 100;

`

const ModalWindow = styled.div`
    position: absolute;
    width: 600px;
    height: 406px;
    left: 420px; 
    top: 170px;

    background: #FFFFFF;
    border-radius: 8px;

    .icon{
        position: relative;
        top: 40px;
        left: 243px;
        width: 99px;
        height: 86px;
        color: #FF4444;
    }

    .bold{
        position: relative;

        width: 467px;
        height: 28px;

        top: 40px;
        left: 66px;

        font-family: Roboto Bold;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 28px;
        color: #000000;
    }

    .light{
        position: relative;

        width: 451px;
        height: 42px;

        left: 73px;
        top: 30px;

        font-family: Roboto-Regular;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 21px;
        text-align: center;

        color: #333333
    }

    .back{
        position: relative;
        width: 203px;
        height: 60px;
        background: #A0A0A0;
        border-radius: 8px;

        left: 50px;
        top: 60px;
        margin-right: 94px;

        font-family: Roboto-Regular;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 21px;
        color: #FFFFFF;
        cursor: pointer;
        outline: none;
        border: none;
    }

    .forward{
        position: relative;

        width: 203px;
        height: 60px;
        background: #FF4444;
        border-radius: 8px;

        left: 50px;
        top: 60px;
        margin-right: 94px;

        font-family: Roboto-Regular;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 21px;
        color: #FFFFFF;
        cursor: pointer;
        outline: none;
        border: none;
    }
`


const EraseTicketModal = ()  => {
    
    return(
            <Background>
                <ModalWindow>
                    <FiAlertTriangle className="icon"/>
                    <p className="bold">Tem certeza que deseja excluir este ticket?</p>
                    <p className="light">Uma vez excluído, você não poderá mais ver ou solicitar este ticket</p>
                    <button className="back"> Não, desejo voltar</button>
                    <button className="forward">Sim, desejo excluir</button>
                </ModalWindow>
            </Background>
)}

export default EraseTicketModal;