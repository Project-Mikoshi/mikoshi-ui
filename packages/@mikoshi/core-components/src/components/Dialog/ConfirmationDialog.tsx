import React, { FC } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import { CANCEL_BUTTON_LABEL, CONFIRM_BUTTON_LABEL } from 'constants/confirmation-dialog'
import { Button, IconButton } from 'components/Button'
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'components/Modal'
import { Typography } from 'components/Typography'

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
    onAfterClose,
    bindingElement = '#root',
    className = ''
  } = props

  // == Hooks ================================

  // == Functions ============================

  // == Actions ==============================

  // == Template =============================

  return (
    <Modal
      className={`mikoshi-confirmation-dialog ${className}`}
      isOpen={isOpen}
      onClose={onCancel}
      onAfterClose={onAfterClose}
      bindingElement={bindingElement}
    >
      <ModalHeader className="mikoshi-confirmation-dialog-header">
        <Typography variant='body1'>{title}</Typography>
        <IconButton className="exit-button" onClick={onCancel}>
          <CloseIcon />
        </IconButton>
      </ModalHeader>
      <ModalBody className="mikoshi-confirmation-dialog-content">
        {children}
      </ModalBody>
      <ModalFooter className="mikoshi-confirmation-dialog-footer">
        <Button variant={'contained'} color={'secondary'} onClick={onCancel}>{CANCEL_BUTTON_LABEL}</Button>
        <Button variant={'contained'} color={'primary'} onClick={onConfirm}>{CONFIRM_BUTTON_LABEL}</Button>
      </ModalFooter>
    </Modal>
  )
}