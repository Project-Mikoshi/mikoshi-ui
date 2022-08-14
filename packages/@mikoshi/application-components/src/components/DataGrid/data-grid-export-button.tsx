/* eslint-disable no-unused-vars */
import React, { FC, useState } from 'react'
import { Button, Typography } from '@mikoshi/core-components'
import { AgGridReact } from 'ag-grid-react'
import { ConfirmationDialog } from 'components/ConfirmationDialog'


export interface ExportButtonProps {
  gridRef: React.RefObject<AgGridReact>,
  disabled?: boolean,
  className?: string
}

export const DataGridExportButton: FC<ExportButtonProps> = (props) => {
  // == Props ================================
  const {
    gridRef,
    disabled,
    className = ''
  } = props

  // == Hooks ================================
  const [open, setOpen] = useState(false)

  // == Functions ============================

  // == Actions ==============================
  const onExport = () => {
    gridRef.current!.api.exportDataAsCsv()
    setOpen(false)
  }

  const onClick = () => setOpen(true)
  const onCancel = () => setOpen(false)

  // == Template =============================
  return (
    <>
      <Button className={`export-button ${className}`} onClick={onClick} variant={'text'} disabled={disabled}>
        Export
      </Button>
      <ConfirmationDialog title='Export Grid Data' isOpen={open} onCancel={onCancel} onConfirm={onExport}>
        <Typography variant='body1' paragraph={true}>
          Confirm downloading data as CSV format?
        </Typography>
      </ConfirmationDialog>
    </>
  )
}