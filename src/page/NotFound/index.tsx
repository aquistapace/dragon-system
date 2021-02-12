import React from 'react';
import { useHistory } from 'react-router-dom';

import NotFound from '../../assets/not_found.png';
import Button from '../../components/Button';
import { Meta } from '../../components/Meta';
import { ErrorPage, Container } from './styles';

const PageNotExists: React.FC = () => {
  const history = useHistory();

  function handleRedirect() {
    history.push('/');
  }

  return (
    <>
      <Meta title="Página Não Encontrada" />
      <ErrorPage>
        <Container>
          <img src={NotFound} alt="" />
        </Container>
        <Container>
          <div>
            <span>Página Não Encontrada.</span>
          </div>
          <Button
            color={'#ff6600'}
            style={{ padding: '0.5rem 0' }}
            variant="solid-button"
            text="VOLTAR"
            onClick={handleRedirect}
          />
        </Container>
      </ErrorPage>
    </>
  );
};

export default PageNotExists;
