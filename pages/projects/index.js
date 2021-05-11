import { fetchEntries } from '../../util/contentfulProjects'
import Navigation from '../../components/Navigation'
import ProjectCard from '../../components/ProjectCard'
import Link from 'next/link'


export default function Projects({ projects }) {
    return (
        <>
            <Navigation />
            <div className="mx-auto py-10 px-8 xl:px-16">
                <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                        <h1 className="text-3xl uppercase font-bold mb-4">Projects</h1>
                    </div>
                </div>
                <div className="grid lg:grid-cols-4 gap-8 sm:gap-4 sm:grid-cols-2 grid-cols-1">
                    {projects.map((project) => (
                        <Link href={`/project/${project.id}/${project.title.replace(/\s+/g, '-').toLowerCase()}`}>
                            <a className="cursor-pointer">
                                <ProjectCard key={project.date} {...project} />
                            </a>
                        </Link>
                    )
                    )}
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

    return {
        props: {
            projects,
        }
    }
}