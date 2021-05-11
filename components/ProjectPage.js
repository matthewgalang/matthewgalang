import Link from 'next/link'

function ProjectPage({ title, summary, date, image, responsibilities, features, technologies, linkUrl, linkText }) {
    const dateObj = new Date(date);

    return (
        <div className="flex flex-col lg:flex-row xl:w-8/12 mx-auto">
            {image && <img className="lg:w-8/12 object-contain object-top" alt={image.description} src={`https:${image.fields.file?.url}`} />}
            <div className="flex flex-col py-4 lg:w-4/12 px-8 space-y-8">
                <div className="flex flex-row items-center justify-between">
                    <div className="text-2xl font-semibold">{title}</div>
                    <div class="font-bold text-lg pl-4">{dateObj.getFullYear()}</div>
                </div>
                <div className="text-xl font-light">{summary}</div>
                {linkUrl ? (
                    <a href={linkUrl} target="_blank" rel="noreferrer" className="px-8 py-3 font-medium text-green-50 bg-green-600 hover:bg-green-800 rounded-full w-max">
                        {linkText}
                    </a>
                ) : (
                    <Link href="/contact">
                    <a className="px-8 py-3 font-medium text-white bg-gray-500 rounded-full w-max">
                        Contact me for details
                    </a>
                    </Link>
                )}
                {technologies && (
                    <div>
                        <div className="text-lg uppercase font-medium text-gray-400 mb-4">Technologies</div>
                        <ul className="flex-wrap gap-4 flex">
                            {technologies.map((item, index) => (
                                <li key={index} className="p-4 w-max font-medium text-white bg-blue-900">{item}</li>
                            ))}
                        </ul>
                    </div>
                )}

                {responsibilities && (
                    <div>
                        <div className="text-lg uppercase font-medium text-gray-400 mb-4">Contributions</div>
                        <ul className="pl-5">
                            {responsibilities.map((item, index) => (
                                <li key={index} className="list-disc">{item}</li>
                            ))}
                        </ul>
                    </div>
                )}
                {features && (
                    <div>
                        <div className="text-lg uppercase font-medium text-gray-400 mb-4">Features</div>
                        <ul className="pl-5">
                            {features.map((item, index) => (
                                <li key={index} className="list-disc">{item}</li>
                            ))}
                        </ul>
                    </div>
                )}

            </div>
        </div>
    )
}

export default ProjectPage