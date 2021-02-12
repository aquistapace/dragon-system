import React, { useCallback, useRef } from 'react';
import { useHistory } from 'react-router-dom';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import getValidationErrors from '../../utils/getValidationErrors';
import { useToast } from '../../utils/toast';
import { ReactComponent as Back } from './../../assets/arrow_left.svg';
import Button from './../../components/Button';
import Footer from './../../components/Footer';
import Input from './../../components/Form/Input';
import Header from './../../components/Header';
import { Meta } from './../../components/Meta';
import type { DragonData } from './../../interfaces/dragon';
import api from './../../services/api';
import { Container, FormContainer, FormFooter, TitlePage } from './style';

const AddDragon: React.FC = () => {
  const formRef = useRef<FormHandles | null>(null);
  const history = useHistory();
  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: DragonData) => {
      try {
        const schema = Yup.object().shape({
          id: Yup.string().max(25, 'No máximo 25 caracteres'),
          name: Yup.string()
            .max(50, 'No máximo 50 caracteres')
            .required('Este campo é obrigatório!'),
          type: Yup.string()
            .max(50, 'No máximo 50 caracteres')
            .required('Este campo é obrigatório!'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/dragon', data);
        addToast({
          type: 'success',
          title: 'Dragão Cadastrado com sucesso!',
          description: 'As informações do Dragão foram salvas no sistema.',
        });
        setTimeout(() => {
          history.push('/listar-dragoes');
        }, 4000);
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errorMessages = getValidationErrors(err);
          formRef.current?.setErrors(errorMessages);
          return;
        } else {
          console.error(err);
          addToast({
            type: 'error',
            title: 'Esse Dragão já está cadastrado!',
            description:
              'As informações que foram inseridas, já estão presentes no sistema.',
          });
        }
      }
    },
    [addToast, history],
  );

  return (
    <>
      <Meta title="Cadastro de Dragões" />
      <Header />
      <Container>
        <FormContainer>
          <TitlePage>
            <h1>Cadastrar Dragão</h1>
            <hr />
          </TitlePage>
          <Form
            className="form-container"
            ref={formRef}
            onSubmit={handleSubmit}
          >
            <Input name="name" label="Nome" type="text" />
            <Input name="type" label="Tipo" type="text" />

            <FormFooter>
              <Button
                color={'#ccccccef'}
                variant="icon-button"
                onClick={() => history.push(`/listar-dragoes/`)}
              >
                <Back style={{ width: '28px', color: '#999999ef' }} />
              </Button>
              <Button
                variant="solid-button"
                style={{ marginTop: '1rem' }}
                type="submit"
                text="Salvar"
              />
            </FormFooter>
          </Form>
        </FormContainer>
      </Container>
      <Footer />
    </>
  );
};

export default AddDragon;
