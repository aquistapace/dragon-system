import styled from 'styled-components';

export const FooterPage = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  background: ${props => props.theme.lightGrey};
  color: ${props => props.theme.textColor};
`;

export const Content = styled.div`
  padding: 1rem;
  margin: 0 auto;
`;
