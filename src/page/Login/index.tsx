import React, { useRef, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { isAuthenticated, login } from '../../services/auth';
import Dragao from './../../assets/dragao.png';
import Button from './../../components/Button';
import Input from './../../components/Form/Input';
import { Meta } from './../../components/Meta';
import type { User } from './../../interfaces/users';
import {
  Container,
  ContainerLeft,
  ContainerRight,
  ContainerImage,
  Content,
  FormContainer,
  FormFooter,
} from './style';

const users: User[] = [
  {
    name: 'Joao da Silva',
    email: 'user@email.com.br',
    password: '12345678',
  },
  {
    name: 'Maria dos Santos',
    email: 'maria@email.com.br',
    password: '87654321',
  },
];

const LoginPage: React.FC = () => {
  const formRef = useRef<FormHandles | null>(null);
  let history = useHistory();

  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (isAuthenticated()) {
      history.push('/listar-dragoes');
    }
  }, []);

  const handleSubmit = (data: any) => {
    let logedUser = users.find((item: User) => {
      return item.email === data.email && item.password === data.password;
    });
    if (logedUser) {
      login(logedUser.name);
      history.push('/listar-dragoes');
    } else {
      setIsValid(true);
    }
  };

  return (
    <>
      <Meta title="Login" />
      <Container>
        <ContainerLeft>
          <ContainerImage>
            <img
              src={Dragao}
              alt="Logo Dragao"
              width={'200px'}
              height={'200px'}
            />
          </ContainerImage>
        </ContainerLeft>

        <ContainerRight>
          <span>Dragon System</span>
          <hr />
          <Content>
            <h1>Login</h1>
            <FormContainer>
              <Form
                className="form-container"
                ref={formRef}
                onSubmit={handleSubmit}
              >
                <Input name="email" label="E-mail" type="text" />
                <Input name="password" label="Senha" type="password" />
                {isValid ? <span>E-mail ou Senha inválidos.</span> : ''}

                <FormFooter>
                  <Button
                    variant="solid-button"
                    style={{ marginTop: '1rem', width: '100%' }}
                    type="submit"
                    text="Login"
                  />
                </FormFooter>
              </Form>
            </FormContainer>
          </Content>
        </ContainerRight>
      </Container>
    </>
  );
};

export default LoginPage;
