// Absolute imports
import React, { useEffect } from 'react';

// Styles
import { 
  StyledModal, 
  Header,
  Body,
  ControlButton,
  ControlContainer,
  TitleWrapper,
} from './styled';

const Modal = ({ 
  id,
  title,
  isOpen,
  onOpen,
  allowScroll,
  onClose,
  children,
}) => {

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <StyledModal
      id={id}
      isOpen={isOpen}
      allowScroll={allowScroll}
      onBackgroundClick={onClose}
      onEscapeKeydown={onClose}
    >
      <>
        <Header>
          <ControlContainer>
            <ControlButton 
              type="button"
              control="close"
              onClick={onClose}
            />
            <ControlButton type="button" control="hide" />
            <ControlButton type="button" control="min/max" />
          </ControlContainer>
          <TitleWrapper>{title}</TitleWrapper>
        </Header>
        <Body>{children}</Body>
      </>
    </StyledModal>
  );
};

export default Modal;