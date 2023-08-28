import { useState } from "react";
import Perfil from "./components/Perfil";
import Formulario from "./components/Formulario";
import ReposList from "./components/RepoList";

function App() {
  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState (true);
  const [nomeUsuario, setNomeUsuario] = useState('');
  // const nome = "Rafael"

  // function retornaNome() {
  //   return nome;
  // }

  // const pessoa = {
  //   nome: "Maria"
  // }

  // let estaDeDia = false;

  return (
    <>
      <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)} />

      {nomeUsuario.length > 4 && (
        <>
          <Perfil nomeUsuario={nomeUsuario} />
          <ReposList nomeUsuario={nomeUsuario} />
        </>
      )}

      {/* {formularioEstaVisivel && (
      <Formulario />
      )}
      <button onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)} type="button">Toggle Form</button> */}
      {/* <h1>Olá, {retornaNome()} e {pessoa.nome}</h1> */}
      {/* <h2>Subtítulo</h2> */}
      {/* {estaDeDia === true ? 'Bom dia' : 'Boa tarde'} */}
      {/* {estaDeDia ? 'Bom dia' : 'Boa tarde'} */}
      {/* {estaDeDia && 'Bom dia'} */}
    </>
  )
}

export default App
