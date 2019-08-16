import styled from 'styled-components'

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
  font-weight: 600;
  letter-spacing: .1em;
  text-transform: uppercase;
  user-select: none;
  background-color: #45505a;
  &:hover{
    cursor: pointer;
    background-color: ${lighten(.1, '#45505a')};
  }
  &:active{
    transform: scale(.95);
  }

  ${props => props.checked && `
    background: #478C7A !important;
  `}

  input { display: none; }
`
