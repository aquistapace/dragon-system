import styled, { keyframes } from 'styled-components';

export const PagePosition = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 50%;
  left: 50%;
  right: 0;
  bottom: 0;
  transform: translate(-50%, -50%);
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: saturate(100%) blur(3px);
  z-index: 9999999;
  overflow: hidden;
`;

export const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const animator = keyframes`
  100% { transform: rotate(360deg); }
`;

const animatorDot = keyframes`
  80%, 100% { transform: rotate(360deg); }
`;

const animatorDotBefore = keyframes`
  50% {
    transform: scale(0.4);
  } 100%, 0% {
    transform: scale(1.0);
  }
`;

export const Spinner = styled.div`
  width: 90px;
  height: 90px;
  position: relative;
  animation: ${animator} 2.5s infinite linear both;

  div {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    animation: ${animatorDot} 2s infinite ease-in-out both;

    :before {
      content: '';
      display: block;
      width: 25%;
      height: 25%;
      background-color: ${props => props.theme.primaryColor};
      border-radius: 100%;
      animation: ${animatorDotBefore} 2s infinite ease-in-out both;
    }

    :nth-child(1) {
      animation-delay: -1.1s;
    }
    :nth-child(2) {
      animation-delay: -1s;
    }
    :nth-child(3) {
      animation-delay: -0.9s;
    }
    :nth-child(4) {
      animation-delay: -0.8s;
    }
    :nth-child(5) {
      animation-delay: -0.7s;
    }
    :nth-child(6) {
      animation-delay: -0.6s;
    }
    :nth-child(1):before {
      animation-delay: -1.1s;
    }
    :nth-child(2):before {
      animation-delay: -1s;
    }
    :nth-child(3):before {
      animation-delay: -0.9s;
    }
    :nth-child(4):before {
      animation-delay: -0.8s;
    }
    :nth-child(5):before {
      animation-delay: -0.7s;
    }
    :nth-child(6):before {
      animation-delay: -0.6s;
    }
  }
`;
