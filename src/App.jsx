import React, { useState } from "react";
import Perfil from "./components/Perfil";
import Formulario from "./components/Perfil/Formulario";
import ReposList from "./components/Perfil/ReposList";

function App() {
  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(false);
  const [nomeUsuario, setNomeUsuario] = useState(''); 

  return (
    <>
      <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)} />

      {nomeUsuario.length > 4 && (
        <>
        <Perfil nomeUsuario={nomeUsuario}/>
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
