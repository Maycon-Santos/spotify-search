import styled from 'styled-components'
import { darken } from 'polished'

import { colors } from '../../../theme/colors'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  animation: fadein 1s cubic-bezier(0.16, 0.72, 1, 1);

  @keyframes fadein {
    from {
      opacity: 0;
      transform: translateY(4%);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`

export const LoginButton = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 22px;
  border-radius: 3px;
  border: none;
  outline: none;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  color: ${colors.foreground};
  background: transparent;
  transition: transform 300ms cubic-bezier(0.21, 0.54, 0.6, 0.89);
  overflow: hidden;
  &::before,
  &::after{
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    display: block;
    width: 100%;
    height: 100%;
  }
  &::before{
    background: ${colors.selection};
  }
  &::after{
    content: '';
    width: 100px;
    height: 100px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    border-radius: 50%;
    transition: all 200ms cubic-bezier(0.21, 0.54, 0.6, 0.89);
    background: ${darken(.2, colors.selection)};
  }
  &:hover{
    cursor: pointer;
    /* transform: scale(1.1); */
    &::after{
      width: 100%;
      height: 100%;
      border-radius: 0;
      opacity: 1;
    }
  }
  img{
    width: 32px;
    height: 32px;
    margin-right: 16px;
  }
`
