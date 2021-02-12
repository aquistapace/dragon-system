import styled, { keyframes } from 'styled-components';

const modalAnim = keyframes`
  0% {
    visibility: hidden;
    opacity: 0;
  }
  100% {
    visibility: visible;
    opacity: 1;
  }
`;

const modalEnter = keyframes`
  0% {
    visibility: hidden;
    opacity: 0;
    transform: translateY(50px);
  }
  100% {
    visibility: visible;
    opacity: 1;
    transform: translateY(0px);
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
  transition: all 1.3s ease-in-out;
  animation: ${modalAnim} 0.3s ease-in-out;
`;

export const Content = styled.div`
  max-height: 70%;
  overflow: auto;
  min-width: 450px;
  max-width: 50%;
  background: ${props => props.theme.background};
  padding: 1.25rem;
  border-radius: 0.3rem;
  z-index: 10;
  animation: ${modalEnter} 0.3s ease-in-out;

  @media (max-width: 768px) {
    min-width: unset;
    width: 95%;
    max-width: 95%;
  }
`;

export const Header = styled.div`
  text-transform: uppercase;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  align-self: center;
  color: ${props => props.theme.primaryColor};

  button {
    background: ${props => props.theme.background};
    color: #ccc;
    transition: 0.3s ease-in-out;

    &:hover {
      color: ${props => props.theme.textColor};
    }
  }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  color: ${props => props.theme.textColor};
  font-size: 1.25em;
  margin: 0.9rem;

  h1 {
    font-size: 1.3em;
    font-weight: bold;
    color: ${props => props.theme.textColor};
    margin-bottom: 1.5rem;
    text-align: left;
  }

  @media (max-width: 768px) {
    font-size: 1em;
    margin: 0rem;
  }
`;

export const Footer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    margin-left: 0.6rem;
  }

  @media (max-width: 768px) {
    button:last-child {
      margin-left: 0.6rem;
    }
  }
`;
