import React, {
  useCallback,
  useRef,
  useState,
  useEffect,
  ChangeEvent,
} from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import Button from '../../components/Button';
import Footer from '../../components/Footer';
import Input from '../../components/Form/Input';
import Header from '../../components/Header';
import { Meta } from '../../components/Meta';
import api from '../../services/api';
import getValidationErrors from '../../utils/getValidationErrors';
import { useToast } from '../../utils/toast';
import { ReactComponent as Back } from './../../assets/arrow_left.svg';
import type { DragonData } from './../../interfaces/dragon';
import { Container, FormContainer, FormFooter, TitlePage } from './styles';

interface ParamsProps {
  id: string;
}

const EditDragon: React.FC = () => {
  const { addToast } = useToast();
  const formRef = useRef<FormHandles | null>(null);
  const history = useHistory();
  const { id } = useParams<ParamsProps>();
  const [data, setData] = useState<DragonData>({
    id: '',
    name: '',
    type: '',
    createdAt: '',
  });

  useEffect(() => {
    if (id !== undefined) {
      findDragon(id);
    }
  }, [id]);

  function updateValue(e: ChangeEvent<HTMLInputElement>) {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  }

  const handleSubmit = useCallback(
    async (dragon: DragonData) => {
      try {
        const schema = Yup.object().shape({
          name: Yup.string()
            .max(50, 'No máximo 50 caracteres')
            .required('Este campo é obrigatório!'),
          type: Yup.string()
            .max(50, 'No máximo 50 caracteres')
            .required('Este campo é obrigatório!'),
        });

        await schema.validate(dragon, {
          abortEarly: false,
        });

        if (id !== undefined) {
          await api.put(`/dragon/${id}`, dragon);
          addToast({
            type: 'success',
            title: 'Dragão Editado com sucesso!',
            description: 'As informações do Dragão foram alteradas.',
          });
        } else {
          await api.post('/dragon', dragon);
        }
        setTimeout(() => {
          history.push('/listar-dragoes');
        }, 3000);
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
    [addToast, history, id],
  );

  async function findDragon(id: string) {
    const response = await api.get<DragonData>(`/dragon/${id}`);
    setData({
      id: id,
      name: response.data.name,
      type: response.data.type,
      createdAt: response.data.createdAt,
    });
  }

  return (
    <>
      <Meta title="Editar Dragão" />
      <Header />
      <Container>
        <FormContainer>
          <TitlePage>
            <h1>Editar Dragão</h1>
            <hr />
          </TitlePage>
          <Form onSubmit={handleSubmit} ref={formRef}>
            <Input
              type="text"
              label="Nome"
              name="name"
              value={data.name}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updateValue(e)}
            ></Input>

            <Input
              type="text"
              label="Tipo"
              name="type"
              value={data.type}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updateValue(e)}
            ></Input>
            <FormFooter>
              <Button
                color={'#ccccccef'}
                variant="icon-button"
                onClick={() => history.push(`/listar-dragoes`)}
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

export default EditDragon;
