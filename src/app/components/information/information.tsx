import { SectionTitle } from "../sectionTitle/section-title"
import "./information.css"

export function Info() {
  return (
    <div className="infos">
      <div className="languages-info">
        <SectionTitle text="Languages" />
        <span>🇺🇸 EN - Fluent</span>
        <span>🇧🇷 PT-BR - Native Speaker</span>
      </div>
      <div className="educational-info">
        <SectionTitle text="Education" />
        <span>🎓 Mechanical Engineering Bachelors Degree - FHO</span>
        <span>Self-taught Software Engineer</span>
      </div>
    </div>
  )
}
