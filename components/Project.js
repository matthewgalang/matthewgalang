function Project( { title, summary, date, image, responsibilities, features, technologies } ) {
    

    return (
        <>
            <div>{title}</div>
            <div>{summary}</div>
            <div>{date}</div>
            {image && <img alt={image.description} src={`https:${image.fields.file?.url}`} />}
            <ul>
            {responsibilities && responsibilities.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
            </ul>
            <ul>
            {features && features.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
            </ul>
            <ul>
            {technologies && technologies.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
            </ul>
        </>
    )
}

export default Project