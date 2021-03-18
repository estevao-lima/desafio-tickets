import React from 'react'
import styled from 'styled-components'
import GlobalStyle from '../styles/globalStyles'
import { FiX, FiUploadCloud } from 'react-icons/fi'


const Background = styled.div`
    width: 980px;
    height: 910px;
    position: absolute;
    z-index: 1;
    background: #FFFFFF;
`
const ModalWrapper = styled.div`

    .ticketTitle{
        margin-left: 40px;
        margin-top: 74px;
        font-family: Roboto Bold;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 21px;

        color: #000000;
    }

    .titleInput{
        margin-left: 40px;
        margin-right: 40px;
        width: 900px;
        height: 60px;
        background: #F2F2F2;
        border-radius: 8px;
        border: none;
        outline: none;
    }

    .titleInput::placeholder{
        font-family: Roboto Light;
        padding-left: 30px;
        font-style: normal;
        font-weight: 300;
        font-size: 18px;
        line-height: 21px;
        color: #A0A0A0;
    }

    .dscptTitle{
        margin-top: 31px;
        margin-left: 40px;
        font-family: Roboto Bold;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 21px;

        color: #000000;
    }

    .dscpInput{
        width: 900px;
        height: 200px;
        margin-left: 40px;
        margin-right: 40px;
        background: #F2F2F2;
        border-radius: 8px;
        border: none;
        outline: none;
        resize: none;
    }

    .dscpInput::placeholder{
        position: absolute;
        padding-left: 30px;
        font-family: Roboto Light;
        font-style: normal;
        font-weight: 300;
        font-size: 18px;
        line-height: 21px;

        color: #A0A0A0;
    }

    .anex{
        margin-top: 31px;
        margin-left: 40px;
        font-family: Roboto Bold;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 21px;
        color: #000000;
    }

    .anexDscp{
        margin-left: 40px;
        font-family: Roboto Light;
        font-style: normal;
        font-weight: 300;
        font-size: 14px;
        line-height: 14px;
        color: #000000;
    }

    .addTkt{

        position: absolute;
        width: 900px;
        height: 60px;

        margin-left: 40px;
        margin-right: 40px;
        margin-top: 160px;
        
        background: #00A115;

        text-align: center;

        font-family: Solomon Black;
        font-style: normal;
        font-weight: 900;
        font-size: 18px;
        line-height: 22px;
        z-index: 10;


        cursor: pointer;
        color: #FFFFFF;
        border: none;
        outline: none;
    }

`
const ModalHeader = styled.div`
    .createNew{
        display: inline-block;
        margin-top: 40px;
        margin-left: 40px;
        font-family: Solomon Black;
        font-style: normal;
        font-weight: 900;
        font-size: 24px;
        line-height: 29px;
        color: #000000;
    }

    .closebtn{
    margin-top: 30px;
    margin-left: 666px;
    width: 50px;
    height: 50px;
    background: #ED1651;
    border-radius: 8px; 
    border: none;
    outline: none;
    cursor: pointer;
    }

    .icon{
        width: 30px;
        height: 30px;
        color: #FFFFFF;
        padding-top: 5px;
    } 
`
const Anex = styled.div`
    margin-left: 40px;
    margin-right: 40px; 
    position: absolute;
    width: 900px;
    height: 130px;
    background: #FFFFFF;
    border: 1px dashed #ED1651;
    box-sizing: border-box;
    border-radius: 8px;
    text-align: center;
    box-sizing: border-box;


    .anexCloud{
        margin-top: 18px;
        margin-left: 3px;
        height: 20px;
        width: 30px;
    }

    p{ 
        padding-left: 375px;
        width: 152px;
        height: 28px;
        font-family: Roboto Light;
        font-style: normal;
        font-weight: 300;
        font-size: 12px;
        line-height: 14px;
        color: #000000;
        margin: 10px 0 10px 0;
    }

    button{
        margin-left: 7px;
        text-align: center;
        width: 100px;
        height: 30px;

        background: #FFFFFF;
        border: 1px solid #ED1651;
        box-sizing: border-box;
        border-radius: 8px;
        outline: none;

        font-family: Roboto-Regular;
        font-style: normal;
        font-weight: bold;
        font-size: 12px;
        line-height: 14px;
        color: #ED1651;

        cursor: pointer;
    }
`

const CreateTicketModal = ({showModal, setShowModal}) => {
    return (
    <>
        {showModal ? (
            <Background showModal={showModal}>
                <ModalWrapper>
                    <ModalHeader>
                        <p className="createNew" >Criar Novo Ticket</p>
                        <button className="closebtn" onClick={() => setShowModal(prev => !prev)}><FiX className="icon"></FiX></button>
                    </ModalHeader>
                    <p className="ticketTitle">Título</p>
                    <input type="text" name="ticketInput" placeholder="Escreva uma breve descrição sobre o problema" className="titleInput"></input>

                    <p className="dscptTitle">Descrição</p>
                    <textarea type="text" name="dscpInput" placeholder="Escreva detalhadamente a sua solicitação..." className="dscpInput"></textarea>

                    <p className="anex">Anexos</p>
                    <p className="anexDscp">Envie-nos arquivos, imagens ou textos que possam contribuir para a verificação da solicitação</p>
                    <Anex>
                        <FiUploadCloud className="anexCloud"></FiUploadCloud>
                        <p>Arraste e solte arquivos aqui ou</p>
                        <button>Selecione aqui</button>
                    </Anex>
                    <button className="addTkt">Adicionar ticket</button>
                </ModalWrapper>
               <GlobalStyle/>
            </Background>
            
        ): null}
    </>
    )
}

export default CreateTicketModal;