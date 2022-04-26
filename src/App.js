import React, { useState } from 'react';
import { ThemeProvider } from "styled-components"
import Cubo from './components/cubo'
import { GlobalStyle } from "./components/GlobalStyle";
import { temaClaro, temaEscuro } from "./components/UI/temas";
import {BtnTema} from "./components/UI"
import SwitcherTheme from "./components/SwitcherTheme";

function App() {
  const [tema, setTema] = useState(true)
  const toggleTema = () => {
    setTema((tema) => !tema)
  }
  return (
    <ThemeProvider theme={tema ? temaClaro : temaEscuro}>
      <GlobalStyle />
      <BtnTema onClick={toggleTema}>
        <SwitcherTheme tema={tema} />
      </BtnTema>
      <div className="App">
        <Cubo />
      </div>
    </ThemeProvider>
  );
}

export default App;
