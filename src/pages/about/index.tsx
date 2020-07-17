import {
  DescriptionWrapper,
  QuickFactsWrapper,
  SkillsWrapper,
  Text,
  TextWrapper,
  Thumbnail,
  Title,
  TitleWrapper,
} from "./styled-components"
import SkillRow, { SKILLS } from "./SkillRow"

import Image from "../../components/image"
import { PageWrapper } from "../../css/global-styles"
import React from "react"

const AboutPage = () => {
  return (
    <PageWrapper>
      <DescriptionWrapper>
        <Thumbnail>
          <Image />
        </Thumbnail>
        <QuickFactsWrapper>
          <TitleWrapper>
            <Title>current job</Title>
            <Title>education</Title>
          </TitleWrapper>
          <TextWrapper>
            <Text>full stack engineer, chan zuckerberg initiative</Text>
            <Text>
              stanford university, m.s. computer science + b.a. economics
            </Text>
          </TextWrapper>
        </QuickFactsWrapper>
      </DescriptionWrapper>
      <SkillsWrapper>
        {SKILLS.map(skill => (
          <SkillRow skill={skill}></SkillRow>
        ))}
      </SkillsWrapper>
    </PageWrapper>
  )
}

export default AboutPage
