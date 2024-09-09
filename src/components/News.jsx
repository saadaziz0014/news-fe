import '../App.css'

export default function News({ title, url, text }) {
    return (
        <div className="news">
            <h3>{title}</h3>
            <p>{text}</p>
            <a href={url} target="_blank" rel="noreferrer">
                {url}
            </a>
        </div>
    )
}