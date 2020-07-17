import { fontSize, spacing } from "../../utils/style"

import media from "../../utils/media-query"
import styled from "styled-components"

export const HomePageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
`

export const Title = styled.h1`
  font-size: ${fontSize.xxl};

  ${media.desktop`
    font-size: 110px;
  `};

  ${media.tablet`
    font-size: 70px;
    &:last-child {
      padding-bottom: ${spacing.xxl};
    }
  `};

  ${media.phone`
    font-size: ${fontSize.lg};
    &:last-child {
      padding-bottom: ${spacing.xxl};
    }
  `};
`
export const Subtitle = styled.h2`
  font-size: ${fontSize.lg};
  margin-bottom: ${spacing.med};

  ${media.desktop`
    font-size: 40px;
  `};

  ${media.tablet`
    font-size: ${fontSize.med};
  `};

  ${media.phone`
    font-size: ${fontSize.sm};
    margin-bottom: ${spacing.sm};
  `};
`
