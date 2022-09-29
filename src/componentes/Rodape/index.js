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
                        <img src="/imagens/twitter.png" alt="Twitter" />
                        <img src="/imagens/instagram.png" alt="Instagram" />
                        <img src="/imagens/facebook.png" alt="Facebook" />
                        <img src="/imagens/tik-tok.png" alt="Tik Tok" />
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
