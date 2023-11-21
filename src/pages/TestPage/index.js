
import React, {useState} from 'react';
import {
  HeaderContainer,
  Logo,
  Wrapper,
  Body,
  Rect,
} from './styles'
import Image from './foto.jpeg'
// const RedirectDefault = () => <Redirect to={routes.emptyPage.path} />

function TestPage() {
  const [hover, setHover] = useState(false)


  console.log(hover)
  return (
    <div
      onMouseEnter={() => {
        setHover(true)
      }}
      onMouseLeave={() => {
        setHover(false)
      }}
    >
      <Wrapper>
        <Body 
          hover={hover}
          img={Image}          
        />
        <Rect
          hover={hover}
        >
          aaaaaa
        </Rect>
      </Wrapper>
    </div>
  )
}

export default TestPage
