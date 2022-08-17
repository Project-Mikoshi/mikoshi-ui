/* eslint-disable no-unused-vars */
import React, { FC, useRef } from 'react'
import { Container } from '@mikoshi/core-components'
import { AgGridReact, AgReactUiProps } from 'ag-grid-react'
import { DataGridHeader } from './DataGridHeader'
import { DataGridExportButton } from './DataGridExportButton'
import { DEFAULT_GRID_OPTIONS } from 'constants/data-grid'

export interface DataGridProps extends AgReactUiProps {
  suppressRowClickSelection?: boolean,
  rowSelectionType?: 'multiple' | 'single',
  enableExport?: boolean,
  title?: string,
}

export const DataGrid: FC<DataGridProps> = (props) => {
  // == Props ================================
  const {
    columnDefs,
    rowData,
    title = 'AG Grid',
    gridOptions = {},
    enableExport = true,
    suppressRowClickSelection = true,
    rowSelectionType,
    className = ''
  } = props

  const agGridOptions = { ...DEFAULT_GRID_OPTIONS, ...gridOptions }

  // == Hooks ================================
  const gridRef = useRef<AgGridReact>(null)

  // == Functions ============================

  // == Actions ==============================

  // == Template =============================
  return (
    <Container className={`mikoshi-data-grid ${className}`} flex disableGutters>
      <DataGridHeader className='m-flex' title={title}>
        <DataGridExportButton gridRef={gridRef} disabled={!enableExport} />
      </DataGridHeader>
      <AgGridReact
        {...agGridOptions}
        className='mikoshi-data-grid-content ag-theme-alpine'
        ref={gridRef}
        rowSelection={rowSelectionType}
        suppressRowClickSelection={suppressRowClickSelection}
        columnDefs={columnDefs}
        rowData={rowData}
      />
    </Container>
  )
}