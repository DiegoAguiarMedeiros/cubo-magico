import React, { useState } from 'react';
import { ThemeProvider } from "styled-components"
import Cubo from './components/cubo'
import { GlobalStyle } from "./components/GlobalStyle";
import { temaClaro, temaEscuro } from "./components/UI/temas";
import { BtnTema } from "./components/UI"
import SwitcherTheme from "./components/SwitcherTheme";


const cubo = [
  [
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [10, 11, 12, 13, 14, 15, 16, 17, 18],
    [19, 20, 21, 22, 23, 24, 25, 26, 27],
    [28, 29, 30, 31, 32, 33, 34, 35, 36],
    [37, 38, 39, 40, 41, 42, 43, 44, 45],
    [46, 47, 48, 49, 50, 51, 52, 53, 54]
  ],
  ['#FFFF00', '#FF0000', '#00FF00', '#FF7F50', '#0000FF', '#F9F9F9']
]


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
      <Cubo cubo={cubo} />
    </ThemeProvider>
  );
}

export default App;
