import React, { useState } from 'react'
import styled from 'styled-components'
import GlobalStyle from '../styles/globalStyles'
import { FiTrash2, FiArrowLeft } from 'react-icons/fi'


const Background = styled.div`
    width: 1240px;
    height: 910px;
    position: absolute;
    z-index: 1;
    background: #FFFFFF;
`
const TicketHeader = styled.div`
    position: absolute;

    .editTitle{
        display: inline-block;
        width: 205px;
        height: 29px;

        font-family: Solomon Black;
        font-style: normal;
        font-weight: 900;
        font-size: 24px;

        line-height: 29px;

        margin-left: 40px;
        margin-top: 40px;
    }

    .statusView{
        display: inline-block;

        width: 167px;
        height: 29px;
        padding-left: 163px;
        font-family: Solomon Black;
        font-style: normal;
        font-weight: 900;
        font-size: 24px;
        line-height: 29px;
        color: #FFBB33;
    }
   
    .excludeBtn{
        display: inline-block;
        margin-left: 73px;
        width: 194px;
        height: 50px;
        background: #ED1651;
        border-radius: 8px;

        font-family: Solomon Black;
        font-style: normal;
        font-weight: 900;
        font-size: 18px;
        line-height: 22px;

        color: #FFFFFF;

        border: none;
        cursor: pointer;
        outline: none;
        
    }

    .icon{
       margin-left: 15px;
       vertical-align: top;
       width: 18px;
       height: 20px;
    }

    .extBtn{
        display: inline-block;

        width: 50px;
        height: 50px;

        font-size: 18px;
        line-height: 22px;

        background: #ED1651;
        border-radius: 8px;

        margin-left: 50px;

        
        border: none;
        cursor: pointer;
        outline: none;
    }

    .backIcon{

        width: 20px;
        height: 20px;
        color: #FFFFFF;
    }
`
const EditTicketModal = ({appearModal, setAppearModal}) => {


    return (
    <>
        {appearModal ? (
            <Background>
                <TicketHeader>
                    <p className="editTitle">Editar Ticket #5079</p>
                    <p className="statusView">Em andamento</p>
                    <button className="excludeBtn">Excluir Ticket<FiTrash2 className="icon"/></button>
                    <button className="extBtn" onClick={() => setAppearModal(prev => !prev)}><FiArrowLeft className="backIcon"/></button>
                    
                </TicketHeader>
            </Background>
        ): null}
    </>
    )
}

export default EditTicketModal;