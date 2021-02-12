import React from 'react';
import { FiXCircle } from 'react-icons/fi';

import Button from '../Button';
import { Container, Content, Header, Main, Footer } from './style';

interface ModalContainerProps {
  id?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
  titulo?: string;
  mensagem?: any;
  show: boolean;
  actionButtons?: boolean;
}

const Modal: React.FC<ModalContainerProps> = ({
  id = 'modal',
  show,
  titulo,
  mensagem,
  onConfirm,
  onCancel = () => {},
  children,
  actionButtons,
}) => {
  const handleOutsideClick = (e: any) => {
    if (e.target.id === id) onCancel();
  };

  return (
    <>
      {show ? (
        <Container id={id} onClick={handleOutsideClick}>
          <Content>
            <Header>
              <div>
                <button onClick={onCancel} type="button">
                  <FiXCircle size={22} />
                </button>
              </div>
            </Header>
            <Main>
              <div>
                <h1>{titulo ? titulo : ''}</h1>
              </div>
              <div>
                <p>{mensagem ? mensagem : ''}</p>
                {children}
              </div>
            </Main>
            {actionButtons ? (
              <Footer>
                <Button
                  variant="solid-button"
                  style={{ width: '200px', marginTop: '1rem' }}
                  type="submit"
                  text="Confirmar"
                  onClick={onConfirm}
                />
                <Button
                  variant="outline-button"
                  style={{ marginTop: '1rem' }}
                  type="submit"
                  text="Cancelar"
                  onClick={onCancel}
                  rippleColor="#166649"
                />
              </Footer>
            ) : null}
          </Content>
        </Container>
      ) : null}
    </>
  );
};

export default Modal;
