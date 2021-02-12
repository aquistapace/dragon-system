import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 90%;
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
`;

export const FormContainer = styled.div`
  margin: 2rem 0rem;
`;

export const TitlePage = styled.div`
  margin: 0 auto;
  padding-right: 1.5rem;
  color: ${props => props.theme.secondaryColor};

  hr {
    margin-top: 0.5rem;
    width: 30%;
    border: 2px solid ${props => props.theme.secondaryColor};
    background-color: ${props => props.theme.secondaryColor};
    border-radius: 2px;
  }
`;

export const FormFooter = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
