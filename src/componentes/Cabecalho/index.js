import { Person, ShoppingCart } from '@mui/icons-material';
import "./Cabecalho.css";

export default function Cabecalho({ setMenuCategoriasAtivo, menuCategoriasAtivo, setLoginAtivo }) {
    return (
        <div className="cabecalho">
            <img className="cabecalho__logo" src="/imagens/kpop4u1.png" alt="Logo da Kpop4U" />
            <p className="cabecalho__item">Início</p>
            <p className="cabecalho__item" onClick={() => setMenuCategoriasAtivo(!menuCategoriasAtivo)}>Categorias</p>
            <p className="cabecalho__item">Sobre Nós</p>
            <p className="cabecalho__item">Contato</p>
            <p className="cabecalho__visitante">Olá, Visitante!</p>
            <Person className="cabecalho__perfil" onClick={() => setLoginAtivo(true)} />
            <ShoppingCart className="cabecalho__carrinho" />
        </div>
    )
}

// padrão BEM css

// classemae
// classemae__classefilha
// classemae__classefilha--modificador
