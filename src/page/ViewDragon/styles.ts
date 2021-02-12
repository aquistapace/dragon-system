import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  max-width: 960px;
  margin-right: auto;
  margin-left: auto;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
`;

export const ContentContainer = styled.div`
  margin: 2rem 0rem;
  display: flex;
  align-items: start;
  flex-direction: column;
  justify-content: space-between;
`;

export const ContentMain = styled.div`
  margin: 2rem 0rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 440px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  img {
    width: 150px;
  }
  ul {
    display: flex;
    flex-direction: column;
    margin: 20px;
    font-size: 20px;
    flex-wrap: wrap;

    li {
      display: inline-block;
    }
    span {
      font-weight: bold;
    }
  }
`;

export const ContentFooter = styled.div`
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
