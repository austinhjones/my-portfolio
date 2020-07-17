import { borderRadius, colors, fontSize, spacing } from "../../utils/style"

import media from "../../utils/media-query"
import styled from "styled-components"

export const DescriptionSection = styled.div`
  display: flex;
  align-items: center;
  background-color: ${colors.gray};
  border-radius: ${borderRadius.med};

  ${media.tablet`
    flex-direction: column;
  `};
`

export const Thumbnail = styled.div`
  height: 150px;
  width: 150px;
  margin: ${spacing.med} ${spacing.lg} ${spacing.med} ${spacing.med};
  border-radius: ${borderRadius.med};

  ${media.desktop`
    margin-right: ${spacing.med};
  `};
`
export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const DescriptionRowWrapper = styled.div`
  &:first-child {
    margin-bottom: ${spacing.sm};
  }

  ${media.tablet`
    margin-bottom: ${spacing.sm};
  `};
`

export const Label = styled.span`
  display: inline-block;
  width: 150px;
  font-family: IBMPlexMono;
  font-size: ${fontSize.sm};
  color: ${colors.red};

  ${media.desktop`
    font-size: 14px;
    width: 120px;
  `};

  ${media.phone`
    font-size: 12px;
  `};
`

export const TextWrapper = styled.div`
  display: inline-flex;
  flex-direction: row;

  ${media.tablet`
    flex-direction: column;
  `};
`

export const Text = styled.span`
  font-family: Muli;
  font-size: ${fontSize.sm};
  color: ${colors.white};

  ${media.desktop`
    font-size: 14px;
  `};

  ${media.phone`
    font-size: 12px;
  `};
`

export const SkillsSection = styled.div`
  background-color: ${colors.gray};
  border-radius: ${borderRadius.med};
  margin-top: ${spacing.med};
  padding: ${spacing.lg};

  ${media.tablet`
    padding: ${spacing.med};
  `};

  ${media.phone`
    padding: ${spacing.sm};
  `};
`
