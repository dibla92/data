import styled, { css } from 'styled-components'
import theme from '../../ui/theme'

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 600px;
  max-height: 600px;
  overflow: hidden;
  position: relative;
`

export const Body = styled.img.attrs(props => ({
  src: props.img
}))`
  display: block;
  width: 100%;
  height: 600px;
  max-height: 600px;
  background-size: auto;
  object-fit: cover;
  opacity: 0.5;
  transition: 0.5s all ease-in-out;
  overflow: hidden;

  ${(props) =>
    props.hover &&
    css`
      transform: scale(1.5);
    `};
`

export const Rect = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 0px;
  height: 100px;
  top: 40%;
  position: absolute;
  left: 40%;
  transition: 2s all ease-in-out;

  ${(props) =>
    props.hover &&
    css`
      width: 300px;
      border: 2px solid black;
    `};
`

export const HeaderContainer = styled.div`
  width: 100%;
  background-color: ${theme.colors.primary.white};
  display: flex;
  align-items: center;
  min-height: 100px;
  border-bottom: 1px solid ${theme.colors.primary.middleGrey};
`

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 50px;
  min-width: 50px;
  height: 50px;
  margin: 0px 20px;
  border: 1px solid ${theme.colors.primary.middleGrey};
`
