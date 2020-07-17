import {
  DescriptionRowWrapper,
  DescriptionSection,
  DescriptionWrapper,
  Label,
  SkillsSection,
  Text,
  TextWrapper,
  Thumbnail,
} from "./styled-components"
import SkillRow, { SKILLS } from "./SkillRow"

import Image from "../../components/image"
import { PageWrapper } from "../../css/global-styles"
import React from "react"

const AboutPage = () => {
  return (
    <PageWrapper>
      <DescriptionSection>
        <Thumbnail>
          <Image />
        </Thumbnail>
        <DescriptionWrapper>
          <DescriptionRowWrapper>
            <Label>current job</Label>
            <TextWrapper>
              <Text>chan zuckerberg initiative &#160;&#183; &#160;</Text>
              <Text>full stack engineer</Text>
            </TextWrapper>
          </DescriptionRowWrapper>
          <DescriptionRowWrapper>
            <Label>education</Label>
            <TextWrapper>
              <Text>stanford university &#160;&#183; &#160;</Text>
              <Text>m.s. computer science +&#160;</Text>
              <Text>b.a. economics</Text>
            </TextWrapper>
          </DescriptionRowWrapper>
        </DescriptionWrapper>
      </DescriptionSection>
      <SkillsSection>
        {SKILLS.map(skill => (
          <SkillRow skill={skill}></SkillRow>
        ))}
      </SkillsSection>
    </PageWrapper>
  )
}

export default AboutPage
