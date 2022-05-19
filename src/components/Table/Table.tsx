import React, { ElementType } from 'react'
import styled from 'styled-components'
import { PC, PP, PR } from '../../types/PolymorphicElementProps'
import { TableContext } from './TableContext'
import { TableRowGroupContext } from './TableRowGroupContext'

interface TableContainerProps {
  fullWidth: boolean
}

const TableContainer = styled.table<TableContainerProps>`
  display: table;
  ${({ fullWidth }) => fullWidth && 'width: 100%;'}
`

export interface TableProps {
  fullWidth?: boolean
  padding?: 'none' | 'normal' | 'wide'
}

export const Table: PC<'table', TableProps> = React.forwardRef(
  <T extends ElementType>(props: PP<T, TableProps>, ref?: PR<T>) => {
    const {
      fullWidth = false,
      padding = 'normal',
      as = 'table',
      ...rest
    } = props

    return (
      <TableContext.Provider value={{ padding }}>
        <TableRowGroupContext.Provider value={{ header: false }}>
          <TableContainer fullWidth={fullWidth} ref={ref} as={as} {...rest} />
        </TableRowGroupContext.Provider>
      </TableContext.Provider>
    )
  }
)
