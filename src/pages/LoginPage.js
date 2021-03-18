import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import storeContext from '../components/contexts/Context'
import {useHistory} from 'react-router-dom'
import logo from '../assets/logo.png';
import GlobalStyle from '../styles/globalStyles';

function initialState() {
  return { user: "", password: ""};
}

function login({user, password}){
  if(user === 'admin@admin.com' && password === 'admin'){
    return {token: '1234'}
  }
  return{Error: 'Usuário ou senha inválidos!'}
}


const LoginPage = () => {

  const [values, setValues] = useState(initialState);
  const { setToken } = useContext(storeContext);
  const history = useHistory();

  function onChange(event) {
    const { value, name } = event.target;

    setValues({
      ...values,
      [name]: value
    });
  }

  function onSubmit(event){

    event.preventDefault();

    const { token } = login(values);

    if (token){
      setToken(token);
      return history.push('/')
    } 

    setValues(initialState);

  }

  return (
    <>
    <PageContainer>
      <LoginCard>
         <LoginLogoWrapper>
        <img src={ logo } alt="logo"/>
         </LoginLogoWrapper>
         <Form onSubmit = {onSubmit} >
          <p>Acesse sua conta</p>
          <input type="text" name="user" placeholder="E-mail" onChange={onChange} value={values.user}/>
          <input type="password" name="password" placeholder="Senha" onChange={onChange} value={values.password}/>
          <button>Entrar</button>
        </Form>
      </LoginCard>
    </PageContainer>
    <GlobalStyle/>
    </>
  );
};

const LoginCard = styled.div`
  position: relative;
  width: 600px;
  height: 700px;
  left: 420px;
  top: 162px;
  background: #FFFFFF;
  border-radius: 8px;
`
const LoginLogoWrapper = styled.div`

img {
  position: absolute;
  display: block;
  height: 93px;
  width: 93px;
  top: 40px;
  right: 263px;
  bottom: 567px;
  left: 244px;
}

`
const Form = styled.form`

  position: absolute;
  top: 199px;
  right: 49px;
  left: 50px;
  bottom: 217px;
  width: 500px;

p{
  font-family: Solomon Bold;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  color: #333333;
}

input{
    width: 500px;
    height: 60px;
    left: 470px;
    top: 405px;
    background: #F2F2F2;
    border-radius: 8px;
    margin-top: 15px;
    font-family: Solomon Normal;
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 22px;
    color: #000000;
    border: none;
    outline: none;
}

input::placeholder{
  font-family: Solomon Light;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 22px;
  color: #000000;
}

button{
  font-family: Solomon Black;
  font-style: normal;
  font-size: 24px;
  color: #FFFFFF;
  line-height: 29px;
  background: #ED1651;
  border-radius: 8px;
  width: 508px;
  height: 70px;
  left: 471px;
  top: 575px;
  margin-top: 35px;
  border: none;
  cursor: pointer
}

`
const PageContainer = styled.div`
  background: #FFFFFF;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`


export default LoginPage; 