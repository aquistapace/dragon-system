import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  max-width: 1440px;
  height: 100%;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  box-sizing: border-box;
  @media (max-width: 876px) {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
  }
`;

export const ContainerLeft = styled.div`
  display: flex;
  width: 55%;
  height: 600px;
  background-color: #1a1a1aff;
  justify-content: center;
  align-items: center;
  height: 100vh;
  @media (max-width: 876px) {
    display: none;
  }
`;

export const ContainerRight = styled.div`
  display: flex;
  width: 45%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
  span {
    font-size: 30px;
    font-weight: bold;
    color: ${props => props.theme.secondaryColor};
  }
  hr {
    width: 150px;
    margin-top: 0.5rem;
    margin-bottom: 2rem;
    border: 2px solid ${props => props.theme.secondaryColor};
    background-color: ${props => props.theme.secondaryColor};
    border-radius: 2px;
  }
  @media (max-width: 876px) {
    width: 100%;
  }
`;

export const ContainerImage = styled.div`
  display: flex;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 360px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px 15px;
`;

export const FormContainer = styled.div`
  margin: 0rem 0rem 2rem;
  span {
    font-size: 12px;
    color: ${props => props.theme.error};
  }
`;

export const FormFooter = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
