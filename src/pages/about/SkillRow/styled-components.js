import { borderRadius, colors, fontSize, spacing } from "../../../utils/style"

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
  width: 100px;
  text-align: end;
  margin-right: ${spacing.sm};
`

export const SkillName = styled.span`
  font-family: IBMPlexMono;
  font-size: ${fontSize.sm};
  color: ${colors.white};
`

export const SkillAptitudeBar = styled.span`
  display: inline-block;
  height: 20px;
  width: ${props => `${props.width}`};
  background-image: linear-gradient(to right, #e76a6a, #e59090);
  border-radius: ${borderRadius.sm};
`
