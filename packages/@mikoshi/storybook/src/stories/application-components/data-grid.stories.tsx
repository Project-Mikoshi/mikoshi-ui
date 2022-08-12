import React, { useState, useEffect } from 'react'
import { DataGrid } from '@mikoshi/application-components'

export default {
  title: 'Application/Data Grid',
  component: DataGrid,
  argTypes: {
    rowSelectionType: {
      options: ['single', 'multiple'],
      control: 'inline-radio',
      defaultValue: 'single'
    },
    suppressRowClickSelection: {
      control: 'boolean',
      defaultValue: false
    }
  }
}

const Template = (props: any) => {
  const [ columnDefs ] = useState([
    { field: 'athlete', checkboxSelection: true },
    { field: 'age', headerName: 'Age of Athlete' },
    { field: 'country' },
    { field: 'year' },
    { field: 'date' },
    { field: 'sport' },
    { field: 'gold' },
    { field: 'silver' },
    { field: 'bronze' },
    { field: 'total' }
  ])

  const [ rowData, setRowData ] = useState([])

  useEffect(() => {
    fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
      .then(result => result.json())
      .then(rowData => setRowData(rowData))
  }, [])

  return (
    <DataGrid columnDefs={columnDefs} rowData={rowData} {...props} />
  )
}

export const DataGridDemo = Template.bind({})
