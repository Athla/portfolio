import Image from "next/image"
import { SectionTitle } from "../sectionTitle/section-title"

import "./experience.scss"
import { Skill } from "../skill/skill"

export function Experience() {
  return (
    <div className="experience">
      <SectionTitle text="Experience" />
      <p>2 years of experience working at Dell Technologies as a Software Developer.</p>
      <p>Worked mainly with Microservices, Internal API's and Data Automations.</p>
      <div className="experience-time">
        <SectionTitle text="Tech Stack" />
        <Skill image="/go.svg" measure={4} years="2 years" />
        <Skill image="/python.svg" measure={4} years="2 years" />
        <Skill image="/ts.png" measure={2} years="1 year" />
        <Skill image="/react.png" measure={2} years="1 year" />
      </div>
      <p className="text-small"> PS: Those measurements indicate the time I've spent working with the technologies. </p>
      <p className="text-extra-small"> PSS: I use neovim btw! </p>
    </div>
  )
}
