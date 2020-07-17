import { css } from 'styled-components'

export const sizes = {
  desktop: 1025,
  giant: 1281,
  phone: 480,
  smPhone: 320,
  tablet: 801,
}

export const minSizesEm = {
  desktop: (sizes.tablet + 1) / 16,
  giant: (sizes.desktop + 1) / 16,
  tablet: (sizes.phone + 1) / 16,
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