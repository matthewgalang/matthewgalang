import { fetchEntries, fetchEntry } from '../../util/contentfulProjects'
import ProjectPage from '../../components/ProjectPage'
import ProjectCard from '../../components/ProjectCard'
import { useRouter } from 'next/router'
import Navigation from '../../components/Navigation'
import Link from 'next/link'

function Project({ project, neighborProjects }) {
  const router = useRouter()

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <div>Loading...</div>
  }

  // Render post...
  return (
    <>
    <Navigation />
    <ProjectPage key={project.date} {...project} />
    <div className="mx-auto py-10 px-8 xl:px-16 ">
    <div className="flex justify-between items-center">
      <div className="flex flex-col">
        <h2 className="text-xl uppercase font-bold text-gray-500">Other Projects</h2>
        <h1 className="text-3xl uppercase font-bold mb-4">You might be interested in</h1>
      </div>
      <Link href="/projects"><a className="text-xl text-blue-700 font-medium flex-none">See all</a></Link>
    </div>
    <div className="grid lg:grid-cols-4 gap-8 sm:gap-4 sm:grid-cols-2 grid-cols-1">
        {neighborProjects.map((project, count) => {
          if (count < 4) {
            return (
              <Link key={project.date} href={`/project/${project.id}/${project.title.replace(/\s+/g, '-').toLowerCase()}`}>
                <a className="cursor-pointer">
                  <ProjectCard  {...project} />
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

export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    const res = await fetchEntries()
    const projects = await res.map(p => {
      return {
        ...p.fields,
        id: p.sys.id
      }
    })
  
    // Get the paths we want to pre-render based on posts
    const paths = projects.map((project) => ({
      params: { slug: [project.id, project.title.replace(/\s+/g, '-').toLowerCase()] },
    }))
  
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false}
  }

  // This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetchEntries()
  const projects = await res.map(p => {
    return {
      ...p.fields,
      id: p.sys.id
    }
  })

  const projectIndex = projects.findIndex(p => p.id === params.slug[0])
  const project =  projects[projectIndex]
  let neighborProjects = [];
  if(projectIndex !== -1) {
    var startIndex = projectIndex !== 0 ? projectIndex - 4 : 1;
    while(neighborProjects.length < 4 && startIndex <= projects.length - 1) {
      if(startIndex >= 0 && startIndex !== projectIndex) {
        neighborProjects.push(projects[startIndex])
      }
      startIndex++;
    }
  }

  // Pass post data to the page via props
  return { props: { project, neighborProjects } }
}

export default Project