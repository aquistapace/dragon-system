import { shade, transparentize } from 'polished';
import styled from 'styled-components';

interface ButtonProps {
  color?: string;
  rippleColor?: string;
  rippleDuration?: string;
}

export const ButtonBase = styled.button<ButtonProps>`
  position: relative;
  overflow: hidden;
  background: ${(props: ButtonProps) =>
    props.color ? `${props.color}` : '#000000'};
  color: #fff;
  border-radius: 0.2rem;
  min-width: 128px;
  padding: 0.7rem 1rem;
  font-size: 1rem;
  border: 1px solid transparent;
  font-weight: 400;
  line-height: 1.25;
  text-transform: uppercase;
  transition: 0.3s ease-in-out;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15),
    0 1px 1px rgba(0, 0, 0, 0.075);

  &:hover {
    background: ${(props: ButtonProps) =>
      props.color ? shade(0.2, `${props.color}`) : shade(0.2, '#000000')};
  }

  :disabled {
    background: #d9d9d9;
    color: rgba(102, 102, 102, 0.25);
    border: 0px solid transparent;
    cursor: not-allowed;

    &:hover {
      background: #d9d9d9;
    }
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.8rem 0.5rem;
    font-size: 12px;
  }
`;

export const ButtonBaseOutline = styled.button<ButtonProps>`
  position: relative;
  overflow: hidden;
  background: transparent;
  color: ${(props: ButtonProps) =>
    props.color ? `${props.color}` : '#000000'};
  border-radius: 0.2rem;
  min-width: 128px;
  padding: 0.7rem 1rem;
  font-size: 1rem;
  border: 1px solid
    ${(props: ButtonProps) => (props.color ? `${props.color}` : '#000000')};
  font-weight: 400;
  line-height: 1.25;
  text-transform: uppercase;
  transition: 0.3s ease-in-out;

  &:hover {
    background: ${(props: ButtonProps) =>
      props.color
        ? transparentize(0.9, `${props.color}`)
        : transparentize(0.9, '#000000')};
  }

  :disabled {
    background: #d9d9d9;
    color: rgba(102, 102, 102, 0.25);
    border: 0px solid transparent;
    cursor: not-allowed;

    &:hover {
      background: #d9d9d9;
    }
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.8rem 0.5rem;
    font-size: 12px;
  }
`;

export const ButtonBaseIcon = styled.button<ButtonProps>`
  position: relative;
  overflow: hidden;
  background: ${(props: ButtonProps) =>
    props.color ? `${props.color}` : '#000000'};
  color: #fff;
  padding: 0.75rem;
  border-radius: 0.2rem;
  font-size: 20px;
  transition: 0.3s ease-in-out;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15),
    0 1px 1px rgba(0, 0, 0, 0.075);

  :disabled {
    background: #d9d9d9;
    color: rgba(102, 102, 102, 0.25);
    border: 0px solid transparent;
    cursor: not-allowed;

    &:hover {
      background: #d9d9d9;
    }
  }

  &:hover {
    background: ${(props: ButtonProps) =>
      props.color ? shade(0.2, `${props.color}`) : shade(0.2, '#000000')};
  }

  div {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      width: 26px;
      fill: currentColor;
      stroke: currentColor;
    }
  }
`;

export const ButtonBaseIconOutline = styled.button<ButtonProps>`
  position: relative;
  overflow: hidden;
  background: transparent;
  color: ${(props: ButtonProps) =>
    props.color ? `${props.color}` : '#000000'};
  border: 1px solid
    ${(props: ButtonProps) => (props.color ? `${props.color}` : '#000000')};
  padding: 0.75rem;
  border-radius: 0.2rem;
  font-size: 20px;
  transition: 0.3s ease-in-out;

  :disabled {
    background: #d9d9d9;
    color: rgba(102, 102, 102, 0.25);
    border: 0px solid transparent;
    cursor: not-allowed;

    &:hover {
      background: #d9d9d9;
    }
  }

  &:hover {
    background: ${(props: ButtonProps) =>
      props.color
        ? transparentize(0.9, `${props.color}`)
        : transparentize(0.9, '#000000')};
  }

  div {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${(props: ButtonProps) =>
      props.color ? `${props.color}` : '#000000'};

    svg {
      width: 20px;
      fill: currentColor;
      stroke: currentColor;
    }
  }
`;

export const LoadingContainer = styled.div`
  margin: auto;
  width: fit-content;
  height: fit-content;
`;
