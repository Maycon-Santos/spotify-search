import styled from 'styled-components'
import { rgba, darken, lighten } from 'polished'

import { colors } from '../../../theme/colors'

export const InputContainer = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-radius: 3px;
  min-height: 22px;
  padding: 8px 12px;
  box-shadow: 0 0 0 4px transparent;
  cursor: text;
  background: ${colors.whitish};
  transition: box-shadow 80ms linear;

  &:hover{
    background: ${lighten(.1, colors.foreground)};
  }

  ${props => props.isFocused && `
    box-shadow: 3px 3px 9px 0 ${rgba(darken(.1, colors.background), .5)};
    background: ${lighten(.4, colors.foreground)} !important;
  `}
`

export const InputText = styled.input`
  width: 100%;
  border: none;
  outline: none;
  font-family: inherit;
  font-size: 12px;
  color: ${colors.comment};
  ${props => props.isFocused && `
    color: ${darken(.2, colors.comment)};
  `}
  background: transparent;
`
