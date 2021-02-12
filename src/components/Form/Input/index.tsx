import React, {
  InputHTMLAttributes,
  useState,
  useRef,
  useEffect,
  useCallback,
} from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';

import { useField } from '@unform/core';

import { ToggleView, ErrorMessage, InputContainer, InputGroup } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
}

const Input: React.FC<InputProps> = ({
  label,
  type,
  name,
  defaultValue: propDefaultValue,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const { fieldName, error, defaultValue, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
    setIsFilled(!!inputRef.current?.value);
  }, [fieldName, registerField]);

  const handleHoverInput = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleStopHoveringInput = useCallback(() => {
    setIsHovered(false);
  }, []);

  const handleToggleView = useCallback(() => {
    setIsVisible(state => !state);
  }, []);

  return (
    <>
      <InputContainer>
        <label>{label}</label>
        <InputGroup
          onMouseOver={handleHoverInput}
          onMouseLeave={handleStopHoveringInput}
          type={type}
          isFilled={isFilled}
          isFocused={isFocused}
          hasError={!!error}
          hasValueInProps={!!propDefaultValue}
        >
          <input
            id={name}
            ref={inputRef}
            defaultValue={propDefaultValue || defaultValue}
            name={name}
            type={
              type === 'password'
                ? isVisible
                  ? 'text'
                  : 'password'
                : type || 'text'
            }
            {...rest}
          />
          {type === 'password' && (
            <ToggleView type="button" onClick={handleToggleView}>
              {isVisible ? <FiEye size={18} /> : <FiEyeOff size={18} />}
            </ToggleView>
          )}
        </InputGroup>
        <ErrorMessage hasError={!!error} isHovered={isHovered}>
          <div>{error}</div>
        </ErrorMessage>
      </InputContainer>
    </>
  );
};

export default Input;
