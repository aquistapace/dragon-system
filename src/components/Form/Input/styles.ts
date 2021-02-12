import styled, { css } from 'styled-components';

interface IGProps {
  type?: string;
  isFocused: boolean;
  isFilled: boolean;
  hasValueInProps: boolean;
  hasError: boolean;
}

interface ErrorMessageProps {
  hasError: boolean;
  isHovered: boolean;
}

export const InputContainer = styled.div`
  display: block;
  margin: 1rem 0rem;

  label {
    display: block;
    width: 100%;
    min-height: 16px;
    font-size: 14px;
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

export const InputGroup = styled.div<IGProps>`
  position: relative;
  flex: 1 1 0%;
  border: 1px solid;
  border-color: #c4c4c4;
  border-radius: 0.2rem;
  transition: 0.3s ease-in;

  input {
    width: 100%;
    height: 48px;
    font-size: 16px;
    background: #fff;
    color: ${props => props.theme.textColor};
    padding: 0px 1em;
    border-radius: 5px;
  }

  ${props =>
    props.isFocused &&
    css`
      border-color: ${props => props.theme.primaryColor};
    `}

  ${props =>
    props.hasError &&
    css`
      border-color: ${props => props.theme.error};
    `}
`;

export const ToggleView = styled.button`
  background: transparent;
  border: 0;
  width: 24px;
  height: 24px;
  margin-right: 1rem;
  margin-top: 2px;

  svg {
    color: #c4c4c4;
  }
`;

export const ErrorMessage = styled.div<ErrorMessageProps>`
  position: relative;
  display: block;
  height: fit-content !important;
  background: transparent !important;
  margin-top: 0.4rem;
  transition: 0.3s ease-in-out;

  div {
    display: block;
    color: ${props => props.theme.error};
    font-style: italic;
    font-size: 0.75rem;
    text-transform: capitalize;
  }
`;
