import { useState } from "react";

import "./MenuCategorias.css";
import { Add, Remove } from "@mui/icons-material";

export default function MenuCategorias() {
    const [albunsAtivo, setAlbunsAtivo] = useState(false);
    const [merchanAtivo, setMerchanAtivo] = useState(false);
    const [fanmadeAtivo, setFanmadeAtivo] = useState(false);
    const [cardsAtivo, setCardsAtivo] = useState(false);

    return (
        <div className="menu-categorias">
            <div className="categorias__item">
                <span className="item__nome">Álbuns</span>
                {albunsAtivo === true ? <Remove onClick={() => setAlbunsAtivo(!albunsAtivo)} className="item__icone" /> : <Add onClick={() => setAlbunsAtivo(!albunsAtivo)} className="item__icone" />}
            </div>
            {albunsAtivo === true ? <><div className="item__subitem">Girl Groups</div><div className="item__subitem">Boy Groups</div><div className="item__subitem">Solo</div></> : ""}
            <div className="categorias__item">
                <span className="item__nome">Merchan Oficial</span>
                {merchanAtivo === true ? <Remove onClick={() => setMerchanAtivo(!merchanAtivo)} className="item__icone" /> : <Add onClick={() => setMerchanAtivo(!merchanAtivo)} className="item__icone" />}
            </div>
            {merchanAtivo === true ? <><div className="item__subitem">Lightstick</div><div className="item__subitem">Poster</div></> : ""}
            <div className="categorias__item">
                <span className="item__nome">Fanmade</span>
                {fanmadeAtivo === true ? <Remove onClick={() => setFanmadeAtivo(!fanmadeAtivo)} className="item__icone" /> : <Add onClick={() => setFanmadeAtivo(!fanmadeAtivo)} className="item__icone" />}
            </div>
            {fanmadeAtivo === true ? <><div className="item__subitem">Cards</div><div className="item__subitem">Adesivos</div><div className="item__subitem">Camisetas</div></> : ""}
            <div className="categorias__item">
                <span className="item__nome">Cards</span>
                {cardsAtivo === true ? <Remove onClick={() => setCardsAtivo(!cardsAtivo)} className="item__icone" /> : <Add onClick={() => setCardsAtivo(!cardsAtivo)} className="item__icone" />}
            </div>
            {cardsAtivo === true ? <><div className="item__subitem">Girl Groups</div><div className="item__subitem">Boy Groups</div><div className="item__subitem">Solo</div></> : ""}
        </div>
    )
}