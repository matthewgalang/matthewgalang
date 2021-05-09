function Project( { title, summary, date, image, responsibilities, features, technologies } ) {
    let { file, description } = image

    return (
        <>
            <div>{title}</div>
            <div>{summary}</div>
            <div>{date}</div>
            <img alt={description} src={`https:${file.url}`} />
            <ul>
            {responsibilities.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
            </ul>
            <ul>
            {features.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
            </ul>
            <ul>
            {technologies.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
            </ul>
        </>
    )
}

export default Project