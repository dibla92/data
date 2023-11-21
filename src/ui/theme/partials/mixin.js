const rgba = (HEX, alpha = 1) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(HEX)

  const r = parseInt(result[1], 16)
  const g = parseInt(result[2], 16)
  const b = parseInt(result[3], 16)

  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

const customScrollbar = () => `
  @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
    margin-right: -10px;
    padding-top: 32px;
    margin-top: -32px;
    margin-bottom: -32px;
    padding-bottom: 32px;
    
    /* ie scrollbar color properties */
    scrollbar-base-color: transparent;
    scrollbar-face-color: #cdcdcd;
    scrollbar-3dlight-color: #cdcdcd;
    scrollbar-highlight-color: #cdcdcd;
    scrollbar-track-color: white;
    scrollbar-arrow-color: #cdcdcd;
    scrollbar-shadow-color: #cdcdcd;
    scrollbar-dark-shadow-color: #cdcdcd;
      
    &:after {
      content: "";
      height: 32px;
      display: block;
    }
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #cdcdcd;
    border-radius: 5px;
    background-clip: content-box;
    height: 4px;
  }

  &::-webkit-scrollbar {
    width: 6px;
    height: 10px;
  }

  /*Firefox*/
  scrollbar-width: thin;
  scrollbar-color: #cdcdcd white;
  
`

export const mixin = {
  rgba,
  customScrollbar,
}
