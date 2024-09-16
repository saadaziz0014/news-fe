import '../App.css'

export default function News({ title, url, text }) {
    return (
        <div className="news">
            <a href={url} target="_blank" rel="noreferrer">
                <h3>{title}</h3>
            </a>
        </div>
    )
}