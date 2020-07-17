import { css } from "styled-components"

export const sizes = {
  giant: 1281,
  desktop: 1025,
  tablet: 801,
  lgPhone: 601,
  phone: 480,
  smPhone: 320,
}

// iterate through the sizes and create a media template
// To use, import media and pass a tagged template
// ${media.tablet`width: 100%`}
const media: any = Object.keys(sizes).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const emSize = sizes[label] / 16
  accumulator[label] = (...args) => {
    return css`
      @media (max-width: ${emSize}em) {
        ${(css as any)(...args)};
      }
    `
  }
  return accumulator
}, {})

export default media
