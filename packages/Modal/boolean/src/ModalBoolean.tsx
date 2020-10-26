import * as React from 'react';
import * as PropTypes from 'prop-types';
import Modal, { HeaderProps } from '@axa-fr/react-toolkit-modal-default';
import Button from '@axa-fr/react-toolkit-button';

import {
  ClassManager,
  ClickEvent,
  Constants,
  WithClassModifierOptions,
} from '@axa-fr/react-toolkit-core';

const defaultClassName = 'af-modal';

const defaultProps = {
  ...Constants.defaultProps,
  submitTitle: 'Valider',
  cancelTitle: 'Annuler',
  className: defaultClassName,
};

interface ModalBooleanCoreProps {
  isOpen: boolean;
  onSubmit: (e: ClickEvent) => void;
  onCancel: (e: ClickEvent) => void;
  cancelTitle: string;
  submitTitle: string;
  id: string;
}

export type ModalBooleanProps = HeaderProps &
  WithClassModifierOptions &
  ModalBooleanCoreProps;

const ModalBoolean: React.FC<ModalBooleanProps> = ({
  isOpen,
  children,
  title,
  submitTitle,
  cancelTitle,
  className,
  classModifier,
  onCancel,
  id,
  onSubmit,
}) => {
  const onCancelcb = () => {
    if (onCancel) {
      onCancel({ id });
    }
  };

  const onSubmitcb = () => {
    if (onSubmit) {
      onSubmit({ id });
    }
  };

  const componentClassName = ClassManager.getComponentClassName(
    className,
    classModifier,
    defaultClassName
  );

  return (
    <Modal
      isOpen={isOpen}
      className={componentClassName}
      onOutsideTap={onCancelcb}
      title={title}>
      <Modal.Header title={title} onCancel={onCancelcb} />
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        <Button classModifier="reverse" onClick={onCancelcb}>
          {cancelTitle}
        </Button>
        <Button onClick={onSubmitcb}>{submitTitle}</Button>
      </Modal.Footer>
    </Modal>
  );
};

ModalBoolean.defaultProps = defaultProps;

export default ModalBoolean;
