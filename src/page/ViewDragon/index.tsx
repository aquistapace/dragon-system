import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import Button from '../../components/Button';
import { Meta } from '../../components/Meta';
import api from '../../services/api';
import { ReactComponent as Back } from './../../assets/arrow_left.svg';
import DragonPerfil from './../../assets/dragao_black.png';
import Footer from './../../components/Footer';
import Header from './../../components/Header';
import Loading from './../../components/Loader';
import type { DragonData } from './../../interfaces/dragon';
import {
  Container,
  ContentContainer,
  ContentMain,
  ContentFooter,
  TitlePage,
} from './styles';

interface ParamsProps {
  id: string;
}

const Editar: React.FC = () => {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(true);

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

  async function findDragon(id: string) {
    setIsLoading(true);
    const response = await api.get<DragonData>(`/dragon/${id}`);
    setData({
      id: id,
      name: response.data.name,
      type: response.data.type,
      createdAt: response.data.createdAt,
    });
    setIsLoading(false);
  }

  function formatDate(data: string) {
    console.log(data);
    if (!data) {
      return 'N/D';
    }
    let dateLocal = new Date(data);
    return (
      dateLocal.toLocaleDateString() + ' ' + dateLocal.toLocaleTimeString()
    );
  }

  return (
    <>
      <Meta title="Perfil do Dragão" />
      <Header />
      <Container>
        <TitlePage>
          <h1>Perfil do Dragão</h1>
          <hr />
        </TitlePage>
        <ContentContainer>
          {isLoading ? (
            <Loading />
          ) : (
            <ContentMain>
              <img src={DragonPerfil} />
              <ul>
                <li>
                  <span>Nome do Dragão :</span>
                  {data.name}
                </li>
                <li>
                  <span>Tipo do Dragão: </span>
                  {data.type}
                </li>
                <li>
                  <span>Data de Criação : </span>
                  {formatDate(data.createdAt)}
                </li>
              </ul>
            </ContentMain>
          )}

          <ContentFooter>
            <Button
              color={'#ccccccef'}
              variant="icon-button"
              onClick={() => history.push(`/listar-dragoes`)}
            >
              <Back style={{ width: '28px', color: '#999999ef' }} />
            </Button>
          </ContentFooter>
        </ContentContainer>
      </Container>
      <Footer />
    </>
  );
};

export default Editar;
