/* eslint-disable no-unused-vars */
import React, { FC, useRef } from 'react'
import { Button, Container } from '@mikoshi/core-components'
import { AgGridReact, AgReactUiProps } from 'ag-grid-react'
import { DEFAULT_GRID_OPTIONS } from 'constants/data-grid'
import { DataGridHeader } from './data-grid-header'

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
  const onExport = () => gridRef.current!.api.exportDataAsCsv()

  // == Template =============================
  return (
    <Container className={`mikoshi-data-grid ${className}`} flex disableGutters>
      <DataGridHeader className='m-flex' title={title}>
        <Button className='export-button' onClick={onExport} variant='container' disabled={!enableExport}>Export</Button>
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