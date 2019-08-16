import styled from 'styled-components'
import { rgba, lighten } from 'polished'

import { colors } from '../../../theme/colors'

export const InputContainer = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-radius: 3px;
  min-height: 22px;
  padding: 8px 12px;
  box-shadow: 0 0 0 4px ${rgba(colors.secundary, 0)};
  cursor: text;
  background: ${colors.whitish};
  transition: box-shadow 80ms linear;

  &:hover{
    background: ${lighten(.1, colors.whitish)};
  }

  ${props => props.isFocused && `
    box-shadow: 3px 3px 9px 0 rgba(28, 35, 41, 0.66);
    background: ${lighten(.4, colors.whitish)} !important;
  `}
`

export const InputText = styled.input`
  width: 100%;
  border: none;
  outline: none;
  font-family: inherit;
  font-size: 12px;
  font-weight: 600;
  color: #596877;
  ${props => props.isFocused && `
    color: ${'#29394a'};
  `}
  background: transparent;
`
