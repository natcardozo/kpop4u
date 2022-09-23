import "./Cabecalho.css";

export default function Cabecalho() {
    return (
        <div className="cabecalho">
            <img className="cabecalho__logo" src="/imagens/kpop4u1.png" alt="Logo da Kpop4U" />
            <p className="cabecalho__item">Início</p>
            <p className="cabecalho__item">Categorias</p>
            <p className="cabecalho__item">Sobre Nós</p>
            <p className="cabecalho__item">Contato</p>
            <img className="cabecalho__perfil" src="/imagens/pessoa1.png" alt="Perfil do usuário" />
            <img className="cabecalho__carrinho" src="/imagens/carrinho-carrinho1.png" alt="Carrinho de compras" />
        </div>
    )
}

// padrão BEM css

// classemae
// classemae__classefilha
// classemae__classefilha--modificador
