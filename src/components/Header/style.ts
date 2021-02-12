import styled from 'styled-components';

export const HeaderPage = styled.header`
  background: ${props => props.theme.background};
`;

export const Container = styled.div`
  position: relative;
  max-width: 1080px;
  width: 75%;
  height: 100%;
  padding: 1.5rem 1.5rem;
  margin: 0 auto 28px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 992px) {
    width: 100%;
  }
`;

export const LogoHeader = styled.div`
  img {
    width: 60px;
  }
`;

export const ContentHeader = styled.div`
  display: flex;
  font-size: 18px;
  vertical-align: center;
  font-weight: 500;

  span {
    margin-right: 30px;
    border-bottom: 2px solid ${props => props.theme.secondaryColor};
    color: ${props => props.theme.textColor};
  }
  svg {
    color: ${props => props.theme.textColor};
    &:hover {
      color: ${props => props.theme.secondaryColor};
    }
  }

  button {
    background: none;
  }
`;
