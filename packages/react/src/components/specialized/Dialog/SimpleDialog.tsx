import React from 'react'
import CloseIcon from '@mui/icons-material/Close'
import { IconButton } from '@/components/core/Button'
import { Modal, ModalBody, ModalHeader } from '@/components/specialized/Modal'
import { Typography } from '@/components/core/Typography'

interface SimpleDialogProps {
  title: React.ReactNode,
  isOpen: boolean,
  onCancel: () => void,
  onAfterClose?: () => void,
  className?: string,
  closeTimeOut?: number,
  children?: React.ReactNode,
  bindingElement?: any
}

export default function (props: SimpleDialogProps) {
  // == Props ================================
  const {
    title,
    isOpen,
    children,
    onCancel,
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
      className={`mikoshi-simple-dialog ${className}`}
      isOpen={isOpen}
      onClose={onCancel}
      onAfterClose={onAfterClose}
      bindingElement={bindingElement}
    >
      <ModalHeader className="mikoshi-simple-dialog-header">
        <Typography variant='body1'>{title}</Typography>
        <IconButton className="exit-button" onClick={onCancel}>
          <CloseIcon />
        </IconButton>
      </ModalHeader>
      <ModalBody className="mikoshi-simple-dialog-content">
        {children}
      </ModalBody>
    </Modal>
  )
}