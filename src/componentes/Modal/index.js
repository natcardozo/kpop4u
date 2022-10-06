import "./Modal.css";

export default function Modal({ setLoginAtivo }) {
    return (
        <section className="fundo-escuro">
            <div className="modal">
                <div className="modal__conteudo">
                    <p className="modal__label">Usuário</p>
                    <input className="modal__input" type="text" placeholder="Digite o seu usuário" />
                    <p className="modal__label">Senha</p>
                    <input className="modal__input" type="password" placeholder="Digite a sua senha" />
                    <button className="modal__botao-entrar" type="button">Entrar</button>
                    <button className="modal__botao-cancelar" type="button" onClick={() => setLoginAtivo(false)}>Cancelar</button>
                    <p className="modal__cadastro">Não tem conta? <a className="modal__link" href="#">Cadastre-se</a>.</p>
                </div>
            </div>
        </section>
    )
}
