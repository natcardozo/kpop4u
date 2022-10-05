import { useState } from "react";
import Cabecalho from "./componentes/Cabecalho";
import Lancamentos from "./componentes/Lancamentos";
import MaisVendidos from "./componentes/MaisVendidos";
import MenuCategorias from "./componentes/MenuCategorias";
import Rodape from "./componentes/Rodape";

function App() {
  const [menuCategoriasAtivo, setMenuCategoriasAtivo] = useState(false);

  return (
    <div>
      <Cabecalho menuCategoriasAtivo={menuCategoriasAtivo} setMenuCategoriasAtivo={setMenuCategoriasAtivo} />
      <Lancamentos />
      <MaisVendidos />
      <Rodape />
      {menuCategoriasAtivo === true ? <MenuCategorias /> : ""}
    </div>
  );
}

export default App;
