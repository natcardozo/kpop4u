import Card from "../Card";
import "./MaisVendidos.css";

export default function MaisVendidos() {
    const listaDeAlbuns = [
        {
            grupo: "Twice",
            album: "Bewteen 1 & 2",
            preco: "75,00",
            imagem: "/imagens/imgcard.png",
        },
        {
            grupo: "Loona",
            album: "#",
            preco: "15,00",
            imagem: "/imagens/loona.jpg",
        },
        {
            grupo: "SNSD",
            album: "Holiday Night",
            preco: "45,00",
            imagem: "/imagens/snsd.jpg",
        },
        {
            grupo: "Monsta X",
            album: "Fantasia",
            preco: "60,00",
            imagem: "/imagens/monstax.jpg",
        },
        {
            grupo: "fromis_9",
            album: "from_9",
            preco: "90,00",
            imagem: "/imagens/fromis9.jpg",
        },
        {
            grupo: "IVE",
            album: "Love Dive",
            preco: "45,00",
            imagem: "/imagens/ive.jpg",
        },
        {
            grupo: "GOT 7",
            album: "<Present: YOU> & ME",
            preco: "60,00",
            imagem: "/imagens/got7.jpg",
        },
        {
            grupo: "Apink",
            album: "Look",
            preco: "70,00",
            imagem: "/imagens/apink.jpg",
        },
    ]

    return (
        <div className="mais-vendidos">
            <h3 className="mais-vendidos__titulo">Mais Vendidos</h3>
            <div className="mais-vendidos__cards">
                {listaDeAlbuns.map((item, id) => <Card key={id} grupo={item.grupo} album={item.album} preco={item.preco} imagem={item.imagem} />)}
            </div>
        </div>
    )
}
