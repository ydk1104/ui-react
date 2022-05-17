import React, { ElementType } from 'react'
import styled from 'styled-components'
import { PolymorphicElementProps } from '../types/PolymorphicElementProps'
import { cssCentering } from '../utils/styles'

const paddingMap = {
  none: 'padding: 0;',
  normal: 'padding: 32px 0;',
  wide: 'padding: 64px 0;',
}

interface EmptyStatePlaceholderContainerProps {
  fullHeight?: boolean
  padding?: 'none' | 'normal' | 'wide'
}

const EmptyStatePlaceholderContainer = styled.div<EmptyStatePlaceholderContainerProps>`
  ${cssCentering}
  ${({ fullHeight }) => fullHeight && 'height: 100%;'}
  ${({ padding }) => paddingMap[padding || 'normal']}
  width: 100%;
  color: ${({ theme }) => theme.color.text.secondary.main};
  text-align: center;
`

export type EmptyStatePlaceholderProps<T extends ElementType = 'div'> =
  PolymorphicElementProps<T>

export const EmptyStatePlaceholder = <T extends ElementType>(
  props: EmptyStatePlaceholderProps<T>
): JSX.Element => {
  const { padding, fullHeight, as = 'div', ...rest } = props

  return (
    <EmptyStatePlaceholderContainer
      as={as}
      fullHeight={fullHeight}
      padding={padding}
      {...rest}
    />
  )
}
