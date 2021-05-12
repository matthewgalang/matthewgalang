import Navigation from '../components/Navigation'
import { fetchAsset } from '../util/contentfulProjects'
import Link from 'next/link'

export default function About({ imageUrl }) {
    return (
        <>
            <Navigation />
            <div className="mx-auto w-full">
                <div className="flex flex-col items-start w-full md:relative">
                    <img className="lg:w-auto object-left md:h-screen lg:h-auto object-cover" src={`https:${imageUrl}`} alt="" />
                    <div className="h-full w-full hidden md:block sm:absolute bg-gradient-to-t from-black to-transparent md:opacity-80 xl:opacity-40"></div>
                    <div className="flex flex-col md:absolute items-center justify-center w-full space-y-8 mb-10 mt-4 xl:mt-20 p-4">
                        <div className="w-full uppercase md:text-white text-5xl font-bold text-left md:text-center">
                            I am a developer and designer
                        </div>
                        <p className="w-full md:max-w-2xl md:text-white text-lg text-left md:text-center mb-4">I am currently the lead developer at a small marketing agency. Although I started developing professionally in 2018, I have built many things on the internet as far as I can remember.</p>
                        <p className="w-full md:max-w-2xl md:text-white text-lg text-left md:text-center">From neopets fan pages in my childhood, student organization websites during university, and progressive web applications in my current career, my goal for any project is always to design, develop, and deploy. Feel free to <Link href="/projects"><a className="hover:text-white hover:bg-blue-700 font-semibold">browse the collection of projects</a></Link> I have listed on this website. </p>
                        <p className="w-full md:max-w-2xl md:text-white text-lg text-left md:text-center">
                            <a className="hover:text-white hover:bg-blue-700 font-semibold" href="https://github.com/matthewgalang/matthewgalang" target="_blank" rel="noreferrer">This website</a> was built with <a className="hover:text-white hover:bg-blue-700 font-semibold" href="https://nextjs.org/" target="_blank" rel="noreferrer">Next.js</a> and <a className="hover:text-white hover:bg-blue-700 font-semibold" href="https://www.contentful.com/" target="_blank" rel="noreferrer">Contentful</a> and deployed to <a className="hover:text-white hover:bg-blue-700 font-semibold" href="https://www.netlify.com/" target="_blank" rel="noreferrer">Netlify</a>
                        </p>
                    </div>
                </div>
            </div>

        </>
    )
}

export async function getStaticProps() {

    const image = await fetchAsset('6pGqizoRfGozTEL4vAHPm0')
    const imageUrl = image.fields.file.url

    return {
        props: {
            imageUrl
        }
    }
}
