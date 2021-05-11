import { fetchEntries, fetchEntry } from '../util/contentfulProjects'
import ProjectCard from '../components/ProjectCard'
import Hero from '../components/Hero'
import Navigation from '../components/Navigation'
import Link from 'next/link'

export default function Home({ projects, heroComponent }) {
  return (
    <>
      <Navigation />
      <Hero {...heroComponent} />
      <div className="mx-auto py-10 px-8 xl:px-16">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <h2 className="text-xl uppercase font-bold text-gray-500">Latest</h2>
            <h1 className="text-3xl uppercase font-bold mb-4">Projects</h1>
          </div>
          <Link href="/projects"><a className="text-xl text-blue-700 font-medium flex-none">See all</a></Link>
        </div>
        <div className="grid lg:grid-cols-4 gap-8 sm:gap-4 sm:grid-cols-2 grid-cols-1">
          {projects.map((project, count) => {
            if (count < 4) {
              return (
                <Link href={`/project/${project.id}/${project.title.replace(/\s+/g, '-').toLowerCase()}`}>
                  <a className="cursor-pointer">
                    <ProjectCard key={project.date} {...project} />
                  </a>
                </Link>
              )
            }
          })}
        </div>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const projectEntries = await fetchEntries()
  const projects = await projectEntries.map(p => {
    return {
      ...p.fields,
      id: p.sys.id
    }
  })

  const heroComponentEntry = await fetchEntry('2K2ubIgFhJKPo6WAgAIQYq')
  const heroComponent = await heroComponentEntry.fields

  return {
    props: {
      projects,
      heroComponent
    }
  }
}
