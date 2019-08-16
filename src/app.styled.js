import styled from 'styled-components'
import { darken, rgba } from 'polished'

import { colors } from './theme/colors'

export const MainContainer = styled.div`
  display: flex;
  align-items: column;
  max-width: 476px;
  width: 100%;
  padding: 32px;
  margin: 128px auto 0 auto;
  border-radius: 4px;
  background: ${colors.primary};
`
