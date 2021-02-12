import React, { ButtonHTMLAttributes } from 'react';

import {
  ButtonBase,
  ButtonBaseIcon,
  ButtonBaseOutline,
  ButtonBaseIconOutline,
} from './style';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: any;
  variant: string;
  color?: string;
  children?: React.ReactNode;
  onClick?: any;
  [key: string]: any;
}

const Button = ({
  text,
  variant,
  children,
  onClick,
  color,
  disabled,
  ...rest
}: ButtonProps) => {
  return (
    <>
      {variant === 'icon-button' && (
        <ButtonBaseIcon
          color={color}
          tabIndex={disabled ? -1 : 0}
          disabled={disabled}
          aria-disabled={disabled ? 'true' : 'false'}
          onClick={onClick}
          {...rest}
        >
          <div>{children}</div>
        </ButtonBaseIcon>
      )}
      {variant === 'icon-outline-button' && (
        <ButtonBaseIconOutline
          color={color}
          tabIndex={disabled ? -1 : 0}
          disabled={disabled}
          aria-disabled={disabled ? 'true' : 'false'}
          onClick={onClick}
          {...rest}
        >
          <div>{children}</div>
        </ButtonBaseIconOutline>
      )}
      {variant === 'solid-button' && (
        <ButtonBase
          color={color}
          onClick={onClick}
          tabIndex={disabled ? -1 : 0}
          disabled={disabled}
          aria-disabled={disabled ? 'true' : 'false'}
          {...rest}
        >
          {text}
        </ButtonBase>
      )}
      {variant === 'outline-button' && (
        <ButtonBaseOutline
          color={color}
          onClick={onClick}
          tabIndex={disabled ? -1 : 0}
          disabled={disabled}
          aria-disabled={disabled ? 'true' : 'false'}
          {...rest}
        >
          {text}
        </ButtonBaseOutline>
      )}
    </>
  );
};

export default Button;
