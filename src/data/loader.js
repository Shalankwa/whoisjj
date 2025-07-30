import skillsJson from './skills.json'
import projectsJson from './projects.json'

export const skills = new Map(Object.entries(skillsJson))
export const projects = new Map(Object.entries(projectsJson))

export function getSkill(skill) {
  return skills.get(skill)
}

export function getProject(project) {
  return projects.get(project)
}
