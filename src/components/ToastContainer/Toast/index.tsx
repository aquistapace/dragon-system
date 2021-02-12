import React, { useEffect } from 'react';
import {
  FiAlertCircle,
  FiCheckCircle,
  FiInfo,
  FiXCircle,
} from 'react-icons/fi';

import { ToastMessage, useToast } from '../../../utils/toast';
import { Container } from './styles';

interface ToastProps {
  toast: ToastMessage;
  style: object;
}

const icons = {
  info: <FiInfo size={24} />,
  error: <FiAlertCircle size={24} />,
  success: <FiCheckCircle size={24} />,
};

const Toast: React.FC<ToastProps> = ({ toast, style }) => {
  const { removeToast } = useToast();

  useEffect(() => {
    if (toast.type === 'success') {
      new Audio(`${process.env.PUBLIC_URL}/Assets/Audio/Success.mp3`).play();
    } else if (toast.type === 'error') {
      new Audio(`${process.env.PUBLIC_URL}/Assets/Audio/Error.mp3`).play();
    } else if (toast.type === 'info') {
      new Audio(`${process.env.PUBLIC_URL}/Assets/Audio/Error.mp3`).play();
    }
  }, [toast.type]);

  useEffect(() => {
    const timer = setTimeout(
      () => {
        removeToast(toast.id);
      },
      toast.time ? toast.time : 3500,
    );

    return () => {
      clearTimeout(timer);
    };
  }, [toast.time, removeToast, toast.id]);

  return (
    <Container
      style={style}
      type={toast.type}
      hasDescription={!!toast.description}
    >
      {icons[toast.type || 'info']}
      <div>
        <strong>{toast.title}</strong>
        {toast.description && <p>{toast.description}</p>}
      </div>
      <button onClick={() => removeToast(toast.id)} type="button">
        <FiXCircle size={18} />
      </button>
    </Container>
  );
};

export default Toast;
