import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  max-width: 960px;
  margin-right: auto;
  margin-left: auto;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
`;

export const FormContainer = styled.div`
  margin: 2rem 0rem;
`;

export const FormFooter = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
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

export const InputContainer = styled.div`
  display: block;
  margin: 1rem 0rem;

  label {
    display: block;
    width: 100%;
    min-height: 1em;
    font-size: 0.9rem;
    color: rgb(135, 134, 139);
    margin-bottom: 8px;
  }

  > div {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    background: #fff;
  }
`;

export const InputGroup = styled.div`
  position: relative;
  flex: 1 1 0%;
  border: 1px solid;
  border-color: #c4c4c4;
  border-radius: 0.2rem;
  transition: 0.3s ease-in;

  input {
    width: 100%;
    height: 60px;
    font-size: 1em;
    background: ${props => props.theme.background};
    color: ${props => props.theme.textColor};
    padding: 0px 1em;
    border-radius: 0.3rem;
  }
`;
