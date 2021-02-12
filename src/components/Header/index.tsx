import React from 'react';
import { MdExitToApp } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import { isAuthenticated, logout, userLoged } from '../../services/auth';
import Dragao from './../../assets/dragao.png';
import { HeaderPage, Container, LogoHeader, ContentHeader } from './style';

const Header: React.FC = () => {
  let history = useHistory();
  const handleSubmit = () => {
    if (isAuthenticated()) {
      logout();
      history.push('/');
    }
  };

  return (
    <HeaderPage>
      <Container>
        <LogoHeader>
          <img src={Dragao} />
        </LogoHeader>
        <ContentHeader>
          <span>Olá , {userLoged()}</span>
          <button onClick={() => handleSubmit()}>
            <Link to="/">
              <MdExitToApp size={25} />
            </Link>
          </button>
        </ContentHeader>
      </Container>
    </HeaderPage>
  );
};

export default Header;
