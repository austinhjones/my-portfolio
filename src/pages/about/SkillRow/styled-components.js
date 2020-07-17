import { borderRadius, colors, fontSize, spacing } from "../../../utils/style"

import media from "../../../utils/media-query"
import styled from "styled-components"

export const SkillWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: ${spacing.sm};

  :last-child {
    margin-bottom: 0;
  }
`

export const SkillNameWrapper = styled.span`
  display: inline-block;
  width: 110px;
  text-align: end;
  margin-right: ${spacing.sm};

  ${media.desktop`
    width: 90px;
  `};
`

export const SkillName = styled.span`
  font-family: IBMPlexMono;
  font-size: ${fontSize.sm};
  color: ${colors.white};

  ${media.desktop`
    font-size: 14px;
  `};
`

export const SkillAptitudeBar = styled.span`
  display: inline-block;
  height: 20px;
  width: ${props => `${props.width}`};
  background-image: linear-gradient(to right, #e76a6a, #e59090);
  border-radius: ${borderRadius.sm};
`
