import styles from '../styles/Home.module.css'

import { fetchEntries } from '../util/contentfulProjects'
import Project from '../components/Project'

export default function Home({projects}) {
  return (
    <div className={styles.container}>
        {projects.map(project => (
          <Project key={project.date} {...project}/>
        ))}
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetchEntries()
  const projects = await res.map(p => p.fields)
  console.log(projects)
  return {
    props: {
      projects
    }
  }
}
