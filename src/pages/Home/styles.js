import styled, { css } from 'styled-components'
import theme from '../../ui/theme'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`

export const ContainerImg = styled.div`
  display: flex;
  min-height: 550px;
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
  opacity: 0.8;
  transition: 1s all ease-in;
  overflow: hidden;

  ${(props) =>
    props.hover &&
    css`
      transform: scale(1.5);
      opacity: 0.5;
    `};
`

export const Rect = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  top: 40%;
  position: absolute;
  left: -40%;
  transition: 1s all ease-in;
  cursor: pointer;

  ${(props) =>
    props.hover &&
    css`
      width: 300px;
      left: 40%;
    `};
`

export const ServicesBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  transition: 2s all ease-in;

  ${(props) =>
    props.hover &&
    css`
      width: 300px;
      background-color: white;
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

export const CardGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin -40px 20px 0 20px;
`

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  width: 25%;
  min-height: 300px;
  margin: 0 10px;
  padding: 20px;
  background-color: white;
`

export const Description = styled.div`
  padding: 20px 30px;
`

export const Ul = styled.ul`
  padding: 0px 30px;
`
