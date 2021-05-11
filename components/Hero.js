import {documentToReactComponents} from "@contentful/rich-text-react-renderer";
import Link from 'next/link'


function Hero({ title, text, image, ctaText }) {
    return (
        <div className="flex items-end w-full relative">
            <img className="lg:w-auto lg:h-auto h-96 object-left object-cover"src={`https:${image.fields.file?.url}`} alt="" />
            <div className="h-full w-full absolute bg-gradient-to-t from-black to-transparent lg:opacity-20 opacity-80"></div>
            <div className="flex flex-col absolute items-center justify-center w-full space-y-8 mb-10 lg:mb-20">
                <div className="w-max uppercase text-white text-5xl font-bold text-center">
                    {documentToReactComponents(text)}
                </div>
                <Link href="/projects"><a><div className="w-max px-8 py-2 bg-white rounded-full text-yellow-600 font-semibold">{ctaText}</div></a></Link>
            </div>
        </div>
    )
}

export default Hero