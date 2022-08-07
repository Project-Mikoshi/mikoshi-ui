import { Modal, ModalBody, ModalHeader, ModalFooter, Button, IconButton, Typography } from '@mikoshi/core-components'
import CloseIcon from '@mui/icons-material/Close'
import React, { FC } from 'react'

interface ConfirmationDialogProps {
    title: React.ReactNode,
    isOpen: boolean,
    onConfirm: () => void
    onCancel: () => void,
    onAfterClose?: () => void,
    className?: string,
    closeTimeOut?: number,
    children?: React.ReactNode,
    bindingElement?: any
}

export const ConfirmationDialog: FC<ConfirmationDialogProps> = (props) => {
  // == Props ================================
  const {
    title,
    isOpen,
    children,
    onCancel,
    onConfirm,
    bindingElement = '#root',
    className = ''
  } = props

  const CANCEL_BUTTON_LABEL = 'Cancel'
  const CONFIRM_BUTTON_LABEL = 'Confirm'

  // == Hooks ================================

  // == Functions ============================

  // == Actions ==============================

  // == Template =============================

  return (
    <Modal
      className={`mikoshi-confirmation-dialog ${className}`}
      isOpen={isOpen}
      onClose={onCancel}
      bindingElement={bindingElement}
    >
      <ModalHeader className="mikoshi-confirmation-dialog-header">
        <Typography variant='p'>{title}</Typography>
        <IconButton className="exit-button" onClick={onCancel}>
          <CloseIcon />
        </IconButton>
      </ModalHeader>
      <ModalBody className="mikoshi-confirmation-dialog-content">
        {children}
      </ModalBody>
      <ModalFooter className="mikoshi-confirmation-dialog-footer">
        <Button variant='contained' onClick={onCancel}>{CANCEL_BUTTON_LABEL}</Button>
        <Button variant='contained' onClick={onConfirm}>{CONFIRM_BUTTON_LABEL}</Button>
      </ModalFooter>
    </Modal>
  )
}