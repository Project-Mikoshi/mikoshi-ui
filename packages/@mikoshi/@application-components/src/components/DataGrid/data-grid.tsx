/* eslint-disable no-unused-vars */
import React, { FC } from 'react'
import { Container } from '@mikoshi/core-components'
import { AgGridReact, AgReactUiProps } from 'ag-grid-react'
import { DEFAULT_GRID_OPTIONS } from 'constants/data-grid'

export interface DataGridProps extends AgReactUiProps {
  suppressRowClickSelection?: boolean,
  rowSelectionType?: 'multiple' | 'single'
}

export const DataGrid: FC<DataGridProps> = (props) => {
  // == Props ================================
  const {
    columnDefs,
    rowData,
    gridOptions = {},
    suppressRowClickSelection = true,
    rowSelectionType,
    className = ''
  } = props

  const agGridOptions = { ...DEFAULT_GRID_OPTIONS, ...gridOptions }

  // == Hooks ================================

  // == Functions ============================

  // == Actions ==============================

  // == Template =============================
  return (
    <AgGridReact
      {...agGridOptions}
      className={`mikoshi-data-grid ag-theme-alpine ${className}`}
      rowSelection={rowSelectionType}
      suppressRowClickSelection={suppressRowClickSelection}
      columnDefs={columnDefs}
      rowData={rowData}
    />
  )
}