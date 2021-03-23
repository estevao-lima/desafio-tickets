import React, { useState } from 'react'
import styled from 'styled-components'
import GlobalStyle from '../styles/globalStyles'
import { FiTrash2, FiArrowLeft, FiUploadCloud, FiFileText, FiImage} from 'react-icons/fi'


const Background = styled.div`
    width: 980px;
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
const ModalWrapper = styled.div`

    .ticketTitle{
        margin-left: 40px;
        padding-top: 143px;
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
const TicketFiles = styled.div`
    position: absolute;

    width: 230px;
    height: 813px;
    left: 1010px;
    top: 0px;

    background: #FFFFFF;
    border-radius: 8px;

    p:first-child{  
        padding-top: 30px;
        padding-left: 31px;
        font-family: Solomon Black;
        font-style: normal;
        font-weight: 900;
        font-size: 24px;
        line-height: 29px;
    }

    ol{
        list-style: none;
    }

    .caption{
        margin: 0;
        padding: 0;

        font-family: Roboto Light;
        font-style: normal;
        font-weight: 300;
        font-size: 14px;
        line-height: 16px;
        width: 77px;
        height: 16px;

        color: #ED1651;
    }

    .icons{
        width: 36px;
        height: 45px;
        border: 2px solid #FFFFFF;
    }
`

const EditTicketModal = ({appearModal, setAppearModal}) => {


    return (
    <>
        {appearModal ? (
            <Background>
                    <ModalWrapper>
                        <TicketHeader>
                            <p className="editTitle">Editar Ticket #5079</p>
                            <p className="statusView">Em andamento</p>
                            <button className="excludeBtn">Excluir Ticket<FiTrash2 className="icon"/></button>
                            <button className="extBtn" onClick={() => setAppearModal(prev => !prev)}><FiArrowLeft className="backIcon"/></button>
                        </TicketHeader>
                        <form>
                            <p className="ticketTitle">Título</p>
                            <input type="text" name="ticketInput" placeholder="Escreva uma breve descrição sobre o problema" className="titleInput"/>

                            <p className="dscptTitle">Descrição</p>
                            <textarea type="text" name="dscpInput" placeholder="Escreva detalhadamente a sua solicitação..." className="dscpInput"/>

                            <p className="anex">Anexos</p>
                            <p className="anexDscp">Envie-nos arquivos, imagens ou textos que possam contribuir para a verificação da solicitação</p>
                        <Anex>
                            <FiUploadCloud className="anexCloud"></FiUploadCloud>
                            <p>Arraste e solte arquivos aqui ou</p>
                            <button>Selecione aqui</button>
                        </Anex>
                            <button className="addTkt">Salvar</button>
                        </form>
                    </ModalWrapper>
                    <TicketFiles>
                        <p>Anexos</p>
                    <ol>
                        <li><FiFileText  className="icons"/><p className="caption">somefile.pdf</p></li>
                        <li><FiFileText className="icons"/><p className="caption">somefile.pdf</p></li>
                        <li><FiImage className="icons"/><p className="caption">image.jpg</p></li>
                    </ol>
                    </TicketFiles>
                <GlobalStyle/>
            </Background>
        ): null}
    </>
    )
}

export default EditTicketModal;