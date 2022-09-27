import "./Card.css";

export default function Card(props) {
    console.log(props)
    return (
        <div className="card">
            <img className="card__imagem" src={props.imagem} alt={props.album} />
            <p className="card__titulo">{props.album}</p>
            <p className="card__subtitulo">{props.grupo}</p>
            <span className="card__preco">R$ {props.preco}</span>
        </div>
    )
}
