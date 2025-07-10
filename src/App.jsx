import React, { useState } from "react";
import './App.css'; // certifique-se de importar o CSS
import Perfil from "./components/Perfil";
import Formulario from "./components/Perfil/Formulario";
import ReposList from "./components/Perfil/ReposList";

function App() {
  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(false);
  const [nomeUsuario, setNomeUsuario] = useState(''); 

  return (
    <>
      {nomeUsuario.length <= 4 && (
        <input
          type="text"
          className="inputBusca"
          placeholder="Buscar usuário"
          value={nomeUsuario}
          onChange={e => setNomeUsuario(e.target.value)}
        />
      )}

      {nomeUsuario.length > 4 && (
        <>
          <Perfil
            nomeUsuario={nomeUsuario}
            valorBusca={nomeUsuario}
            onChangeBusca={e => setNomeUsuario(e.target.value)}
          />
          <ReposList nomeUsuario={nomeUsuario} />
        </>
      )}

      {/* {formularioEstaVisivel && <Formulario />}
      <button onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)} type="button">toggle form</button>
      */}
    </>
  )
}

export default App
