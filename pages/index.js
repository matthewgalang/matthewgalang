import { fetchEntries } from '../util/contentfulProjects'
import Project from '../components/Project'

export default function Home({projects}) {
  return (
    <div className="container">
        {projects.map(project => (
          <Project key={project.date} {...project}/>
        ))}
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetchEntries()
  const projects = await res.map(p => p.fields)
  return {
    props: {
      projects
    }
  }
}
