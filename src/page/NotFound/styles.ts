import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  max-width: 1312px;
  height: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-left: 24px;
  padding-right: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  div {
    margin-top: 15px;
    font-size: 20px;

    margin: 0 auto;
  }
  button {
    margin: 15px;
  }
`;

export const ErrorPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  min-height: calc(100vh - 32px);
  background: ${props => props.theme.background};
`;
