import styled from 'styled-components'

import { colors } from '../../../theme/colors'

import { lighten } from 'polished'

export const Container = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 200px;
  margin-left: 8px;
  border-radius: 3px;
  color: white;
  font-size: 9px;
  letter-spacing: .1em;
  text-transform: uppercase;
  user-select: none;
  background-color: #45505a;
  &:hover{
    cursor: pointer;
    background-color: ${colors.currentLine};
  }
  &:active{
    transform: scale(.95);
  }

  ${props => props.checked && `
    background: ${colors.comment} !important;
  `}

  input { display: none; }
`
