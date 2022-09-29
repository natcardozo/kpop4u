import { Twitter, Instagram, Facebook, YouTube } from '@mui/icons-material';
import "./Rodape.css";

export default function Rodape() {

    return (
        <section className="rodape">
            <div className="rodape__conteudo">
                <img src="/imagens/logo-verde.png" alt="Logo da K-Pop 4 U" />
                <div className="rodape__menu">
                    <p>Trabalhe conosco</p>
                    <p>Contato</p>
                    <p>Blog</p>
                    <p>Novidades</p>
                </div>
                <div className="rodape__contato">
                    <p>SAC: (XX) XXXX-XXXX</p>
                    <p>Email: sac@kpop4u.com.br</p>
                    <div className="rodape__social">
                        <Twitter className="rodape__icone" />
                        <Instagram className="rodape__icone" />
                        <Facebook className="rodape__icone" />
                        <YouTube className="rodape__icone" />
                    </div>
                </div>
                <div className="rodape__endereco">
                    <p>
                        Av. Paulista, 900<br />
                        1º andar<br />
                        Bela Vista<br />
                        São Paulo - São Paulo
                    </p>
                </div>
            </div>
        </section>
    )
}
