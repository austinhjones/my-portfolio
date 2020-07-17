import { borderRadius, colors, fontSize, spacing } from "../../utils/style"

import media from "../../utils/media-query"
import styled from "styled-components"

export const DescriptionWrapper = styled.div`
  display: flex;
  background-color: ${colors.gray};
  border-radius: ${borderRadius.med};
`

export const Thumbnail = styled.div`
  height: 150px;
  width: 150px;
  margin: ${spacing.med} ${spacing.lg} ${spacing.med} ${spacing.med};
  border-radius: ${borderRadius.med};

  ${media.desktop`
    margin: ${spacing.sm};
    margin-right: ${spacing.med};
  `};
`

export const QuickFactsWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const TitleWrapper = styled.div`
  margin-right: ${spacing.med};
`

export const Title = styled.p`
  font-family: IBMPlexMono;
  font-size: ${fontSize.sm};
  color: ${colors.red};

  &:first-child {
    margin-bottom: ${spacing.sm};
  }

  ${media.desktop`
    font-size: 14px;
    &:first-child {
      margin-bottom: ${spacing.xs};
    }
  `};
`

export const TextWrapper = styled.div``

export const Text = styled.p`
  font-family: Muli;
  font-size: ${fontSize.sm};
  color: ${colors.white};

  &:first-child {
    margin-bottom: ${spacing.sm};
  }

  ${media.desktop`
    font-size: 14px;
    &:first-child {
      margin-bottom: ${spacing.xs};
    }
  `};
`

export const SkillsWrapper = styled.div`
  background-color: ${colors.gray};
  border-radius: ${borderRadius.med};
  margin-top: ${spacing.med};
  padding: ${spacing.xl};
`
