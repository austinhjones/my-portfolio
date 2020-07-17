import media from "../utils/media-query"
import { spacing } from "../utils/style"
import styled from "styled-components"

export const Container = styled.div`
  margin: auto;
  width: 960px;

  ${media.desktop`
    width: 760px;
  `};

  ${media.tablet`
    width: 600px;
  `};

  ${media.phone`
    width: 450px;
  `};
`

// export const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   width: 100%;
// `

export const PageWrapper = styled.div`
  height: 100vh;
`
