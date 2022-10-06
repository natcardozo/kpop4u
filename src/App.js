import { useState } from "react";

import Cabecalho from "./componentes/Cabecalho";
import Lancamentos from "./componentes/Lancamentos";
import MaisVendidos from "./componentes/MaisVendidos";
import MenuCategorias from "./componentes/MenuCategorias";
import Modal from "./componentes/Modal";
import Rodape from "./componentes/Rodape";

function App() {
  const [menuCategoriasAtivo, setMenuCategoriasAtivo] = useState(false);
  const [loginAtivo, setLoginAtivo] = useState(false);

  return (
    <div>
      <Cabecalho setLoginAtivo={setLoginAtivo} menuCategoriasAtivo={menuCategoriasAtivo} setMenuCategoriasAtivo={setMenuCategoriasAtivo} />
      <Lancamentos />
      <MaisVendidos />
      <Rodape />
      {menuCategoriasAtivo === true ? <MenuCategorias /> : ""}
      {loginAtivo === true ? <Modal setLoginAtivo={setLoginAtivo} /> : ""}
    </div>
  );
}

export default App;
