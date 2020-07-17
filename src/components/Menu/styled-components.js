import { colors, fontSize, spacing } from "../../utils/style"

import media from "../../utils/media-query"
import styled from "styled-components"

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: ${spacing.med} 0 ${spacing.sm} 0;
  opacity: 0;
  position: sticky;
  top: 0;
  background-color: ${colors.black};
  z-index: 2;

  ${media.phone`
    justify-content: center;
  `};
`

export const MenuItemContainer = styled.div`
  display: flex;
  align-items: flex-end;
  margin-right: ${spacing.xl};

  ${media.phone`
    margin: 0 10px;
  `};
`

export const MenuItem = styled.a`
  font-family: IBMPlexMono;
  font-size: ${fontSize.sm};
  color: ${colors.grayLight};
  border-bottom: 1px solid transparent;

  transition: border-bottom-color 0.2s ease-out;
  &:hover {
    cursor: pointer;
    border-bottom: 1px solid ${colors.grayLight};
  }
`
