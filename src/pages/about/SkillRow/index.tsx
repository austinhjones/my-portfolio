import {
  SkillAptitudeBar,
  SkillName,
  SkillNameWrapper,
  SkillWrapper,
} from "./styled-components"

import React from "react"

interface Skill {
  name: string
  percentageAptitude: number
}

export const SKILLS: Skill[] = [
  {
    name: "scala",
    percentageAptitude: 80,
  },
  {
    name: "react",
    percentageAptitude: 80,
  },
  {
    name: "typescript",
    percentageAptitude: 80,
  },
  {
    name: "python",
    percentageAptitude: 60,
  },
  {
    name: "ui / ux",
    percentageAptitude: 60,
  },
  {
    name: "swift",
    percentageAptitude: 40,
  },
  {
    name: "c / c++",
    percentageAptitude: 30,
  },
]

interface Props {
  skill: Skill
}

const SkillRow: React.FC<Props> = ({ skill }) => {
  return (
    <SkillWrapper>
      <SkillNameWrapper>
        <SkillName>{skill.name}</SkillName>
      </SkillNameWrapper>
      <SkillAptitudeBar width={skill.percentageAptitude} />
    </SkillWrapper>
  )
}

export default SkillRow
