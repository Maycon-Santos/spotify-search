import styled from 'styled-components'
import { darken } from 'polished'

import { colors } from '../../../theme/colors'

import loadingGif from '../../../assets/images/loading.gif'

export const Container = styled.div`
  margin-top: 32px;
`

export const SearchText = styled.span`
  color: ${colors.foreground};
  font-weight: 300;
  font-size: 32px;
  letter-spacing: .05em;
`

export const NoResults = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  color: ${colors.comment};
`

export const ResultContainer = styled.div`
  position: relative;
  min-height: 270px;
  margin-top: 8px;
  padding: 16px;
  border-radius: 4px;
  background-color: ${darken(.03, colors.background)};
  &::after{
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    display: block;
    width: 100%;
    height: 100%;
    opacity: 0;
    pointer-events: none;
    background-image: url(${loadingGif});
    background-color: ${darken(.03, colors.background)};
    background-size: 32px;
    background-repeat: no-repeat;
    background-position: center 128px;
    transition: all 300ms linear;
    ${props => props.isLoading && `
      opacity: 1;
      pointer-events: all;
    `}
  }
`

export const ResultList = styled.ul`
  margin: -8px 0;
`

export const ResultItem = styled.li`
  display: flex;
  margin: 8px 0;
  color: ${colors.foreground};
  ${props => props.onClick && `
    &:hover{
      cursor: pointer;
      border-radius: 0 3px 3px 0;
      background-color: ${colors.currentLine};
    }
  `}
  .album-image{
    width: 80px;
    margin-right: 12px;
    font-size: 0;
    img{
      width: 100%;
    }
    @media (min-width: 476px) {
      width: 150px;
    }
  }
  .info{
    display: flex;
    flex-direction: column;
    width: calc(100% - 152px);
    padding-top: 8px;
    .name{
      color: ${colors.green};
      line-height: 1.35em;
    }
    .track-artists{
      margin-top: 8px;
      font-size: 12px;
      line-height: 1.35em;
    }
    .track-duration{
      margin-top: 8px;
      color: ${colors.comment};
      font-size: 12px;
    }
    .popularity{
      margin-top: 8px;
      color: #6272a4;
      font-size: 14px;
    }
    @media (max-width: 476px) {
      width: calc(100% - 92px);
      .name,
      .track-artists,
      .track-duration,
      .popularity{
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
`
