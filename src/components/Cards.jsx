export default function Cards({icon, title, description}){
    return(
        <article className="card">
            <div className="icons">{icon}</div>
            <h2 className="text">{title}</h2>
            <p className="tagline">{description}</p>
        </article>
    )
}