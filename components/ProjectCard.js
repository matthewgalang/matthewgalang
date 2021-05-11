function ProjectCard({ title, summary, date, image, responsibilities, features, technologies }) {
    const dateObj = new Date(date);

    return (
        <div className="flex flex-col">
            {image && <img alt={image.description} src={`https:${image.fields.file?.url}`} />}
            <div className="flex flex-row justify-between">
                <div className="font-semibold">{title}</div>

                <div class="font-bold pl-4">{dateObj.getFullYear()}</div>
            </div>
        </div>
    )
}

export default ProjectCard